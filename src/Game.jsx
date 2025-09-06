import rock from './assets/rock.jpg'
import paper from './assets/paper.jpg'
import sciss from './assets/sciss.jpg'
import { useState } from 'react'

export const Game = () => {

    const winMsg = 'you win!!';
    const loose = 'you loose..';

    const tools = [rock, paper, sciss];
    const [userTool, setUserTool] = useState(tools[0]);
    const [oppTool, setOppTool] = useState(tools[0]);
    const [message, setMessage] = useState('');

    const generateMessage = (user, opp) => {
        if (user === opp) setMessage('Draw!');
        else if (user === 0 && opp === 1) setMessage(loose);
        else if (user === 0 && opp === 2) setMessage(winMsg);
        else if (user === 1 && opp === 0) setMessage(winMsg);
        else if (user === 1 && opp === 2) setMessage(loose);
        else if (user === 2 && opp === 0) setMessage(loose);
        else if (user === 2 && opp == 1) setMessage(winMsg);
    }



    const handleToolClick = (num) => {
        const randomNum = Math.floor(Math.random() * 3);
        console.log(randomNum);
        setUserTool(tools[num]);
        setOppTool(tools[randomNum]);
        generateMessage(num, randomNum);
    }

    return (
        <>
            <h2>Welcome to Rock Paper Scissors Game</h2>

            <div className="players">
                <div className="player">
                    <img src={userTool} height="200px" width="200px" alt="rock" />
                    <h3>USER</h3>
                </div>
                <div className="player">
                    <img src={oppTool} height="200px" width="200px" alt="paper" />
                    <h3>OPPONENT</h3>
                </div>
            </div>

            <br></br>

            <h2>Select any one</h2>
            <div>
                <img className="tool rock" onClick={() => handleToolClick(0)} src={tools[0]} height='100px' width='100px' alt='rock'></img>
                <img className="tool paper" onClick={() => handleToolClick(1)} src={tools[1]} height='100px' width='100px' alt='paper'></img>
                <img className="tool sciss" onClick={() => handleToolClick(2)} src={tools[2]} height='100px' width='100px' alt='scissors'></img>
            </div>
            <h1>{message}</h1>
        </>
    )
}