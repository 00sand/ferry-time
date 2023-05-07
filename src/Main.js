import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { BrowserRouter as Router, Switch, Routes, Route, Link, BrowserRouter, useNavigate, useLocation } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';
import Child from './Child'
import App from './App'
import './Main.css'

function Main({ props }) {
  const location = useLocation();
  const state = location.state;

  const navigate = useNavigate();


  const [dukTsaDisplay, setDukTsaDisplay] = useState([]);

  const [hsbBowDisplay, setHsbBowDisplay] = useState([]);

  const [hsbLngDisplay, setHsbLngDisplay] = useState([]);

  const [lngHsbDisplay, setLngHsbDisplay] = useState([]);

  const [nanHsbDisplay, setNanHsbDisplay] = useState([]);

  const [swbFulDisplay, setSwbFulDisplay] = useState([]);

  const [swbSgiDisplay, setSwbSgiDisplay] = useState([]);

  const [swbTsawDisplay, setSwbTsaDisplay] = useState([]);

  const [tsaDukDisplay, setTsaDukDisplay] = useState([]);

  const [tsaSgiDisplay, setTsaSgiDisplay] = useState([]);

  const [tsaSwbDisplay, setTsaSwbiDisplay] = useState([]);


  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    let response = await fetch('/.netlify/functions/api')
    let data = await response.json()

    let dukTsa = data.schedule.DUK.TSA.sailings;

    let hsbBow = data.schedule.HSB.BOW.sailings;

    let hsbLng = data.schedule.HSB.LNG.sailings;

    let LngHsb = data.schedule.LNG.HSB.sailings;

    let nanHsb = data.schedule.NAN.HSB.sailings;

    let swbFul = data.schedule.SWB.FUL.sailings;

    let swbSgi = data.schedule.SWB.SGI.sailings;

    let swbTsa = data.schedule.SWB.TSA.sailings;

    let tsaDuk = data.schedule.TSA.DUK.sailings;

    let tsaSgi = data.schedule.TSA.SGI.sailings;

    let tsaSwb = data.schedule.TSA.SWB.sailings;



    let dataMap = function (data) {
      if (data.length == 0) {
        console.log('its empty')
      }
      return (
        <tr>
          <td className="time">{data.time}</td>

          <td className="fill">
            <CircularProgressbar value={data.fill} text={`${data.fill}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)


                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'


                // Text size
                textSize: '1.5em',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: '#3e98c7',
                textColor: '#3e98c7',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
          </td>
          <td className="carFill">
            <CircularProgressbar value={data.carFill} text={`${data.carFill}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)


                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'


                // Text size
                textSize: '1.5em',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: '#3e98c7',
                textColor: '#3e98c7',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
          </td>
        </tr>
      );
    };

    let dukTsaData = dukTsa.map(dataMap);

    let hsbBowData = hsbBow.map(dataMap);

    let hsbLngData = hsbLng.map(dataMap);

    let LngHsbData = LngHsb.map(dataMap);

    let nanHsbData = nanHsb.map(dataMap);

    let swbFulData = swbFul.map(dataMap);

    let swbSgiData = swbSgi.map(dataMap);

    let swbTsaData = swbTsa.map(dataMap);

    let tsaDukData = tsaDuk.map(dataMap);

    let tsaSgiData = tsaSgi.map(dataMap);

    let tsaSwbData = tsaSwb.map(dataMap);



    setDukTsaDisplay(dukTsaData);

    setHsbBowDisplay(hsbBowData);

    setHsbLngDisplay(hsbLngData);

    setLngHsbDisplay(LngHsbData);

    setNanHsbDisplay(nanHsbData);

    setSwbFulDisplay(swbFulData);

    setSwbSgiDisplay(swbSgiData);

    setSwbTsaDisplay(swbTsaData);

    setTsaDukDisplay(tsaDukData)

    setTsaSgiDisplay(tsaSgiData)

    setTsaSwbiDisplay(tsaSwbData)


  };



  return (
    <>
      <section className="container">
        <div className="display-card">
          {state == "Tsawwassen" && <div className="tsa header top">
            <h1>{`${state} to Duke Point`}</h1>
            <table>
              <Child tsa_duk={tsaDukDisplay} />
            </table>
          </div>}

          {state == "Tsawwassen" && <div className="tsa header">

            <h1>{`${state} to S Gulf Islands`}</h1>
            <table>
              <Child tsa_sgi={tsaSgiDisplay} />
            </table>
          </div>}

          {state == "Tsawwassen" && <div className="header">
            <h1>{`${state} to Swartz bay`}</h1>
            <table>
              <Child tsa_swb={tsaSwbDisplay} />
            </table>
          </div>}

          {state == "Victoria" && <div className="header top">
            <h1>{`${state} to Tsawwassen`}</h1>
            <table>
              <Child swb_tsa={swbTsawDisplay} />
            </table>
          </div>}

          {state == "Victoria" && <div className="header">
            <h1>{`${state} to S Gulf Islands`}</h1>
            <table>
              <Child swb_sgi={swbSgiDisplay} />
            </table>
          </div>}


          {state == "Victoria" && <div className="header">
            <h1>{`${state} to Salt Spring Island`}</h1>
            <table>
              <Child swb_ful={swbFulDisplay} />
            </table>
          </div>}

          {state == "Nanaimo" && <div className="header top">
            <h1>{`${state} to Horseshoe Bay`}</h1>
            <table>
              <Child nan_hsb={nanHsbDisplay} />
            </table>
          </div>}

          {state == 'Sunshine Coast' && <div className="header top">
            <h1>{`${state} to Horseshoe Bay`}</h1>
            <table>
              <Child lng_hsb={lngHsbDisplay} />
            </table>
          </div>}

          {state == 'Duke Point' && <div className="header top">
            <h1>{`${state} to Tsawwassen`}</h1>
            <table>
              <Child duk_tsa={dukTsaDisplay} />
            </table>
          </div>}

          {state == 'Horseshoe Bay' && <div className="header top">
            <h1>{`${state} to Sunshine Coast`}</h1>
            <table>
              <Child hsb_lng={hsbLngDisplay} />
            </table>
          </div>}

          {state == 'Horseshoe Bay' && <div className="header">
            <h1>{`${state} to Bowen Island`}</h1>
            <table>
              <Child hsb_bow={hsbBowDisplay} />
            </table>
          </div>}
        </div>
      </section>
    </>
  );


}

export default Main;
