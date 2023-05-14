import React from 'react';
import './App.css';
import {HashRouter, Routes, Route, Navigate} from "react-router-dom";
import Main from "./components/main/Main";
import Card from "./components/card/Card";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/card/:username/:repositoryName" element={<Card/>}/>
                        <Route path="*" element={<Navigate to="/"/>}/>
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
