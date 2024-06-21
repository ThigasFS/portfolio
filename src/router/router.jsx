import { createBrowserRouter } from "react-router-dom";
import Content from "../componentes/Content";
import SobreMim from "../pages/Sobre Mim";
import Educacao from "../pages/Educacao";
import Habilidades from "../pages/Habilidades";
import Experiencia from "../pages/Experiencia";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Content />,
        children: [
            {
                path: 'sobre-mim',
                element: <SobreMim />,
            },
            {
                path: 'experiencia',
                element: <Experiencia />,
            },
            {
                path: 'educacao',
                element: <Educacao />,
            },
            {
                path: 'habilidades',
                element: <Habilidades />
            }
        ]
    }
])

export default router