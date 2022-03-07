import Dashboard from '../Pages/Dashboard'
import Cart from '../Pages/Cart'
import { Switch, Route } from "react-router-dom";
import { useState } from 'react';



const Routes = () => {
    const [cart, setCart] = useState([])
    return (
        <Switch>
            <Route exact path='/'>
                <Dashboard cart={cart}  setCart={setCart} />
            </Route>
            <Route exact path='/cart'>
                <Cart cart={cart} setCart={setCart} />
            </Route>
        </Switch>
    )
}

export default Routes