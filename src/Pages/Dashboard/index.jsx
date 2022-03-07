import CardList from "../../Components/Card"
import HeaderGlobal from "../../Components/Header"


const Dashboard = ({cart, setCart}) => {

   
    return (
        <div>
            <HeaderGlobal/>
            <CardList cart={cart} setCart={setCart} />
        </div>
    )
}

export default Dashboard