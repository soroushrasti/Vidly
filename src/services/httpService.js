import axios from 'axios'
import {toast} from 'react-toastify'

export function setJwt(jwt){
axios.defaults.headers.common['X-auth-token']=jwt
}
axios.interceptors.response.use(null, error=>{
    const expectedError=(error.response && error.response.status >=400 && error.response.status <500)
     if (! expectedError){
      toast.error('Unexpected error happened')
       return Promise.reject(error)
     }
     return Promise.reject(error)
    })

    export default {
        get:axios.get,
        post:axios.post,
        put: axios.put,
        delete:axios.delete,
        setJwt
    }