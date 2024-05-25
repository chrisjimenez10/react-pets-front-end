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

const fetchSinglePet = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error);
    }
};

const updatePet = async (id, petData) => {
    try{
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(id, petData),
        });
        const data = await response.json();
        console.log(data);
        return data; 
    }catch(error){
        console.error(error);
    }
};

const deletePet = async(id) => {
    try{
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error);
    }
};

const createPet = async(petData) => {
    try{
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(petData),
        });
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error);
    }
}

export {fetchPets, fetchSinglePet, updatePet, deletePet, createPet};