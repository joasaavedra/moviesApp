import './Movie.css'

export const Movie = ({title, poster}) => {
    return (
        <div className='Movie'>
            <img src={poster} alt={title}/>
            <h5>{title}</h5>
        </div>
      )
}