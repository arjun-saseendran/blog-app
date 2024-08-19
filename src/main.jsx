import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Home from './pages/Home.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import Signup from './pages/Signup.jsx'
import AllPosts from './pages/AllPosts.jsx'

const router = createBrowserRouter([{
  path: '/', element: <App/>,
  children: [{
    path: '/', element: <Home/>
  }, {
    path: 'login', element:(
      <AuthLayout authentication={false}>
        <Login/>
      </AuthLayout>
)
    
  },
  {
    path: 'signup', element:(
      <AuthLayout authentication={false}>
        <Signup/>
      </AuthLayout>
)
    
  },
  {
    path: 'allposts', element:(
      <AuthLayout authentication>
        <AllPosts/>
      </AuthLayout>
)
    
  },


]
}]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
