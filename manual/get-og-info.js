const ogs = require('open-graph-scraper');
const fs = require('fs');
const userAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36';

const category = 'vscode';
const filePath = `./public/bookmarks/${category}.json`;

if (!fs.existsSync(filePath)) {
  throw new Error(`Category ${category} does not exist`);
}

const urls = [
  'https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components',
  'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot',
  'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
  'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint',
  'https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare',
  'https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols',
  'https://marketplace.visualstudio.com/items?itemName=jock.svg',
  'https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer',
  'https://marketplace.visualstudio.com/items?itemName=heybourn.headwind',
  'https://marketplace.visualstudio.com/items?itemName=miguelsolorio.fluent-icons',
  'https://marketplace.visualstudio.com/items?itemName=fisheva.eva-theme',
];

function appendToJsonFileOrWriteNewFile(data) {
  if (fs.existsSync(filePath)) {
    const existingData = JSON.parse(fs.readFileSync(filePath));
    const newData = [...existingData.filter((item) => item.requestUrl !== data.requestUrl), data];
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
  }
}

async function start() {
  const promises = await Promise.allSettled(
    urls.map((url) => {
      return ogs({
        url: url,
        fetchOptions: { headers: { 'user-agent': userAgent } },
      }).then((data) => {
        const { error, result } = data;
        if (error) {
          console.error('error:', error);
          console.error('result:', result);
          return null;
        } else {
          console.log('result:', result);
          return result;
        }
      });
    }),
  );

  promises
    .filter((promise) => promise.status === 'fulfilled' && promise.value)
    .map((promise) => appendToJsonFileOrWriteNewFile(promise.value));

  console.log('Done');
}

start();
