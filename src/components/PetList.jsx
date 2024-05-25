import { createUseStyles } from "react-jss";
import Form from "./Form";

//Styles Configuration
const styles = createUseStyles({
    listContainer: {
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    ul: {
        listStyle: "none",
    },
    li: {
        marginLeft: "10px",
    },
    h1: {
        color: "white",
    },
    h2: {
        color: "lightcyan",
        cursor: "pointer",
    },

});


//Child Component
const PetList = ({pets, setViewPet, setViewForm, viewForm, petCreation}) => {

    const classes = styles();

    const handlePetView = (pet) => {
        setViewPet(pet);
    };

    const handleViewForm = () => {
        //We can conditionally render the form with an event handler and manipulating the state of the variable we assigned it to (We used boolean values)
        setViewForm(!viewForm); //Updating state of viewForm to "true" since initial value is "false"
    };


  return (
    <div className={classes.listContainer}>
        <h1 className={classes.h1}>Pet List</h1>
        <ul className={classes.ul}>
        {pets.map((pet)=>{
        return (
            <li key={pet._id} className={classes.li}>
                <h2 onClick={()=> handlePetView(pet)} className={classes.h2}>{pet.name}</h2>
            </li>
        )
        })}
        </ul>
        {/* Here, we are giving a nice UI touch to the text of the button based on whether the form is displayed or not - We do this by using the value of the state variable we assigned to handle this conditional render of the form (we used booleans: initial value is false and when we click button to display the form it changes the state to true) */}
        <button onClick={handleViewForm}>{viewForm ? "Close Form" : "Open Form"}</button>
        {viewForm === true && (
            <Form petCreation={petCreation}/>
        )}
        
    </div>

  )
}

export default PetList;