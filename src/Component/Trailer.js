import React from 'react'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
function Trailer(props) {
 
    const trailer= props.location.state
    return (
        <div>
     
    <h>Trailer</h>
    <ReactPlayer url={trailer} />
    <p></p>

    <Link to='/'>back home</Link>
        </div>

    )
}

export default Trailer