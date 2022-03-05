import { Grommet } from 'grommet';
import ButtonGlobal from './Components/Button';

function App() {
  const theme = {
    global: {
      font:{
        family: 'Roboto',
        size: '18px',
        height: '20px'
      }
    }
  }
  return (
    <div className="App">
     <Grommet theme={theme}>
      
       <ButtonGlobal label='Adicionar ao carrinho' />

      </Grommet>

    </div>
  );
}

export default App;
