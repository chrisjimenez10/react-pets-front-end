import { createUseStyles } from "react-jss";

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
const PetList = ({pets, setViewPet}) => {

    const classes = styles();

    const handleView = (pet) => {
        setViewPet(pet);
    }

  return (
    <div className={classes.listContainer}>
        <h1 className={classes.h1}>Pet List</h1>
        <ul className={classes.ul}>
        {pets.map((pet)=>{
        return (
            <li key={pet._id} className={classes.li}>
                <h2 onClick={()=> handleView(pet)} className={classes.h2}>{pet.name}</h2>
            </li>
        )
        })}
        </ul>
        <button>New Pet</button>
    </div>

  )
}

export default PetList;