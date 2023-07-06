import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from "../components/productsCard";
import UncontrolledExample from '../components/CarouseSlide';
import {useCart} from '../components/context/Cart.context';
import { useProduct } from "../components/context/products.context";

export default function Home() {

    const {products} = useProduct();
    const {cartProducts, setCartProducts} = useCart();

    const handleCart = (event,data) => {
        if(event.target.textContent === "Add to Cart"){
            let cartCopy = [...cartProducts];
        cartCopy.push({...data,quantity:1});
        setCartProducts(cartCopy);
        event.target.textContent = "Remove from Cart";
        }
        else{
            setCartProducts(cartProducts.filter(item => item.id !== data.id));
            event.target.textContent = "Add to Cart";
        }
        
    }

    return (
        <div>
            <div className='carouselSlide mb-5'>
                <UncontrolledExample />
            </div>
            <Container className="text-center">
                <Row>
                    {
                        products.map(item => <ProductCard key={item.id} data={item} handleCart={handleCart} />)
                    }

                </Row>
            </Container>
        </div>
    )
} 