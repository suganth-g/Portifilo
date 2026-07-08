const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ executablePath: 'C:\\\\Users\\\\ADMIN\\\\.cache\\\\puppeteer\\\\chrome\\\\win64-150.0.7871.24\\\\chrome-win64\\\\chrome.exe' });
    const page = await browser.newPage();
    
    // Set a good desktop viewport
    await page.setViewport({ width: 1280, height: 800 });

    console.log('Navigating to https://pm-payment.vercel.app/login...');
    // Wait until network is idle so all JS renders
    await page.goto('https://pm-payment.vercel.app/login', { waitUntil: 'networkidle0' });

    console.log('Taking screenshot...');
    await page.screenshot({ path: 'public/payment-login.png' });

    console.log('Screenshot saved to public/payment-login.png');
    await browser.close();
  } catch (err) {
    console.error('Error taking screenshot:', err);
    process.exit(1);
  }
})();
