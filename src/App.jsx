//Import
import * as PetServices from "./services/PetServices.js";
const {fetchPets} = PetServices;

//Parent Component
const App = () => {

  fetchPets();

  return <h1>Hello world!</h1>;

};

export default App;

