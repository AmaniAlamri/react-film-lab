import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB.js';
 

class App extends Component {
  render() {
    // console.log(this)//refer to App
    // console.log(TMDB)// all file
    // console.log(TMDB.films)//all films
    // Pass props to the new components

    return (
      <div className="film-library">
      <div> 
        <FilmListing FilmListing={this.props} 
        films={TMDB.films}//pass it to FilmListing Component
         />
      </div>
    
      <div> <FilmDetails FilmDetails={this.props} />
      </div>
    </div>
    );
  }
}

export default App;
