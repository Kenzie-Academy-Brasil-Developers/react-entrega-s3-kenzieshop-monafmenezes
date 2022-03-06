import { Box, Card, Heading, Image, Text } from "grommet"
import ButtonGlobal from '../Button'
import  products from '../../db/index'

import { useDispatch} from "react-redux"
import { addProduct } from "../../Store/modules/cart/actions"

const CardList = () => {

   const dispatch = useDispatch()
   
    const handleAddProduct = (product) => dispatch(addProduct(product))
   
    


    return(
        <Box direction="row" justify="center"  wrap>

            {products.map((product, index)=> (

                <Card key={index} margin='15px' height='420px' width="250px" background='brand'>
                    <Image
                        fit="cover"
                        src={product.image}
                    
                    />
                    <Heading  margin='5px' alignSelf="center" level='3'>{product.name}</Heading>
                    <Heading  margin='5px' alignSelf="center" level='6'>{`R$ ${product.price.toFixed(2)}`}</Heading>
                    <ButtonGlobal product={product} onclick={handleAddProduct} label="Adicionar ao carrinho"/>

                </Card>


            ))}

        </Box>
    )
}
export default CardList