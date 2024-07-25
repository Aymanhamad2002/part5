import axios from 'axios'
const baseUrl = '/api/blogs'
let token = null
const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return  request.data
}
const create = async (newObject) => {
  const config ={
    headers:{
      Authorization:token
    },
  }
  const response = await axios.post(baseUrl,newObject,config)
  return response.data
}
const updateLikes = async (newObject) => {
  const fullUrl =`${baseUrl}/${newObject.id}`
  const request = await axios.put(fullUrl,newObject)
  return request.data
}
const removeBlogs = async(id) => {
  const fullUrl = `${baseUrl}/${id}`
  const config ={
    headers:{
      Authorization : token
    },
  }
  const request = await axios.delete(fullUrl,config)
  return request.data
}

export default { getAll,create,setToken,token,updateLikes,removeBlogs }