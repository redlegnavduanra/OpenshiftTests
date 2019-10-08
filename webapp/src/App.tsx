import React from "react";
import logo from "./logo.svg";
import "./App.css";

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const App: React.FC = () => {
  const http = axios.create({
    baseURL: "http://testapi-redlegs-test-project.apps.ca-central-1.starter.openshift-online.com/api/v1"
  });

  http
    .get("/")
    .then(result => console.log("got a resutl from api", result))
    .catch(err => console.log("api errored", err));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
