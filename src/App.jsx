import React, {useState} from 'react';
import ColofulMessage from './components/ColofulMessage'

const App = () => {
    const [num, setNum] = useState(100);
    const onClickCountUp = () => {
        setNum(num + 1);
    };

    const [faceShowFlag, setFaceShowFlag] = useState(true);
    const onClickSwitchShowFlag = () => {
        setFaceShowFlag(!faceShowFlag);
    };


    return (
        <>
            <h1 style={{color: 'red'}}>Hello world!</h1>
            <ColofulMessage color={"blue"}>深淵を覗くとき</ColofulMessage>
            <ColofulMessage color={"pink"}>深淵もまたこちらを除いているのだ</ColofulMessage>
            <button onClick={onClickCountUp}>Count up</button>
            <p>{num}</p>
            <button onClick={onClickSwitchShowFlag}>on/off</button>
            {faceShowFlag && <p> ^^) _旦~~</p>}
        </>
    );
};

export default App;