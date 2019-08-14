import React, {Component} from 'react';
import { Link } from "react-router-dom";
import style from './Search.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

class Search extends Component{
    constructor(props) {
        super(props);
        this.searchText = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick() {
        this.setState({
            ...this.state
        });
    }

    render() {
        const {handleClick, searchText} = this;
        return (
            <div>
                <div className={style.search}>
                    <input
                        placeholder="Search film"
                        type="text"
                        className={style.searchInput}
                        ref={searchText}
                        onChange={handleClick}
                    />
                    <div className={style.searchSubmit}>
                        <Link to={`/search/${this.searchText.current? this.searchText.current.value: ''}`}>
                            <FontAwesomeIcon icon={faSearch} />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Search;
