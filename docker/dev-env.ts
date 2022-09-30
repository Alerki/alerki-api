import fs from 'fs';

const devEnvExists = fs.existsSync('./docker/.env.dev');

if (!devEnvExists) {
  const devEnvContent = fs.readFileSync('./docker/.env.sample');

  fs.createWriteStream('./docker/.env.dev').write(devEnvContent);

  console.log('[+] created .env.dev file, please fill in the blank variables');
}
