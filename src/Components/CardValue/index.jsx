import  { Box, Card, CardHeader, CardFooter,  CardBody, Heading, Text } from 'grommet'
import ButtonGlobal from '../Button'

const CardValue = ({cart}) => {

  
    const totalPrice = cart.map((cartProduct) => cartProduct.price)
    .reduce((preventValue, currentValue) => preventValue + currentValue,0)

    return(
        
            <Card  height="medium" align='center' margin='10px' width="medium" background="light-1">
                <CardHeader pad="medium">
                    <Heading  level='3'>Resumo do pedido</Heading>
                </CardHeader>
                <CardBody pad="medium">
                    <Text>Quantidade: {cart.length}</Text> 
                    <Text>Valor Total: R$ {totalPrice.toFixed(2)} </Text>  
                </CardBody>
                <CardFooter pad={{horizontal: "small"}} background="light-2">
                    <ButtonGlobal label='Finalizar pedido'/>
                </CardFooter>
            </Card>
       
    )
}

export default CardValue