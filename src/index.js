import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { PollContextProvider } from "./store/prob-context";


ReactDOM.render(
  <PollContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PollContextProvider>,
  document.getElementById('root')
);

