import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Main from "./components/main/Main";
import Card from "./components/card/Card";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/card/:username/:repositoryName" element={<Card/>}/>
                        <Route path="*" element={<Navigate to="/"/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
