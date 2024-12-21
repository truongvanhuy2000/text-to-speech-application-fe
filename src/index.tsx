import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ConfigProvider} from "antd";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                "token": {
                    "colorPrimary": "#722ed1",
                    "colorInfo": "#722ed1",
                    "fontSize": 18,
                    "colorTextBase": "#39325a"
                },
                "components": {
                    "Input": {
                        "colorBorder": "rgba(217,217,217,0)"
                    },
                    "Card": {
                        "colorBorderSecondary": "rgba(114,46,209,0.12)"
                    }
                }
            }}
        >
            <App/>
        </ConfigProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
