import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Routes, Route, Link, Outlet } from "react-router-dom";
import Main from "./Main";
import "./css/app.css"
import Reacto from "./Reacto";

function App() {
    const [state, setState] = useState("");
    const [isActive, setIsActive] = useState(true);
    const onClick = () => setIsActive(!isActive);


    return (
        <>
            <section className="section1">
                <div className="headers">
                    <h1>BC Ferry Departures</h1>
                    <h2>&#8595; Select your departure bay &#8595;</h2>
                </div>
                <div className="front">

                    <select
                        className="departures"
                        onChange={(e) => {
                            const deptBay = e.target.value;
                            setState(deptBay);
                        }}
                    >
                        <option value="">--Departures--</option>
                        <option value="Tsawwassen">Tsawwassen</option>
                        <option value="Victoria">Victoria</option>
                        <option value="Duke Point">Duke Point</option>
                        <option value="Horseshoe Bay">Horseshoe Bay</option>
                        <option value="Nanaimo">Nanaimo</option>
                        <option value="Sunshine Coast">Sunshine Coast</option>

                    </select>

                </div>

                <div className='selectBay'>
                    <Link to="/destinations" state={state}>
                        <button >Show</button>
                    </Link>

                </div>
            </section>


        </>
    );
}

export default App;




