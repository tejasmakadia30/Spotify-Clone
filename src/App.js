import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';
import Player from './Player';
import SpotifyWebApi from 'spotify-web-api-js';
import useDataLayerValue from './DataLayer'

const spotify = new SpotifyWebApi();

function App() {

  const [{user, token}, dispatch] = useDataLayerValue();            // dispatch is a special gun get to used to update a data layer like we can update it.
  // Run code based on a given condition 
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })


      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch ({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        });
      })
       
      spotify.getPlaylist('3dHHESrmEbptZIvrw8GPjy').then(response => {
        dispatch ({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })
    }

  }, []);

    

  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} /> 
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
