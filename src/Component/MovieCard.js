
import React from 'react';
import {Link} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';
import ReactPlayer from 'react-player'
const MovieCard= (props)=>{
 
return (
  <>

    
            <div className="MovieCard">
             
           
               <img className='movieImg'src={props.Movie.img} alt="notfound" /> 
               
              <div className="caption">
              <h2>{props.Movie.title} </h2>
                  
                  <p>Director:{props.Movie.Director} </p>
                  <Link to={{pathname:`/description/${props.Movie.title}`, state:props.Movie.description}}>Read more...</Link>
                  <Link to={{pathname:`/trailer/${props.Movie.title}`,  state:props.Movie.trailer }}>Take me to the movie trailer</Link>

                  <StarRatingComponent className='star' value={props.Movie.rate}  /> 
             
                  
                </div>
                </div>
                </>
    
)}




export default MovieCard