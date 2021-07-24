import React from 'react';
import { BrowserRouter } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import Booking from './Booking';

const App=()=>{
    return(
        <BrowserRouter>
            <Booking />
            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App;