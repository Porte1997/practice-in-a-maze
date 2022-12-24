import React from "react";
import Cell from "./Cell";
import rat from "./rat.png";
import cheese from "./cheese.png";
import "./Path.css";

function Path(props){
    var pathIdx = 0;
    var foundPath = [];

    const createFoundPath = () => {
        for (let i = 0; i < 16; i++) {
            foundPath.push(0);
        }
    
        for (let j = 0; j < 16; j++) {
            if (props.maze[j] === 0) {
                foundPath[j] = 2;
            }
        }
    
        for (let k = 0; k < props.currentPath.length; k++) {
            let x = props.currentPath[k][0];
            let y = props.currentPath[k][1];

            foundPath[4 * x + y] = 1;
        }
    };

    const findColor = () => {
        pathIdx += 1;
        let result = foundPath[pathIdx];

        if (result === 2) {
            result = 0;
        } 
        else if (result === 0) {
            result = 2;
        }
    
        if (pathIdx === 14) {
            pathIdx = 0;
        }
        return result;
    };

    createFoundPath();

    return(
        <div className='child-container'>
            <div className='child-maze'>
                <img
                    src={rat}
                    height={85}
                    width={85}
                    alt={""}>
                </img>
            </div>
            <Cell num={findColor()} ></Cell>
            <Cell num={findColor()} ></Cell>
            <Cell num={findColor()} ></Cell>
            <Cell num={findColor()} ></Cell>
            <Cell num={findColor()} ></Cell>
            <Cell num={findColor()} ></Cell>
            <Cell num={findColor()} ></Cell>
            <Cell num={findColor()} ></Cell>
            <Cell num={findColor()} ></Cell>
            <Cell num={findColor()} ></Cell>
            <Cell num={findColor()} ></Cell>
            <Cell num={findColor()} ></Cell>
            <Cell num={findColor()} ></Cell>
            <Cell num={findColor()} ></Cell>
            <div className='child-maze'>
                <img
                    src={cheese}
                    height={85}
                    width={85}
                    alt={""}>
                </img>
            </div>
        </div>
    );
}

export default Path;