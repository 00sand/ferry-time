import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, BrowserRouter } from "react-router-dom";
import App from './App';
import Reacto from './Reacto';
import "./css/app.css"

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(

    <Reacto />

);