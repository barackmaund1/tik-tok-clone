import React,{ useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'

const Video = () => {
    const [playing,setPlaying] =useState(false);
    const videoRef=useRef(null);
    
    const onVideoPress = () =>{
        if (playing) {
           videoRef.current.pause();
           setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
       
    };

    return (
        <div className='video'>
           <video  className='video__player'
           loop
           onClick={onVideoPress}
           ref={videoRef}
           src='https://v16m.tiktokcdn.com/18a37eb09f967de8547b218247d943c9/5f330202/video/tos/useast2a/tos-useast2a-ve-0068c002/0d0bf826cb45499a9ed2d42103941f03/?a=1233&br=2344&bt=1172&cr=0&cs=0&dr=0&ds=3&er=&l=2020080920392901018907414857428916&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amh2aHFkeDpvdTMzNjczM0ApMzxkZmg2OGVmN2g4ZWU5OGdrNl9pZGBnXy1fLS1eMTZzczQwNTIvLTNeNDMtNDViMzU6Yw%3D%3D&vl=&vr='></video> 
           {/*<VideoFooter/>*/}
           <VideoFooter channel='barack' 
           description='hello world' 
           song='yoooo! what up'/>
            {/*<VideoSidebar/>*/}
        </div>
    )
}

export default Video
