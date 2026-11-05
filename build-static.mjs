import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');
fs.mkdirSync(dist, { recursive:true });
for (const file of ['index.html','sumber.html','.nojekyll']) fs.copyFileSync(path.join(root,file),path.join(dist,file));
fs.cpSync(path.join(root,'assets'),path.join(dist,'assets'),{ recursive:true });
console.log('Static output ready: dist/');
