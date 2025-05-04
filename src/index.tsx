import React from "react";
import ReactDOM from "react-dom";
import { configStore} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import './index.css'
import App from './App.tsx'
// import reportWebVitals from './reportWebVitals';
import {fetchEssentialAssets, fetchAllAssets} from "./helpers"

import rootReducer from './store/rootReducer'

const store = createStore(rootReducer);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




// reportWebVitals();