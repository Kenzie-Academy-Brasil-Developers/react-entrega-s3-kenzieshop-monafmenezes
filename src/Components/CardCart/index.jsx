import { Box, Card, Heading, Image } from "grommet"
import { useSelector, useDispatch } from "react-redux"
import ButtonGlobal from "../Button"
import { removeProduct } from "../../Store/modules/cart/actions"
import { toast } from "react-toastify"
import { Container } from "./style"

const CardCart = ({cart, setCart}) => {
    const productsCart = useSelector((state) => state.product)
    const dispatch = useDispatch()


    const handleRemove = (product) => {
       const newCart =  cart.filter((cartProduct) => cartProduct !== product)
       dispatch(removeProduct(newCart))
       setCart(newCart)
       toast.success('Item removido')
      
    }

    return(
        
        <Box responsive margin='5px' width='medium' height='medium'>
            <Heading color='dark-2' level='3'>Itens do carrinho:</Heading>
            {productsCart.map((product, index) => (
                <Card background='brand' margin='2px' direction="row" align='center' justify="between" width='medium' height='150px' key={index}>
                    
                    <Image width='100px' height='200px'  src={product.image} />
                    <Container>
                        <div>
                            <Heading size="14px" margin='5px' level={5}>{product.name}</Heading>
                            <Heading size="14px" margin='5px' level={6}>{`R$ ${product.price.toFixed(2)}`}</Heading>
                        </div>

                        <ButtonGlobal onclick={handleRemove} product={product} label='Remover'/>

                    </Container>

                </Card>

            ))}

        </Box>
    )


}

export default CardCart