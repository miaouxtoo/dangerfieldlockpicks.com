import fs from "fs";
import https from "https";

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("Please set GEMINI_API_KEY environment variable");
  process.exit(1);
}

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", () => resolve(Buffer.concat(chunks)));
      response.on("error", reject);
    });
  });
}

async function editImageWithGemini(imageBuffer, outputPath, prompt) {
  console.log(`Processing image for: ${outputPath}`);

  const base64Image = imageBuffer.toString("base64");

  const requestBody = {
    contents: [
      {
        parts: [
          {
            inline_data: {
              mime_type: "image/jpeg",
              data: base64Image,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    ],
    generationConfig: {
      responseModalities: ["TEXT", "IMAGE"],
    },
  };

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();

    if (result.candidates?.[0]?.content?.parts) {
      for (const part of result.candidates[0].content.parts) {
        if (part.inlineData || part.inline_data) {
          const inlineData = part.inlineData || part.inline_data;
          const imageData = inlineData.data;
          const buffer = Buffer.from(imageData, "base64");
          fs.writeFileSync(outputPath, buffer);
          console.log(`Saved: ${outputPath}`);
          return true;
        }
      }
    }
    console.log("No image in response");
    return false;
  } catch (error) {
    console.error("Error:", error.message);
    return false;
  }
}

const images = [
  {
    url: "https://www.lockpickworld.com/cdn/shop/files/base-machina-image-2000x2000.jpg?v=1765039534",
    output: "./public/images/products/machina-dark.png",
  },
  {
    url: "https://www.lockpickworld.com/cdn/shop/files/machina-only-ssw1-2000x2000.jpg?v=1765039541",
    output: "./public/images/products/machina-side.png",
  },
  {
    url: "https://www.lockpickworld.com/cdn/shop/files/machina-boxed-closeup-2-2000x2000.jpg?v=1765039545",
    output: "./public/images/products/machina-boxed.png",
  },
  {
    url: "https://www.lockpickworld.com/cdn/shop/files/machina-case-2048x2048_28c2581d-47b6-446e-9c63-192eb517aedd.jpg?v=1765039576",
    output: "./public/images/products/machina-case.png",
  },
];

const prompt = `Re-photograph this product with a dark, moody studio background. Keep the product exactly as it is with all text, branding, and details preserved. Just change the background to look like it was shot in a professional dark studio setting.`;

for (const img of images) {
  console.log(`\nDownloading: ${img.url}`);
  const buffer = await downloadImage(img.url);
  await editImageWithGemini(buffer, img.output, prompt);
  await new Promise((r) => setTimeout(r, 2000));
}

console.log("\nAll images processed!");
