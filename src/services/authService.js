import config from '../config.json'
import http from './httpService'
const apiEndPoint=config.apiUrl+'/auth'

http.setJwt(getJwt())
export async function login(email,password){
    const {data:jwt}= await login(email,password)
    localStorage.setItem('token',jwt)
    return http.post( apiEndPoint,{
        email,
        password,
    })
}
    export function logout(){
        localStorage.removeItem('token')
    }
    export function loginWithJwt(jwt){
        localStorage.setItem('token',jwt)
    }
    export function getJwt(){
        return localStorage.getItem('token')
    }

    export default{
        loginWithJwt,
        setJwt
    }
