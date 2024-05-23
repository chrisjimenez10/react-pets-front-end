

const ShowPet = ({viewPet, showViewPet}) => {

  return (

    <div>
        <h1>{viewPet.name}</h1>
        <h3>Breed: {viewPet.breed}</h3>
        <h3>Age: {viewPet.age} years old</h3>
    </div>

  )
}

export default ShowPet;