import React from 'react';
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import style from './Search.module.css';


const SearchResult = ({match}) => {
    const data = useFetch("https://www.omdbapi.com/?s="+match.params.id+"&apikey=4a249f8d", []);
    if(data.response){
        if(data.response["Error"]){
            return 'No Data';
        }
        return (
            <div>
                <table className={style.dataTable}>
                    <tbody>
                    {data.response['Search'].map((item, index) =>

                        <tr key={index}>
                            <td>
                                <img src={item.Poster}  alt={item.Title}/>
                            </td>
                            <td>
                                {item.Title}
                            </td>
                            <td>
                                {item.Year}
                            </td>
                            <td>
                                <Link to={`/search/${match.params.id}/${item.imdbID}`}>
                                    Details
                                </Link>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )

    }else{
        return 'Loading...'
    }

};

export default SearchResult;
