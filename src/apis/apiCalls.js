import axios from 'axios';

const url="https://money-tracker-backend.onrender.com/user"
export async function registerUser(entry){
    let response = await axios.post(url + '/register', entry);
    localStorage.setItem('token', response.data.token);
    return response.data;
}

export async function loginUser(entry){
    let response = await axios.post(url + '/signin', entry);
    localStorage.setItem('token', response.data.token);
    return response.data;
}


export async function editBudget(id, entry){
    console.log(entry)
    let response = await axios.put(`${url}/update/${id}`, entry);
    localStorage.setItem('token', response.data.token);
    return response.data;
}