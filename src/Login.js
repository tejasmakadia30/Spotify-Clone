import React from 'react';
import './Login.css';
import { loginUrl } from './Spotify';

function Login() {
    return (
        <div className='Login'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGGnlhIwkCmk5LNizQJQwg2S4RiogibhC0zQ&usqp=CAU' alt='Spotify-Logo'></img>
            <a href={loginUrl}>Login to Spotify-Clone</a>
        </div>  
    )
}

export default Login
