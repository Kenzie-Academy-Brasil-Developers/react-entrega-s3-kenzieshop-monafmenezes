import { Box, Card, Heading, Image } from "grommet"
import { useSelector, useDispatch } from "react-redux"
import ButtonGlobal from "../Button"
import { removeProduct } from "../../Store/modules/cart/actions"


const CardCart = ({cart, setCart}) => {
    const productsCart = useSelector((state) => state.product)
    const dispatch = useDispatch()


    const handleRemove = (product) => {
       const newCart =  cart.filter((cartProduct) => cartProduct !== product)
       dispatch(removeProduct(newCart))
       setCart(newCart)
      
    }

    return(
        
        <Box margin='10px' width='80%' height='100vh'>
            <Heading level='3'>Itens do carrinho:</Heading>
            {productsCart.map((product, index) => (
                <Card background='brand' margin='2px' direction="row" align='center' justify="between" width='50%' height='100px' key={index}>
                    <Image width='150px' height='150px'  src={product.image} />
                    <Heading level={4}>{product.name}</Heading>
                    <Heading level={5}>{`R$ ${product.price.toFixed(2)}`}</Heading>
                    <ButtonGlobal onclick={handleRemove} product={product} label='Remover'/>
                </Card>

            ))}

        </Box>
    )


}

export default CardCart