import http from './httpService'

export const genres = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" }
  ];
  
  export function getGenres() {
     return http.get('http://localhost:3900/api/genres')
  }
  