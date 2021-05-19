import axios from "axios";
const baseUrl = "http://localhost:3003/api/pom";

async function getAll() {
  try {
    const response = await axios.get(baseUrl);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const create = async (newObject) => {
  const request = await axios.post(baseUrl, newObject);
  return request.data;
};

const deleteTodo = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

// const getAll = () => {
//   const request = axios.get(baseUrl);
//   console.log(request);
//   return request.then((response) => response.data);
// };

export default {
  getAll,
  deleteTodo,
  create,
};
