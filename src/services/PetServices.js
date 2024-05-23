const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const fetchPets = async () => {
    try{
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error);
    }
};

const 

export {fetchPets};