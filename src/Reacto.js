import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Routes, Route, Link, Outlet } from "react-router-dom";
import Main from "./Main";

import App from './App'

function Reacto() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/destinations' element={<Main />} />
            </Routes>
        </Router>
    )
}

export default Reacto;