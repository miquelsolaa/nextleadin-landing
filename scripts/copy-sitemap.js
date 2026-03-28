const fs = require('fs');
const path = require('path');

const sourcePath = path.join(process.cwd(), '.next', 'server', 'app', 'sitemap.xml.body');
const destPath = path.join(process.cwd(), 'public', 'sitemap.xml');

try {
  if (fs.existsSync(sourcePath)) {
    const content = fs.readFileSync(sourcePath, 'utf8');
    fs.writeFileSync(destPath, content);
    console.log('✓ Sitemap copiat a public/sitemap.xml');
    
    const lines = content.split('\n').length;
    const urls = (content.match(/<url>/g) || []).length;
    console.log(`  - ${lines} línies`);
    console.log(`  - ${urls} URLs`);
  } else {
    console.error('✗ No s\'ha trobat el sitemap generat a:', sourcePath);
    process.exit(1);
  }
} catch (error) {
  console.error('✗ Error copiant el sitemap:', error.message);
  process.exit(1);
}
