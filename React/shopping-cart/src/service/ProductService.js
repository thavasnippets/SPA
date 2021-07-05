import axios from 'axios'
import { productURL } from '../config/api'

export const getProducts = () => {
    return axios.get(productURL).then(res => res.data)
}