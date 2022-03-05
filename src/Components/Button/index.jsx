import { Button, Box } from "grommet";

const ButtonGlobal = ({label}) => {
    return(
        <Box>
            <Button primary label={label} alignSelf="center" onClick={()=> console.log('clicou!')}/>
        </Box>
    )
}

export default ButtonGlobal