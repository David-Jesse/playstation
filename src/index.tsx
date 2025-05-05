import React from "react";
import {createRoot} from "react-dom/client";
import { configureStore} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import './index.css'
import App from './App.tsx'
import reportWebVitals from './reportWebVitals';
import {fetchEssentialAssets, fetchAllAssets} from "./helper.ts"
import rootReducer from './redux';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const store = configureStore({ reducer: rootReducer });

const showContent = (noFetch?: boolean) => {
  const hideLoader = () => {
    const loader = document.getElementById('loader')
    const body = document.querySelector('body')
    loader!.style.opacity = '0';
    setTimeout(() => {
      body!.style.overflowY = "auto";
      loader!.style.display = "none"
    }, 300)
  }
  if (!noFetch) {
    fetchEssentialAssets()
       
    .then(() => {
      hideLoader();
      fetchAllAssets();
    })
    .catch(hideLoader);
  }
 
    if (noFetch) {
      hideLoader();
    } 
}

const root = createRoot(document.getElementById('root')!);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)

serviceWorkerRegistration.register({
  onSuccess: () => showContent(),
  onUpdate: () => showContent(),
  onNoSw: () => showContent()
})


reportWebVitals();