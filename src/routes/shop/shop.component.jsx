import { useContext } from 'react';
import { ProductContext } from '../../context/products.context';
import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {
    const { products } = useContext(ProductContext);

    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop;
