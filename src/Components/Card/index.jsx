import { Box, Card, Heading, Image, Text } from "grommet"
import ButtonGlobal from '../Button'
import  products from '../../db/index'

const CardList = () => {


    return(
        <Box direction="row" justify="center"  wrap>

            {products.map((product)=> (

                <Card margin='15px' height='420px' width="250px" background='brand'>
                    <Image
                        fit="cover"
                        src={product.image}
                    
                    />
                    <Heading color='dark-1' margin='5px' alignSelf="center" level='3'>{product.name}</Heading>
                    <Heading color='accent-1' margin='5px' alignSelf="center" level='6'>{`R$ ${product.price.toFixed(2)}`}</Heading>
                    <ButtonGlobal label="Adicionar ao carrinho"/>

                </Card>


            ))}

        </Box>
    )
}
export default CardList