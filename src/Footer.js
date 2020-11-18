import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import Grid from '@material-ui/core/Grid'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <img className='footer_albumlogo' src='https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/643/24/643-24-101L/YEAH-petiteCAPS-Poster.jpg' alt=''></img>
                <div className='footer_songinfo'>
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className='footer_center'>
                <ShuffleIcon className='footer_green' />
                <SkipPreviousIcon className='footer_icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
                <SkipNextIcon className='footer_icon' />
                <RepeatIcon className='footer_green' />
            </div>
            <div className='footer_right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item >
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer