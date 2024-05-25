//Import
import {useState} from "react";

const Form = ({petCreation}) => {

    //State
    const [formData, setFormData] = useState({
        name: "",
        breed: "",
        age: "",
    });

    //Functions
    const handleInputChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        petCreation(formData);
    }

  return (

    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange}/>

        <label htmlFor="breed">Breed: </label>
        <input id="breed" name="breed" type="text" value={formData.breed} onChange={handleInputChange}/>

        <label htmlFor="age">Age: </label>
        <input id="age" name="age" type="number" value={formData.age} onChange={handleInputChange}/>
        <button type="submit" disabled={formData.name === "" || formData.breed === "" || formData.age === ""}>Create Pet</button>
    </form>

  )
}

export default Form;