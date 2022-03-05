import { Grommet } from 'grommet';
import Routes from './Routes';


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
        <Routes/>
      </Grommet>

    </div>
  );
}

export default App;
