import React, {useState} from "react";

function SearchMovies(props){
    
    const [query, setQuery] = useState('');

    const api_key = '7c937777e05d93aeb5cdd3cbea356947';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;

    const handleChange = event => {
        setQuery(event.target.value)
    }

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");

        try {
            if (query !== ''){
                const res = await fetch(url);
                const data  = await res.json();
                props.onsubmit(data);
            }
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange = {handleChange}
                />
                <button className="button" type="submit">Search</button>
            </form>
        </>
    )
}

export default SearchMovies;