import React from 'react';
import logo from './logo.svg';
import './App.css';
import T2Speech from "./pages/T2Speech";
import AxiosConfig from "./AxiosConfig";

function App() {
    AxiosConfig()
    return (
        <div className="App">
            <T2Speech></T2Speech>
        </div>
    );
}

export default App;
