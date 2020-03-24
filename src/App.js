import React from 'react';
import './App.css';
import Converter from "./components/Converter";
import NavBar from "./components/Navbar";

function App() {
    return (
        <div>
            <NavBar/>
            <Converter/>
        </div>
    );
}

export default App;
