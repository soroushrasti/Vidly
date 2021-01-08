import http from './httpService'
import config from '../config.json'

const apiEndPoint=config.apiUrl+'/auth'

export async function login(email,password){
    const {data:jwt}= await login(email,password)
    localStorage.setItem('token',jwt)
    return http.post( apiEndPoint,{
        email,
        password,
    })
    export function logout(){
        localStorage.removeItem('token')
    }
}