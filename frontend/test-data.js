const all_product = require('./src/components/Assets/all_product.js').default;

console.log('=== PRODUCT DATA ANALYSIS ===');
console.log('Total products:', all_product.length);
console.log('Men products:', all_product.filter(p => p.category === 'men').length);
console.log('Women products:', all_product.filter(p => p.category === 'womens').length);
console.log('Kids products:', all_product.filter(p => p.category === 'kids').length);
console.log('All unique categories:', [...new Set(all_product.map(p => p.category))]);

console.log('\n=== SAMPLE PRODUCTS ===');
console.log('First 3 men products:', all_product.filter(p => p.category === 'men').slice(0, 3));
console.log('First 3 women products:', all_product.filter(p => p.category === 'womens').slice(0, 3));
