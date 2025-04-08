import './App.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from './Components/AppLayout/AppLayout';
import { ErrorPage } from './pages/ErrorPages';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
let myAllRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout></AppLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:
    [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"About",
        element:<About></About>
      },
      {
        path:"Portfolio",
        element:<Portfolio></Portfolio>
      },
      {
        path:"Skills",
        element:<Skills></Skills>
      },
      {
        path:"Contact",
        element:<Contact></Contact>
      },
    ]
  }
]);
const App = () =>{
  return(
    <RouterProvider router={myAllRouter}></RouterProvider>
  )
};

export default App;
