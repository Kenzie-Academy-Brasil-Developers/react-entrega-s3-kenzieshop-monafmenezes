import Dashboard from '../Pages/Dashboard'
import Cart from '../Pages/Cart'
import { Switch, Route } from "react-router-dom";



const Routes = () => {
    
    return (
        <Switch>
            <Route exact path='/'>
                <Dashboard />
            </Route>
            <Route exact path='/cart'>
                <Cart />
            </Route>
        </Switch>
    )
}

export default Routes