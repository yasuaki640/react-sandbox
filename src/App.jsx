import React from 'react';
import ColofulMessage from './components/ColofulMessage'

const App = () => {
    const onClickButton = () => alert();


    return (
        <>
            <h1 style={{color: 'red'}}>Hello world!</h1>
            <ColofulMessage color={"blue"}>深淵を覗くとき</ColofulMessage>
            <ColofulMessage color={"pink"}>深淵もまたこちらを除いているのだ</ColofulMessage>
            <button onClick={onClickButton}>button</button>
        </>
    );
};

export default App;