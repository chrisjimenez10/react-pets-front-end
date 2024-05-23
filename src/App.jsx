//Import
import {useState, useEffect} from "react";
import { createUseStyles } from "react-jss";
import * as PetServices from "./services/PetServices.js";
const {fetchPets, fetchSinglePet, updatePet, deletePet} = PetServices;
import PetList from "./components/PetList.jsx";
import ShowPet from "./components/ShowPet.jsx";

//Styles Configuration
const styles = createUseStyles({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "2fr 4fr",
  }
});


//Parent Component
const App = () => {

  const classes = styles();

  //State
  const [pets, setPets] = useState([]);
  const [viewPet, setViewPet] = useState({});

  //Functions
  const fetchData = async () => {
    try{
      const listOfPets = await fetchPets();
      setPets(listOfPets);
    }catch(error){
      console.error(error);
    }
  };

  useEffect(()=>{
    fetchData();
  }, []);

  return (

    <>
      <div className={classes.gridContainer}>

        <PetList pets={pets} setViewPet={setViewPet}/>

        <ShowPet viewPet={viewPet} setViewPet={setViewPet}/>

      </div>
    </>

  )

};

export default App;

