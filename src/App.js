import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import RegistrationPage from './Pages/RegistrationPage';
import Dashboard from './Pages/Components/Dashboard';
import Protected from './Pages/Components/Protected';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Editbar from './Pages/Components/Editbar';

const router = createHashRouter([
  {
    path: "/",
    element: (<Protected><MainPage/></Protected>),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "bar",
        element: <Editbar />,
      },
    ]
  },
  {
    path: "/login",
    element: (<LoginPage/>),
  },
  {
    path: "/signup",
    element: (<RegistrationPage/>),
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
