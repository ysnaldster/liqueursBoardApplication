import Licores from './components/Licores.jsx'
import ListarLicores from './components/ListarLicores.jsx'
import SliderLicores from './components/SliderLicores.jsx'
import AgregarProducto from './components/AgregarProducto.jsx'
import Store from './store/Store'
import { Provider } from 'react-redux'
import { ChakraProvider } from "@chakra-ui/react"


function App() {
  return (
    <Provider store={Store}>
      <ChakraProvider>
        <div className="App">
          <Licores />
          <SliderLicores />
          <ListarLicores />
          <AgregarProducto/>
        </div>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
