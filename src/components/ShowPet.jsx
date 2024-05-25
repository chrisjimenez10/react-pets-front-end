

const ShowPet = ({viewPet, setViewPet, petDeletion}) => {

  //Functions
  const handleDelete = ()=> {
    petDeletion(viewPet._id);
    setViewPet(null);
  };


  //We can use JavaScript Logic inside the component to conditionally render a message or anything we want when there is NOTHING selected yet to be displayed (This looks much cleaner and better UI, rather than having the details being empty like "breed: " "age: ")
  if(!viewPet){
    return (
      <div>
        <h1>No Details</h1>
      </div>
    )
  }

  return (

        <div>
          <h1>{viewPet.name}</h1>
          <h3>Breed: {viewPet.breed}</h3>
          <h3>Age: {viewPet.age} years old</h3>
          <button onClick={handleDelete}>Delete</button>
        </div>
  )
}

export default ShowPet;