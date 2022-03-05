import { Anchor, Box, Header, Heading, Nav } from "grommet";
import { Cart, Login } from 'grommet-icons';
import { useHistory} from "react-router-dom";


const HeaderGlobal = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/cart')
    }

    return(
        <Box align="center" background="brand" pad="medium" responsive>
            <Header gap="500px" justify="between"  >
                <Heading margin="none" color='accent-1' responsive textAlign="start">KenzieShop</Heading>

                <Nav responsive direction="row"pad="medium">
                    <Anchor onClick={handleClick} responsive label='Carrinho' icon={<Cart/>} hoverIndicator />
                    <Anchor responsive label='Entrar' icon={<Login/>} hoverIndicator />       
                </Nav>
            </Header>
        </Box>
    )
}

export default HeaderGlobal