import Container from 'react-bootstrap/Container';
import CartCard from '../components/cartCard';
import { useCart } from "../components/context/Cart.context";

export default function Cart() {

    const {cartProducts,setCartProducts} = useCart();

    const handleQuantity = (e,data) => {
        console.log(cartProducts);
        let quantity = e.target.value;
        let price = data.price;
            setCartProducts(cartProducts.map(item => {
                if(item.id === data.id){
                    return {...item,addPrice:(quantity*price)}
                }
                return {...item}
            }))
    }

    return (
        <div>
            <Container>
                {
                    cartProducts.map((item,i) => <CartCard key={i} data={item} handleQuantity={handleQuantity}/>)
                }
            </Container>
        </div>
    )
} 