import { HorsesIndex } from "./HorsesIndex";
import { HorsesNew } from "./HorsesNew";
import { HorseShow } from "./HorseShow";
import { Modal } from "./Modal";
import {useState, useEffect } from "react";
import axios from "axios"


export function Content() {

  const [horses, setHorses] = useState([]);
  const [isHorseShowVisible, setIsHorseShowVisible] = useState(false)
  const [currentHorse, setCurrentHorse]  = useState({})

  
  // Horse Render Functions
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

  // we need to transfer the axios web request
  //transfer the data from through props "event up" if you will (params and id of create)
  //make sure to close the modal with handleClose()
  // write JS logic to update setHorses
  const handleHorseUpdate = (theParams, id) => {
    console.log("horse create from content");
    axios.patch(`http://localhost:3000/horses/${id}.json`, theParams).then((response) => {
      console.log(response.data);
      handleClose();

      setHorses(horses.map((horse) => {
        if (horse.id === id) {
          return response.data
        } else {
          return horse  
        }
      }))
      //resets to almost the same, but the one with matching id is replaced and reloaded.
    })

  }

  const handleDestroyHorse = (id) => {
    console.log("deleting horse from content");
    axios.delete(`http://localhost:3000/horses/${id}.json`).then((response) => {
      console.log(response.data);
    })
    window.location.href ='/'
  }
  

  const handleShowHorse = (horse) => {
    console.log("showing this horse data");
    setCurrentHorse(horse);
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
      <HorsesIndex horses={horses} onShowHorse={handleShowHorse}/>
      <Modal show={isHorseShowVisible} onClose={handleClose}>
        <HorseShow horse={currentHorse} onUpdateHorse={handleHorseUpdate} onDeleteHorse={handleDestroyHorse}/>
      </Modal >
    </main>
  )
}