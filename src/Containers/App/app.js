import React, { useState, useEffect } from 'react';
import './app.css';

import Input from '../../Components/input';
import Timer from '../../Components/Timer/timer';
import StartButton from '../../Components/startButton';
import ResetButton from '../../Components/resetButton';
import PlaybackButton from '../../Components/playbackButton';


// Primary Component, handles states and side effects through hooks
const App = () => {
    const [ value, setValue] = useState(0);
    const [ halfTime, setHalfTime ] = useState(0);
    const [ secondsRemaining, setSecondsRemaining ] = useState(0);

    const [ mins, setMins ] = useState('00');
    const [ secs, setSecs ] = useState('00');

    const [ isActive, setIsActive ] = useState(false);

    const [ speed, setSpeed ] = useState(1000);

    const [ isEnding, setIsEnding ] = useState(false);
    const [ isBlinking, setIsBlinking ] = useState(false);
    const [ isHalf, setIsHalf ] = useState(false);

    function handleResetAll() {
        setValue(0);
        setHalfTime(0);
        setSecondsRemaining(0);

        setMins('00');
        setSecs('00');

        setIsActive(false);
        setIsEnding(false);
        setIsBlinking(false);

        setSpeed(1000);
    }

    //Calculates minutes and seconds to display, stores them in state
    function playback() {
        let mins = Math.floor(secondsRemaining / 60);
        let secs = secondsRemaining - ( mins * 60 );

        if ( mins < 10 && secs <10) {
            setMins('0' + mins);
            setSecs('0' + secs);
        }
        else if ( mins < 10 ) {
            setMins('0' + mins);
            setSecs(secs);
        }
        else if ( secs < 10 ) {
            setMins(mins);
            setSecs('0' + secs);
        }
        else {
            setMins(mins);
            setSecs(secs);
        }

        if (secondsRemaining === 20) {
            setIsEnding(true);
        }

        if (secondsRemaining === 10) {
            setIsBlinking(true);
        }

        if (secondsRemaining === 0) {
            setIsBlinking(false);
            setIsEnding(false);
        }

        if (secondsRemaining === halfTime) {
            setIsHalf(true);
        }

        let remaining = secondsRemaining - 1;
        return remaining;

    }

    useEffect(() => {

        if (secondsRemaining >= 0 && isActive)
        setTimeout(() => {
            setSecondsRemaining(playback())
        }, speed)

    }, 
    [isActive, secondsRemaining, isEnding, isBlinking, isHalf])


    const handleInput = ( event ) => {
        let val = event.target.value;

        let secs = val*60;
        let half = Math.floor(secs/2);
        
        setValue(val);
        setSecondsRemaining(secs);
        setHalfTime(half);

    };

    const handleActive = () => {
        if (value > 0){
            setIsActive(!isActive);
        }
        else {
            alert("Please enter a positive integer.");
        }
    }

    const handleSpeed = speed => {
        setSpeed(speed);
    }

    return ( 
        <div className = "wrapper">
            <div className  = "inner-wrapper">
                <Input 
                handleInput = { handleInput } 
                isActive = { isActive }
                value = { value }
                />
                <StartButton 
                handleActive = { handleActive } 
                isActive = { isActive }
                />
                <ResetButton 
                handleResetAll = { handleResetAll } 
                isActive = { isActive }
                />
            </div>
            {secondsRemaining < 0 && isActive ? 
                <div style = {{ height: 40 }}>
                <p 
                    style = {{ fontFamily: "Poppins", fontSize: 16, color: "#484848" }}
                >
                    Time's up!
                </p> 
                </div>
                :
                isHalf && isActive && secondsRemaining !== 0 ?
                    <div style = {{ height: 40 }}>
                        <p 
                            style = {{ fontFamily: "Poppins", fontSize: 16, color: "#484848" }}
                            >
                                More than halfway there!
                        </p> 
                        </div>
                    :
                    <div style = {{ height: 40 }}></div>   
            } 
            <Timer 
            mins = { mins } 
            secs = { secs } 
            isEnding = { isEnding } 
            isBlinking = { isBlinking }
            />
            <div className = "inner-wrapper" >
                <PlaybackButton 
                handleSpeed = { handleSpeed } 
                title = { "1X" } 
                stateSpeed = { speed }
                speed = {1000} 
                isActive = { isActive }
                />
                <PlaybackButton 
                handleSpeed = { handleSpeed } 
                title = { "1.5X" } 
                speed = {750} 
                stateSpeed = { speed }
                isActive = { isActive }
                />
                <PlaybackButton 
                handleSpeed = { handleSpeed } 
                title = { "2X" } 
                stateSpeed = { speed }
                speed = {500} 
                isActive = { isActive }
                />
            </div>
        </div>
     );
}
 
export default App;