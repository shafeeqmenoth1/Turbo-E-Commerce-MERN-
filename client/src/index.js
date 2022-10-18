import React from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataProvider from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';



//import {Helmet} from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <DataProvider>
<GoogleOAuthProvider clientId  = {process.env.GOOGLE_LOGIN_CLIENT_ID} >
      <App />
</GoogleOAuthProvider>
  </DataProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
      