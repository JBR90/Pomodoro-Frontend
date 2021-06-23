import axios from "axios";
const baseUrl = "http://localhost:3003/api/users";

const signup = async (credentials) => {
  console.log(credentials);
  const response = await axios.post(baseUrl, credentials);
  console.log(response);
  return response.data;
};

export default { signup };
