import React, {useEffect, useState} from 'react';
import {ColorfulMessage} from './components/ColorfulMessage'

const App = () => {
    console.log("re renderd");
    const [num, setNum] = useState(0);
    const onClickCountUp = () => {
        setNum(num + 1);
    };

    const [faceShowFlag, setFaceShowFlag] = useState(false);
    const onClickSwitchShowFlag = () => {
        setFaceShowFlag(!faceShowFlag);
    };

    useEffect(() => {
        if (num > 0) {
            if (num % 3 === 0) {
                faceShowFlag || setFaceShowFlag(true);
            } else {
                faceShowFlag && setFaceShowFlag(false);
            }
        } else {
            setFaceShowFlag(false);
        }
    }, [num]);

    return (
        <>
            <h1 style={{color: 'red'}}>Hello world!</h1>
            <ColorfulMessage color={"blue"}>深淵を覗くとき</ColorfulMessage>
            <ColorfulMessage color={"pink"}>深淵もまたこちらを除いているのだ</ColorfulMessage>
            <button onClick={onClickCountUp}>Count up</button>
            <p>{num}</p>
            <button onClick={onClickSwitchShowFlag}>on/off</button>
            {faceShowFlag && <p> ^^) _旦~~</p>}
        </>
    );
};

export default App;