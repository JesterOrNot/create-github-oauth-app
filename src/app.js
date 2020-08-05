const prompt = require('prompt-sync')();
const puppeteer = require('puppeteer');

const gitHubUserName = prompt("What is your GitHub Username?: ");
const password = prompt("What is your password?: ");
const appName = prompt('What is the application name?: ');
const homePageUrl = prompt("What is the homepage URL?: ");
const appDescription = prompt("What is the app description?: ");
const callBackURL = prompt("What is the callback URL?: ");

(async () => {
  const browser = await puppeteer.launch({nosandbox: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});

  const page1 = await browser.newPage();
  await page1.goto('https://github.com/login');
  await page1.type('#login_field', gitHubUserName);
  await page1.type('#password', password);
  await page1.click('[name="commit"]');
  await page1.waitForNavigation();
  prompt("")
  await page1.screenshot({ path: 'image.png' });

  const page2 = await browser.newPage();
  await page2.goto('https://github.com/settings/applications/new');
  await page2.type('#oauth_application_name', appName);
  await page2.type('#oauth_application_url', homePageUrl);
  await page2.type('#oauth_application_description', appDescription);
  await page2.type('#oauth_application_callback_url', callBackURL);
  await page2.click('p > [type="submit"]');
  await page2.waitForNavigation();

  browser.close();
})()