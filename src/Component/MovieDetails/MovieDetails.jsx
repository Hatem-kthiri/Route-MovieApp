import React from "react";
import { useParams } from "react-router-dom";
import "../MovieDetails/MovieDetails.css";

function MovieDetails({ MovieData }) {
    const { movieTitle } = useParams();
    const movie = MovieData.find((movie) => movie.title === movieTitle);
    return (
        <>
        <div className="title">
                <h1 className="ttitle">{movie.title} </h1>
            </div>
        <div className="mov">
            <div class="hover01 column">
                <div>
                    <figure><img className="PosterMovie" src={movie.posterUrl} /></figure>
                </div>
            </div>
            <div>
                <div className="desc">
                    {movie.description}
                </div>
                
                <div>
                <iframe width="560" 
                height="315" 
                src={movie.trailer} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>

                </div>

            </div>
            

        </div>
      
        </>
    );
}

export default MovieDetails;