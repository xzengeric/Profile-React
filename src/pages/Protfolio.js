import React from 'react'

import Jumbotron from "react-bootstrap/Jumbotron"
import "../components/Style/style.css"
import CodeQuiz from "../components/assets/images/CodeQuiz.PNG"
import passwordGenerator from "../components/assets/images/passwordGenerator.PNG"
import project1 from "../components/assets/images/project1.PNG"
function Protfolio() {
        return (
            <div>

           
            <Jumbotron>

            <div className="Protfolio-heading">
                <h1>Protfolio</h1>
                <p>Please Click to explore more!</p>
            </div>

            
                <a href="https://xzengeric.github.io/codeQuiz/index.html"> <img src={CodeQuiz} alt="..."/>
                </a>
             
                <a href="https://xzengeric.github.io/Password-Generator/"> <img
                        src={passwordGenerator} alt="..."/>
                </a>
            
               
                <a href="https://xzengeric.github.io/Project1/project1.html"> <img 
                        src={project1} alt="..."/>
                </a>
              


        </Jumbotron>

        

        </div>
    );
  }
  export default Protfolio;