import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Booking from './Booking';

const App=()=>{
    return(
        <BrowserRouter>
            <Booking />
        </BrowserRouter>
    )
}

export default App;