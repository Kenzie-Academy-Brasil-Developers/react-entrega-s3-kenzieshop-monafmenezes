import { Box, Card, Heading, Image, Text } from "grommet"
import ButtonGlobal from '../Button'

const CardList = () => {
    return(
        <Box>
            <Card margin='15px' height='450px' width='300px' background='brand'>
                <Image
                    fit="cover"
                    src="https://a-static.mlcdn.com.br/618x463/smartphone-motorola-moto-e7-64gb-cinza-metalico-4g-octa-core-2gb-ram-65-cam-dupla-selfie-5mp/magazineluiza/155616800/ec7bdf3301d5264df693401fb7e7ec65.jpg"
                   
                />
                <Heading color='dark-1' margin='5px' alignSelf="center" level='3'>Nome Produto</Heading>
                <Text color='dark-1' margin='5px'  alignSelf="center" >Nome Produto</Text>
                <Heading color='accent-1' margin='5px' alignSelf="center" level='6'>R$1000,00</Heading>
                <ButtonGlobal label="Adicionar ao carrinho"/>

            </Card>

        </Box>
    )
}
export default CardList