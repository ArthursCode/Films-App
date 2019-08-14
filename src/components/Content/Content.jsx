import React from 'react';
import useFetch from "../../hooks/useFetch";
import style from './Content.module.css';

const Content = (match) => {
    const id = match.match.params.id;
    const data = useFetch("https://www.omdbapi.com/?i="+id+"&apikey=4a249f8d", []);
    const item = data.response;

    if(item){
        return (
        <div className={style.Content}>
            <ul>
                <li><img src={item.Poster} alt={item.Title}/></li>
            </ul>
            <ul>
                <li><b>Title: </b>{item.Title}</li>
                <li><span><b>Released: </b></span>{item.Released}</li>
                <li><span><b>Country: </b></span>{item.Country}</li>
                <li><span><b>Language: </b></span>{item.Language}</li>
                <li><span><b>Genre: </b></span>{item.Genre}</li>
                <li><span><b>Director: </b></span>{item.Director}</li>
                <li><span><b>Writer: </b></span>{item.Writer}</li>
                <li><span><b>Actors: </b></span>{item.Actors}</li>
                <li><span><b>Plot: </b></span>{item.Plot}</li>
                <li><span><b>Awards: </b></span>{item.Awards}</li>
            </ul>
        </div> )
        }
    return <div className={style.Content}></div>;



};

export default Content;
