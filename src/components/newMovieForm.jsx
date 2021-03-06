import React from 'react';
import Form from './common/form'
import Joi from 'joi-browser'
import { getMovies, saveMovie } from "../services/fakeMovieService";
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
        genreId:Joi.string().required().label('Genre'),
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
        saveMovie(this.state.data)
        this.props.history.push('/movies')
    }
    render() { 
        return ( 
            <div>
                <h1>Movie Form1</h1>
                <form onSubmit={this.handleSubmit} action="">
                  {this.renderInput('title','Title')}
                  {this.renderSelect('genreId','Genre', this.state.genre)}
                  {this.renderInput('numberOfStuck','Number in Stock','number')}
                  {this.renderInput('rate','Rate')}
                  {this.renderButton('Save1')}
                </form>
            </div>
         );
    }
}
 
export default NewMovieForm;