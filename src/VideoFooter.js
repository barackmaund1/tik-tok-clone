import React from 'react';
import './VideoFooter.css';
import MUsicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'


const VideoFooter = () => {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
              <h3>@barack</h3> 
              <p>this is description</p>
              <div className='videoFooter__ticker'>
              <MUsicNoteIcon className='videoFooter__icon'/>
              <Ticker mode='smooth'>
                 {({index}) =>(
                     
                     <p>Yooo whats up guys</p>
                    
                 )}
              </Ticker>
            </div>
            </div>
            <img className='videoFooter__logo'
             src='https://static.thenounproject.com/png/934821-200.png'/>
        </div>
    )
}

export default VideoFooter
