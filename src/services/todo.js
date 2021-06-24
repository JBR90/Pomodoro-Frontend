import axios from "axios";
const baseUrl = "http://localhost:3003/api/pom";
const baseUrl = "/api/pom";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

async function getAll() {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(baseUrl, config);
  return response.data;
}
// try {
//   const response = await axios.get(baseUrl, config);
//   console.log(response);
//   return response.data;
// } catch (error) {
//   console.error(error);
// }
// }

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const request = await axios.post(baseUrl, newObject, config);
  return request.data;
};

const deleteTodo = (id) => {
  const config = {
    headers: { Authorization: token },
  };

  return axios.delete(`${baseUrl}/${id}`, config);
};

const updateTodo = async (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.put(`${baseUrl}/${id}`, newObject, config);
  return response.data;
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
  updateTodo,
  setToken,
};
