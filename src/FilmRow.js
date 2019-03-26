import React,{Component} from 'react';
import TMDB from './TMDB.js';


class FilmRow extends Component{
render(){
    // console.log(this);//FileRow (film title,id)
    // console.log(this.props.film)//title

// let  title=this.props.film.map((title,index)=>{
//     return <li key={index}>{title}</li>
// }
// )
    // console.log(TMDB.films[0].release_date)
let  allrelease=TMDB.films.map((release,index)=>{
    return <li key={index}>{release.release_date}</li>
}
)

    return(
    <div>
       <div className="film-row">
       <img src={`https://image.tmdb.org/t/p/w780/${TMDB.films.poster_path}`} alt="" />
         <div className="film-summary">
         <h1>{this.props.film}</h1>
         <p>{allrelease}</p>
        </div>
        </div>
   </div>
   )
 }

}

export default FilmRow