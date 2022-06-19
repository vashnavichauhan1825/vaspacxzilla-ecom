import React,{useRef, useReducer, useState,useEffect} from 'react'
import shoeImg from '../../../img/shoes.jpg'

const SpecialCountdown = () => {
    const [timerDays, setTimerDays]=useState('00');
    const [timerHours, setTimerHours]=useState('00');
    const [timerMinutes, setTimerMinutes]=useState('00');
    const [timerSeconds, setTimerSrconds]=useState('00');
  
    let interval = useRef();

    const startTimer = () => {
        const countdownDate =new Date('November 30 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance/(1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)));
            const minutes = Math.floor(distance % (1000 * 60 * 60)/(1000*60));
            const seconds = Math.floor((distance % (1000  * 60 ))/1000);
        
          if(distance <0){
              clearInterval(interval.current);
          }else{
              setTimerDays(days);
              setTimerHours(hours);
              setTimerMinutes(minutes);
              setTimerSrconds(seconds);
          }
        
        }, 1000);
    };

    useEffect(()=>{
        startTimer();
        return()=>{
            clearInterval(interval.current);
        };
    });

    return (
    <div className="feature-second pointer"> 
     <img src={shoeImg}/>
     <p>Vaspacx Shoes</p>
    <small className="bold-white-txt">$193.99</small>
    <div className="countdown bold-white-txt">
        <span>{timerDays}</span>
        <small>:</small>
        <span>{timerHours}</span>
        <small>:</small>
        <span>{timerMinutes}</span>
        <small>:</small>
        <span>{timerSeconds}</span>
    </div>
    <div className="countdown-name bold-grey-text">
        <small>days</small>
        <small>hours</small>
        <small>min</small>
        <small>sec</small>
    </div>

 </div>
  )
}

export default SpecialCountdown;