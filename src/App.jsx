import React from 'react';

const App = () => {
    const onClickButton = () => alert();

    const contentStyle = {
        color: 'blue',
        fontSize: '18px'
    };
    return (
        <>
            <h1 style={{color: 'red'}}>Hello world!</h1>
            <p style={contentStyle}>人はなぜ生きるのか？</p>
            <button onClick={onClickButton}>button</button>
        </>
    );
};

export default App;