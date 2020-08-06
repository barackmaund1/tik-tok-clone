import React,{ useRef, useState } from 'react'
import './Video.css'

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
           src='https://v16m.tiktokcdn.com/f0e7fb725b52dea9d9e44317ae19aa24/5f2e8279/video/tos/useast2a/tos-useast2a-ve-0068c001/e4efd10ff448444db94a61ec1fd14af2/?a=1233&br=4400&bt=2200&cr=0&cs=0&dr=0&ds=3&er=&l=202008061046170101902180715D007815&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2dkaTdzbTtqdjMzOjczM0ApNTllaGhoOjs4N2lnZzQ8OGdiampjcW1uYjRfLS0tMTZzczY1YC02YzIyMWFgYS9jLjY6Yw%3D%3D&vl=&vr='></video> 
           {/*<VideoFooter/>*/}
            {/*<VideoSidebar/>*/}
        </div>
    )
}

export default Video
