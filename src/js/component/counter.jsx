
import React from "react";
import { useState, useEffect } from "react";


const Counter = () => {
    let indexCount = 0;
    let tempArr = [];
    let isReverse = false;
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {setInterval(() => setSeconds(prevSeconds => prevSeconds + 1), 1000);}, []);
    tempArr = seconds.toString().split("");
    tempArr.map(item => {
        indexCount = tempArr.length;
    })
    console.log(indexCount);
    return (
        <div className="row align-items-center">
        <div className="h1 col-1 py-2 display-2 offset-md-2 rounded bg-dark text-light border border-secondary"><i className="fa-regular fa-clock"></i></div>
        <div className="h1 col-1 py-2 mx-1 display-2 rounded bg-dark text-light border border-secondary">{indexCount >= 6 ?tempArr[indexCount -6]: 0}</div>
        <div className="h1 col-1 py-2 mx-1 display-2 rounded bg-dark text-light border border-secondary">{indexCount >= 5 ?tempArr[indexCount -5]: 0}</div>
        <div className="h1 col-1 py-2 mx-1 display-2 rounded bg-dark text-light border border-secondary">{indexCount >= 4 ?tempArr[indexCount -4]: 0}</div>
        <div className="h1 col-1 py-2 mx-1 display-2 rounded bg-dark text-light border border-secondary">{indexCount >= 3 ?tempArr[indexCount -3]: 0}</div>
        <div className="h1 col-1 py-2 mx-1 display-2 rounded bg-dark text-light border border-secondary">{indexCount >= 2 ?tempArr[indexCount -2]: 0}</div>
        <div className="h1 col-1 py-2 mx-1 display-2 rounded bg-dark text-light border border-secondary">{indexCount >= 1 ?tempArr[indexCount -1]: 0}</div>
        <button onClick={() => {setSeconds(prevSeconds => prevSeconds + 10)}} type="button" className="btn border border-secondary rounded bg-dark text-light">add 10</button>
        <button onClick={() => {setSeconds(prevSeconds => prevSeconds - 10)}} type="button" className="btn border border-secondary rounded bg-dark text-light">subtract 10</button>
        </div>
        );
}
export default Counter;