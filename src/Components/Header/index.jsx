import { Anchor, Box, Header, Heading, Nav } from "grommet";
import { Cart, Login } from 'grommet-icons';

const HeaderGlobal = () => {
    return(
        <Box align="center" background="graph-2" pad="medium" responsive>
            <Header justify="between">
                <Heading margin="none" color='accent-1' responsive textAlign="start">KenzieShop</Heading>

                <Nav responsive direction="row"pad="medium">
                    <Anchor responsive label='Carrinho' icon={<Cart/>} hoverIndicator />
                    <Anchor responsive label='Entrar' icon={<Login/>} hoverIndicator />       
                </Nav>
            </Header>
        </Box>
    )
}

export default HeaderGlobal