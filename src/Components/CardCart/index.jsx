import { Box, Card, Heading, Image } from "grommet"
import { useSelector } from "react-redux"
import ButtonGlobal from "../Button"

const CardCart = () => {
    const productsCart = useSelector((state) => state.product)
    console.log(productsCart)

    return(
        <Box margin='10px' width='80%' height='100vh'>
            <Heading level='3'>Itens do carrinho:</Heading>
            {productsCart.map((product, index) => (
                <Card background='brand' margin='2px' direction="row" align='center' justify="between" width='50%' height='100px' key={index}>
                    <Image width='150px' height='150px'  src={product.image} />
                    <Heading level={4}>{product.name}</Heading>
                    <Heading level={5}>{`R$ ${product.price.toFixed(2)}`}</Heading>
                    <ButtonGlobal label='Remover'/>
                </Card>

            ))}

        </Box>
    )


}

export default CardCart