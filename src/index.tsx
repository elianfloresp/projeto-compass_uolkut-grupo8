import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUpFormStepOne from './components/Form/SignUpFormStepOne';
import SignUpFormStepTwo from './components/Form/SignUpFormStepTwo';
import SignInForm from './components/Form/SignInForm';
import RecoverPasswordForm from './components/Form/RecoverPasswordForm';
import ChangePasswordForm from './components/Form/ChangePasswordForm';
import SignInPage from './pages/SignIn';


const router = createBrowserRouter([
  {
    path: '/', 
    element:<App />,
    children: [
      {index: true, element:<SignInPage/>},
      {path: 'sign-up/step-one', element:<SignUpFormStepOne/>},
      {path: 'sign-up/step-two', element:<SignUpFormStepTwo/>},
      {path: 'password/recover', element:<RecoverPasswordForm/>},
      {path: 'password/change', element:<ChangePasswordForm/>},
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
