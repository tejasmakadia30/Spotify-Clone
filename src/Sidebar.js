import React from 'react'
import './Sidebar.css'
import Sidebar_option from './Sidebar_option';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'; 
import useDataLayerValue from './DataLayer';

function Sidebar() {

    const [{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className='sidebar'>
            <img className='sidebar_logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='avatar' ></img>
            <Sidebar_option Icon={HomeIcon} title='Home'/>
            <Sidebar_option Icon={SearchIcon} title='Search'/>
            <Sidebar_option Icon={LibraryMusicIcon} title='Your Library'/>
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map(playlist => (
                <Sidebar_option title={playlist.name} />
            ))}



        
        </div>
    )
}

export default Sidebar
