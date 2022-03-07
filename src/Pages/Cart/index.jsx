import CardCart from "../../Components/CardCart"
import HeaderGlobal from "../../Components/Header"

const Cart = ({cart, setCart}) => {
    
    return(
        <div>
            <HeaderGlobal/>
            <CardCart cart={cart} setCart={setCart}/>
        </div>
    )
}

export default Cart