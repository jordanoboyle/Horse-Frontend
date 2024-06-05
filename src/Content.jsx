import { HorsesIndex } from "./HorsesIndex";
import { HorsesNew } from "./HorsesNew";
import { HorseShow } from "./HorseShow";
import { Modal } from "./Modal";
import {useState, useEffect } from "react";
import axios from "axios"


export function Content() {

  const [horses, setHorses] = useState([]);
  const [isHorseShowVisible, setIsHorseShowVisible] = useState(false)
  const [currentHorse, setCurrenHorse]  = useState({})

  
  const handleHorsesNew = (theParams) => {
    console.log("handling creating new horse");
    axios.post("http://localhost:3000/horses.json", theParams).then((response) => {
      console.log(response.data)
      setHorses([...horses, response.data]);
      
    });
  };
  
  const handleHorsesIndex = () => {
    console.log("handling horses index");
    axios.get("http://localhost:3000/horses.json").then((response) => {
      console.log(response.data);
      setHorses(response.data);

    });
  };
  
  const handleShowHorse = () => {
    console.log("showing this horse data");
    setIsHorseShowVisible(true);
  }
  const handleClose = () => {
    console.log("closing modal");
    setIsHorseShowVisible(false)
  }



  useEffect(handleHorsesIndex, []);
  
  return (
    <main>
      <HorsesNew onCreateHorse={handleHorsesNew} />
      <br/>
      <button id="BRB" onClick={handleHorsesIndex}>Big Red Button</button>
      <HorsesIndex horses={horses} onShowHorse={handleShowHorse}/>
      <Modal show={isHorseShowVisible} onClose={handleClose}>
        Building In CONTENT
        <HorseShow/>
      </Modal >
    </main>
  )
}