import http from './httpService'
import config from '../config.json'

  
  export function getMovies() {
     return http.get( config.apiUrl+'/movies')
  }

  export function deleteMovie(movieId) {
    return http.delete( config.apiUrl+ +'/'+movieId)
 }

 export function getMovie(movieId) {
    return http.get( config.apiUrl+'/'+movieId)
 }
 export function saveMovie(movie) {
     if(movie._id){
         const body={...movie}
         delete body._id
         return http.put( config.apiUrl+'/'+movie._id,body)
     }
     return http.put( config.apiUrl,movie)
 }