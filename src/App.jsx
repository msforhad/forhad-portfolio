// import './App.css'
// import { createBrowserRouter, RouterProvider} from "react-router-dom";
// import { AppLayout } from './Components/AppLayout/AppLayout';
// import { ErrorPage } from './pages/ErrorPages';
// import { Home } from './pages/Home';
// import { About } from './pages/About';
// import { Portfolio } from './pages/Portfolio';
// import { Skills } from './pages/Skills';
// import { Contact } from './pages/Contact';
// let myAllRouter= createBrowserRouter([
//   {
//     path:"/",
//     element:<AppLayout></AppLayout>,
//     errorElement:<ErrorPage></ErrorPage>,
//     children:
//     [
//       {
//         path:"/",
//         element:<Home></Home>
//       },
//       {
//         path:"About",
//         element:<About></About>
//       },
//       {
//         path:"Portfolio",
//         element:<Portfolio></Portfolio>
//       },
//       {
//         path:"Skills",
//         element:<Skills></Skills>
//       },
//       {
//         path:"Contact",
//         element:<Contact></Contact>
//       },
//     ]
//   }
// ]);
// const App = () =>{
//   return(
//     <RouterProvider router={myAllRouter}></RouterProvider>
//   )
// };

// export default App;


// -------github hosting er jonno code ---------
import './App.css';
import { createHashRouter, RouterProvider } from "react-router-dom"; // 🛠️ changed this line
import { AppLayout } from './Components/AppLayout/AppLayout';
import { ErrorPage } from './pages/ErrorPages';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';

let myAllRouter = createHashRouter([ // 🛠️ changed to HashRouter
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "Portfolio",
        element: <Portfolio />
      },
      {
        path: "Skills",
        element: <Skills />
      },
      {
        path: "Contact",
        element: <Contact />
      }
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={myAllRouter} />
  );
};

export default App;

