import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInPage from './pages/SignIn';
import SignUpStepOnePage from './pages/SignUpStepOne';
import SignUpStepTwoPage from './pages/SignUpStepTwo';
import RecoverPasswordPage from './pages/RecoverPassword';
import ChangePasswordPage from './pages/ChangePassword';


const router = createBrowserRouter([
  {
    path: '/', 
    element:<App />,
    children: [
      {index: true, element:<SignInPage/>},
      {path: 'sign-up/step-one', element:<SignUpStepOnePage/>},
      {path: 'sign-up/step-two', element:<SignUpStepTwoPage/>},
      {path: 'password/recover', element:<RecoverPasswordPage/>},
      {path: 'password/change', element:<ChangePasswordPage/>},
    ]
  },
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
