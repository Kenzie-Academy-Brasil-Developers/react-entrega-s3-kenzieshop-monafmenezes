import { Grommet } from 'grommet';
import Routes from './Routes';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        <ToastContainer />
        <Routes/>
      </Grommet>

    </div>
  );
}

export default App;
