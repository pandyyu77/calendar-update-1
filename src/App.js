import React from 'react';
import CustomCalendar from "./CustomCalendar"
import './App.css';



function App() {
    document.body.style.backgroundColor = "#000a14";
    return (
        <div className="App" style={{
            display: "grid",
            placeItems: "center",
            height:"100vh",
        }}>
            <CustomCalendar/>
        
        </div>
    );
    
}

export default App;