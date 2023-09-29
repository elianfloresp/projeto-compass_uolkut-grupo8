import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInPage from './pages/SignIn';
import SignUpStepOnePage from './pages/SignUpStepOne';
import RecoverPasswordPage from './pages/RecoverPassword';
import ChangePasswordPage from './pages/ChangePassword';
import SigningLayout from './pages/SigningLayout';
import ProfilePage from './pages/ProfileScreen';


const router = createBrowserRouter([
  {
    path: '/', 
    element:<App />,
    children: [
      {
        path: '',
        element:<SigningLayout/>,
        children: [
          {index: true, element:<SignInPage/>},
          {path: 'sign-up', element:<SignUpStepOnePage/>},
          {path: 'password/recover', element:<RecoverPasswordPage/>},
          {path: 'password/change', element:<ChangePasswordPage/>},
        ]
      },
    ]
  },
  {path: 'home', element:<ProfilePage />},
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
