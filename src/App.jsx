//Import
import {useState, useEffect} from "react";
import { createUseStyles } from "react-jss";
import * as PetServices from "./services/PetServices.js";
const {fetchPets, fetchSinglePet, updatePet, deletePet, createPet} = PetServices;
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
  const [viewPet, setViewPet] = useState(null); //Using initial value of "null" on the viewPet state - This way, we can render a "No Details" message when a pet HAS NOT been selected from the list of pets
  const [viewForm, setViewForm] = useState(false);

  //Functions
  const fetchData = async () => {
    try{
      const listOfPets = await fetchPets();
      setPets(listOfPets);
    }catch(error){
      console.error(error);
    }
  };

  const petCreation = async (petData) => {
    try{
      await createPet(petData);
      fetchData();
    }catch(error){
      console.error(error);
    }
 };
 
 const petDeletion = async (petId) => {
    try{
      await deletePet(petId);
      fetchData();
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

        <PetList 
        pets={pets} 
        setViewPet={setViewPet}
        setViewForm={setViewForm}
        viewForm={viewForm}
        petCreation={petCreation}
        />

        <ShowPet 
        viewPet={viewPet} 
        setViewPet={setViewPet}
        petDeletion={petDeletion}
        />

      </div>
    </>

  )

};

export default App;

