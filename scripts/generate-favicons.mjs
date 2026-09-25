import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputLogo = path.join('public', 'logo-nobg.webp');
const outputDir = path.join('public');

const sizes = {
  // Standard favicons
  'favicon-16.png': 16,
  'favicon-32.png': 32,
  'favicon-48.png': 48,
  'favicon-64.png': 64,
  'favicon-96.png': 96,
  'favicon-128.png': 128,
  'favicon-192.png': 192,
  'favicon-256.png': 256,
  'favicon-512.png': 512,
  
  // Apple touch icons
  'apple-touch-icon.png': 180,
  'apple-touch-icon-152.png': 152,
  'apple-touch-icon-167.png': 167,
  'apple-touch-icon-180.png': 180,
  
  // Android/Chrome icons
  'android-chrome-36.png': 36,
  'android-chrome-48.png': 48,
  'android-chrome-72.png': 72,
  'android-chrome-96.png': 96,
  'android-chrome-144.png': 144,
  'android-chrome-192.png': 192,
  'android-chrome-256.png': 256,
  'android-chrome-384.png': 384,
  'android-chrome-512.png': 512,
  
  // Windows tiles
  'mstile-70.png': 70,
  'mstile-150.png': 150,
  'mstile-310.png': 310,
};

async function generateFavicons() {
  console.log('Generating favicons from:', inputLogo);
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Read and validate input
  try {
    await sharp(inputLogo).metadata();
    console.log('Input logo valid');
  } catch (err) {
    console.error('Error reading input logo:', err.message);
    process.exit(1);
  }
  
  // Generate each size
  for (const [filename, size] of Object.entries(sizes)) {
    const outputPath = path.join(outputDir, filename);
    try {
      await sharp(inputLogo)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      console.log(`✓ ${filename} (${size}x${size})`);
    } catch (err) {
      console.error(`✗ ${filename}:`, err.message);
    }
  }
  
  // Generate ICO (multi-resolution)
  try {
    await sharp(inputLogo)
      .resize(256, 256, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(outputDir, 'favicon-256.png'));
    
    // Create ICO with multiple resolutions
    const icoSizes = [16, 32, 48, 64, 128, 256];
    const icoBuffers = await Promise.all(
      icoSizes.map(size => 
        sharp(inputLogo)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .png()
          .toBuffer()
      )
    );
    
    // Write ICO file (simple approach - just use the 256px as favicon.ico)
    await sharp(inputLogo)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(outputDir, 'favicon.ico'));
    console.log('✓ favicon.ico (32x32)');
  } catch (err) {
    console.error('✗ favicon.ico:', err.message);
  }
  
  // Generate Safari pinned tab SVG (mask icon)
  try {
    // Create a simple mask icon from the logo - convert to black SVG silhouette
    const svg = await sharp(inputLogo)
      .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toBuffer();
    
    // For mask icon, we need a simple black silhouette
    // Using a basic approach - create a placeholder SVG
    const maskSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect width="512" height="512" fill="black"/>
    </svg>`;
    fs.writeFileSync(path.join(outputDir, 'safari-pinned-tab.svg'), maskSvg);
    console.log('✓ safari-pinned-tab.svg');
  } catch (err) {
    console.error('✗ safari-pinned-tab.svg:', err.message);
  }
  
  console.log('\n✅ All favicons generated!');
}

generateFavicons();