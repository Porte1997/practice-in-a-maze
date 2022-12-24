import React from "react";
import ReactDOM from "react-dom/client";
import './Maze.css';
import rat from './rat.png';
import cheese from './cheese.png';
import Cell from './Cell';
import Path from "./Path";

function Maze(){
    var mazeMatrix = [2];
    var paths = [];
    var numOfPaths = 0;
    var idx = 0;


    const index = () =>{
        idx += 1;
        return mazeMatrix[idx];
    }

    const generateNewMatrix = () =>{
        for(let i=0; i<14; i++){
            let val = Math.floor(Math.random()*4);
            if(val === 0){
                mazeMatrix.push(0);
            }
            else{
                mazeMatrix.push(2);
            }
        }
        mazeMatrix.push(2);
    }

    const isValidCell = (x, y, visitArray) =>{
        return (
            x >= 0 &&
            x < 4 &&
            y >= 0 &&
            y < 4 &&
            mazeMatrix[x * 4 + y] > 0 &&
            visitArray[x * 4 + y] == 0
        );
    }

    const checkMazes = (visitArray, x, y, currentPath) =>{
        if (x == 3 && y == 3) {
            numOfPaths += 1;
            paths.push([...currentPath]);
            visitArray[15] = 0;
            return;
          }
      
          if (!isValidCell(x, y, visitArray)) {
            return;
          }
      
          visitArray[4 * x + y] = 1;
      
          currentPath.push([x + 1, y]);
          checkMazes(visitArray, x + 1, y, currentPath);
          currentPath.pop();
      
          currentPath.push([x, y + 1]);
          checkMazes(visitArray, x, y + 1, currentPath);
          currentPath.pop();
      
          visitArray[4 * x + y] = 0;
          return;
    }

    const calculatePaths = () =>{
        let visitArray = [];
        for(let i=0; i<16; i++){
            visitArray[i] = 0;
        }

        checkMazes(visitArray, 0, 0, []);
        return paths;
    }

    const handleClick = (e) => {
        e.preventDefault();
        window.location.reload(false);
        console.log("The link was clicked.");
    };

    function CountMazes(){
        return (<div className='count-mazes'>
            <b>Total Ways : {numOfPaths}</b>{" "}
        </div>);
    }

    const findMazePaths = () =>{
        const counter = ReactDOM.createRoot(document.getElementById('count'));
        counter.render(
            <CountMazes></CountMazes>
        );

        let mazeRoutes = document.getElementById("routes");

        for (let i = 0; i < paths.length; i++) {
            const Solutions =()=>{
                return <Path currentPath = {paths[i]} maze = {mazeMatrix}></Path>
            };

            const ids = Math.random();
            const spanTag = document.createElement('span');
            spanTag.id = ids;

            const brTag = document.createElement('br');

            mazeRoutes.appendChild(spanTag);
            mazeRoutes.appendChild(brTag);

            const idRender = ReactDOM.createRoot(document.getElementById(ids));
            idRender.render(
                <Solutions></Solutions>
            );
        }
    };
    
    generateNewMatrix();
    calculatePaths();

    return (
        <div className='main-container'>
            <div className='child-container'>
                <div className='child-maze'>
                    <img
                        src={rat}
                        height={85}
                        width={85}
                        alt={""}>
                    </img>
                </div>
                <Cell num={index()} ></Cell>
                <Cell num={index()} ></Cell>
                <Cell num={index()} ></Cell>
                <Cell num={index()} ></Cell>
                <Cell num={index()} ></Cell>
                <Cell num={index()} ></Cell>
                <Cell num={index()} ></Cell>
                <Cell num={index()} ></Cell>
                <Cell num={index()} ></Cell>
                <Cell num={index()} ></Cell>
                <Cell num={index()} ></Cell>
                <Cell num={index()} ></Cell>
                <Cell num={index()} ></Cell>
                <Cell num={index()} ></Cell>
                <div className='child-maze'>
                    <img
                        src={cheese}
                        height={85}
                        width={85}
                        alt={" "}>
                    </img>
                </div>
            </div>

            <div className='btn-class'>
                <button className='maze-button' onClick= {handleClick} >GENERATE MAZE</button>
                <button className='maze-button' onClick={findMazePaths}>FIND PATHS</button>
            </div>
        </div>
    );
}

export default Maze;