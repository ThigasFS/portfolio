import styled from "styled-components";
import Perfil from "./componentes/Perfil";
import router from './router/router'
import { RouterProvider } from "react-router-dom";
import { ForceRenderProvider } from "./context/globalRender";

const ContainerPrincipal = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 50px;
  left: 50px;
  right: 50px;
`

function App() {
  return (
    <ContainerPrincipal>
      <Perfil />
      <ForceRenderProvider>
        <RouterProvider router={router} />
      </ForceRenderProvider>
    </ContainerPrincipal>
  );
}

export default App;
