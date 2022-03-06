import { Button, Box } from "grommet";

const ButtonGlobal = ({label, onclick, product}) => {
 
    return(
        <Box>
            <Button margin='10px' primary label={label} alignSelf="center" onClick={()=>onclick(product)}/>
        </Box>
    )
}

export default ButtonGlobal