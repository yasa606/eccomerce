import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'; 
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay  from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/Description/DescriptionBox';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    
    // Debug: Log the productId and available products
    console.log('Product ID from URL:', productId);
    console.log('Available products:', all_product.length);
    
    // Find product with type-safe comparison
    const product = all_product.find((e) => {
        const idMatch = e.id === Number(productId);
        console.log(`Comparing ${e.id} with ${Number(productId)}: ${idMatch}`);
        return idMatch;
    });
    
    // Handle product not found
    if (!product) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '50vh',
                flexDirection: 'column'
            }}>
                <h2>Product Not Found</h2>
                <p>Product with ID {productId} could not be found.</p>
                <button 
                    onClick={() => window.history.back()}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#ff4141',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div>
            <Breadcrums product={product}/>
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProduct/>
        </div>
    )
}

export default Product
