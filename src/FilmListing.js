import React, { Component } from "react";
import FilmRow from'./FilmRow'

class FilmListing extends Component {
  render() {
    // console.log(this.props.films[0].title);//title of first film
    // console.log(this.props.films[1].title);//title of first film
    // console.log(this.props.films[2].title);//title of first film


     let allFilms=this.props.films.map((film,index)=>{
       return < FilmRow key={index} film={film.title} id={film.id} />//passing to FilmRow
 })
    return (
      <div>
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
{/* const allFilms=this.props.films.title.map((film,index)=> */}
{/* <h1>{this.props.films[0].title}</h1>) */}
 <h1>{allFilms}</h1> 
        </div>
      </div>
    );
  }
}
export default FilmListing;
