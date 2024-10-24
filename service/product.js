import axios from "axios"
const url = process.env.URL

const getProByCate =async (idcate) => {
  const respone = await axios.get(`${url}/`)
}