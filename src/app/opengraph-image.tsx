import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Dangerfield Lock Picks - Professional British Engineered Lock Picking Tools';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '16px',
              backgroundColor: '#d4af37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px',
              fontWeight: 'bold',
              color: '#0a0a0a',
              fontFamily: 'sans-serif',
            }}
          >
            D
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: '#fafafa',
                letterSpacing: '0.05em',
              }}
            >
              DANGERFIELD
            </span>
            <span
              style={{
                fontSize: '24px',
                color: '#a1a1a1',
                marginTop: '-8px',
              }}
            >
              Lock Picks
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            color: '#d4af37',
            marginBottom: '20px',
          }}
        >
          Professional British Engineered Lock Picking Tools
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginTop: '20px',
          }}
        >
          {['20+ Years Experience', '301 Stainless Steel', '2500+ 5-Star Reviews'].map((feature) => (
            <div
              key={feature}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#a1a1a1',
                fontSize: '20px',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#d4af37',
                }}
              />
              {feature}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '20px',
            color: '#737373',
          }}
        >
          dangerfieldlockpicks.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
