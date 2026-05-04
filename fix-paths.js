import fs from 'fs';
import path from 'path';

const indexPath = path.join(process.cwd(), 'index.html');
let content = fs.readFileSync(indexPath, 'utf-8');

// Reemplazar rutas de __manus__ y assets
content = content.replace(/src="\/__manus__/g, 'src="/ticofactlanding/__manus__');
content = content.replace(/href="\/assets/g, 'href="/ticofactlanding/assets');

fs.writeFileSync(indexPath, content, 'utf-8');
console.log('Paths fixed successfully');
