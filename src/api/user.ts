import axios from 'axios';

type Register = {
    name: string,
    email: string,
    password: string
}

type Login = {
    email: string,
    password: string
}

export const register = async (data:Register) => {
    try {
        const response = await axios.post('https://knowyoursight-api.vercel.app/api/api/register',data)
        return response.data
    } catch (error) {
        return error
    }
}

export const loginApi = async (data:Login) => {
    try {
        const response = await axios.post('https://knowyoursight-api.vercel.app/api/api/login',data)
        return response.data
    } catch (error) {
        return error
    }
}

export const getUsers = async() => {
    try {
      const response = await axios.get('https://knowyoursight-api.vercel.app/api/api/user')
      return response.data
    } catch (error) {
      return error
    }
  }