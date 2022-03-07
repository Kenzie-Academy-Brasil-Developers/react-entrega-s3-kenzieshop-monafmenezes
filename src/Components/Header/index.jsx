import { Anchor, Box, Header, Heading, Nav } from "grommet";
import { Cart, Home, Login } from 'grommet-icons';

import { useHistory} from "react-router-dom";


const HeaderGlobal = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/cart')
    }
    const handleHome = () => {
        history.push('/')
    }

    return(
        
            <Header   background='brand' responsive gap="xsmall" justify="between"  >
               
                <Heading  margin="none" color='accent-1' responsive textAlign="start">KenzieShop</Heading>
            

                <Nav responsive direction="row"pad="small">
                    <Anchor  pad='small' gap="small" responsive  onClick={handleHome} icon={<Home />}/>
                    <Anchor  responsive onClick={handleClick}   icon={<Cart   />} hoverIndicator />
                    
                </Nav>
            </Header>
      
    )
}

export default HeaderGlobal