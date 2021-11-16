import {Button} from "react-bootstrap"
import { ButtonGroup } from "react-bootstrap";
import { BsController } from "react-icons/bs";
import {BsFillCaretDownFill} from "react-icons/bs"
import AnimeList from "./AnimeList";
import { Link } from 'react-router-dom';

let flag = 0;

const Intro = () => {
    
    return ( 
        <div id="intro-container">
            
                <div id="pageTitle">
                    <BsController></BsController> 
                    <span>THE GEEK PAGE</span> 
                </div>

                <ButtonGroup id="navList">
                    <Button variant="light">
                        <Link className = "buttonFont" to='/author'>Author</Link>    
                    </Button>
                    <Button className = "buttonFont" onClick={swapState} variant="light">
                        ANIMES 
                        <BsFillCaretDownFill size=".5em"></BsFillCaretDownFill> 
                    </Button> 
                    <Button  variant="light" >
                        <Link className = "buttonFont" to='/goal'>Goals</Link>
                    </Button> 
                </ButtonGroup>

                <div>
                    <AnimeList></AnimeList>
                </div>

            {/* <span id="typing">
                {!starting && typingFunc(myMessage)}
            </span>

            <div id="startButton">
                <Button onClick={start} variant="dark">START</Button>
            </div> */}

        </div>
     );
}
 
export default Intro;

// const typingFunc = (text) =>{
//     let partial = "";
//     let counter = text.length;
//     let time = 0;
//     starting = 1;

//     for(let j=0; j<counter;j++){
//         let counter_2 = text[j].length;
//         for(let i=0; i<counter_2;i++){
//             time+=200;
//             setTimeout(()=>{
            
//                     partial = text[j].slice(0,i+1);   
                    
//                 document.getElementById('typing').textContent = partial;
//             },time);           
//         }
//     }
// }

// const start = () =>{
//     document.getElementById('startButton').style.display = "none";
//     document.getElementById('typing').style.display = "none";
//     document.getElementById('navList').style.visibility = "visible";   
// }

const swapState = () =>{
    if(flag){
        flag = 0;
        hide();
    }else{
        flag = 1;
        show();
    }
}

const show = ()=>{
    document.getElementById("dropDown").style.visibility = "visible"; 
}

const hide = (element) =>{
    document.getElementById("dropDown").style.visibility = "hidden"; 
}