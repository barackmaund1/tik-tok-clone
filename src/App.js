import React, { useState,useEffect } from 'react';
import './App.css';
import Video from './Video';
import db from './firebase';

function App() {

  const [videos,setVideos] = useState([])

  useEffect(() => {
    db.collection('videos').onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map(doc => doc.data())
      ))
    
  },[])

  return (

    <div className="App">
      
      <div className='app__videos'>
      {videos.map(({url,channel,description,song,messages,likes,shares}) =>(
        <Video 
        url={url}
        channel={channel}
        song={song}
        likes={likes}
        messages={messages}
        description={description}
        shares={shares}
        />
      ))}
         
      </div>
    </div>
  );
}

export default App;
