import CardCart from "../../Components/CardCart"
import CardValue from "../../Components/CardValue"
import HeaderGlobal from "../../Components/Header"
import { Container } from "./style"

const Cart = ({cart, setCart}) => {
    
    return(
        <div>
            <HeaderGlobal/>
            <Container>
                <CardCart cart={cart} setCart={setCart}/>
                <CardValue cart={cart}/>

            </Container>
        </div>
    )
}

export default Cart