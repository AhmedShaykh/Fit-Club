import React, { useContext } from 'react';
import { ProductContext } from '../Contexts/ProductContext';

const Home = () => {

    const { products } = useContext(ProductContext);

    const filteredProducts = products.filter(items => {
        return (
            items.category === "men's clothing" || items.category === "women's clothing"
        );
    });

    // console.log(filteredProducts)

    return (
        <div>
            <section>
                <div className="container mx-auto">
                    <div>
                        {filteredProducts.map(product => {
                            return <div>
                                {product.title}
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Home;