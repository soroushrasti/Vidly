import React from 'react';
import Form from './common/form'
import Joi from 'joi-browser'
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class NewMovieForm extends Form {
    state = { 
        data:{
            title:'',
            genreId:'',
            numberOfStuck:'',
            rate:'',

        },
        genre:[],
        errors:{}
     }
     schema={
         _id:Joi.string(),
        title:Joi.string().required().label('Title'),
        genreId:Joi.string().required().list().label('Genre'),
        numberOfStuck:Joi.number().required().label('Number in Stock'),
        rate:Joi.string().required().min(0).max(10).label('Rate')

    }

    componentDidMount(){
        const genre=getGenres()
        this.setState({genre})
        const movieId=this.props.match.params._id
        if (movieId==='new') return;
        const movie=getMovies(movieId)
        if (!movie) return this.props.history.replace('/not-found')
        this.setState({data:this.mapToViewModel(movie)});
    }
    mapToViewModel(movie){
        return{
            _id:movie._id,
            title:movie.title,
            genreId:movie.genre._id,
            numberOfStuck:movie.numberInStock,
            rate: movie.dailyRentalRate
        }
    }

    doSubmit=()=>{
        console.log('submitted')
    }
    render() { 
        return ( 
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit} action="">
                  {this.renderInput('title','Title')}
                  {this.renderInput('genre','Genre')}
                  {this.renderInput('numberOfStuck','Number in Stock')}
                  {this.renderInput('rate','Rate')}
                  {this.renderButton('Save')}
                </form>
            </div>
         );
    }
}
 
export default NewMovieForm;