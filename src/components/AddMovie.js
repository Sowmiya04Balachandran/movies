import {useRef} from 'react';
import classes from './AddMovie.module.css';

const AddMovie=(props)=>
{
const releaseDateRef=useRef('');
const titleRef=useRef('');
const openingTextRef=useRef('');

function submitHandler(event){
    event.preventDefault();

    const movie={
        title:titleRef.current.value,
        openingText:openingTextRef.current.value,
        releaseDate:releaseDateRef.current.value,
    };
    props.onAddMovie(movie)
}




    return(
        <form onSubmit={submitHandler}  className={classes.addMovieForm}  >
            <div>
                <label htmlFor="title">Title</label>
                <input type='text' id='title' ref={titleRef}/>
            </div>
            <div>
            <label htmlFor="opening-text">Opening Text</label>
            <textarea row='5' id='opening-text' ref={openingTextRef}></textarea>
            </div>
            <div>
                <label htmlFor="date">Release Date</label>
                <input type='text' id="date" ref={releaseDateRef}/>
            </div>
            <button className={classes.addMoviesButton}>Add Movies</button>
        </form>
    )
}
export default AddMovie;