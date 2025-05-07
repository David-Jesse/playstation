import React from "react";
import {createRoot} from "react-dom/client";
import { configureStore} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import './index.css'
import App from './App.tsx'
import reportWebVitals from './reportWebVitals.ts';
import {fetchEssentialAssets, fetchAllAssets} from "./helper.ts"
import rootReducer from './redux/index.ts';
import * as serviceWorkerRegistration from './serviceWorkerRegistration.ts';
//import { AppInterface } from "./redux/App/types.ts";


const store = configureStore({ reducer: rootReducer });
//const appState: AppInterface = store.getState().app


export type AppDispatch = typeof store.dispatch

const showContent = (noFetch?: boolean) => {
  const hideLoader = () => {
    const loader = document.getElementById('loader')
    const body = document.querySelector('body')

// sourcery skip: merge-else-if
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
// sourcery skip: use-braces
        if (body) body.style.overflowY = "auto";
        if (loader) loader.style.display = "none"
      }, 300)
    } else {
// sourcery skip: use-braces
      if (body) body.style.overflowY = "auto";
  }
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