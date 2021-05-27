import Licores from './components/Licores.jsx'
import ListarLicores from './components/ListarLicores.jsx'
import SliderLicores from './components/SliderLicores.jsx'
import AgregarProducto from './components/AgregarProducto.jsx'
import Store from './store/Store'
import { Provider } from 'react-redux'
import { ChakraProvider } from "@chakra-ui/react"
import styled from 'styled-components'
// import RegistrarUsuario from './components/RegistrarUsuario.jsx'


const StyledMainContainer = styled.div`
    font-family: 'Open Sans', sans-serif;
`


function App() {
  return (
    <Provider store={Store}>
      <ChakraProvider>
        <StyledMainContainer className="App" >
          <Licores />
          <SliderLicores />
          <ListarLicores />
          <AgregarProducto/>
          {/* <RegistrarUsuario/> */}
        </StyledMainContainer>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
