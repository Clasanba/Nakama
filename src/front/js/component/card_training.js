import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "../../styles/card_training.css";

export const CardTraining = () => {

  const YOUTUBE_PLAYLIST ="https://www.googleapis.com/youtube/v3/playlistItems"
  const [videos, setVideos] = useState([])

useEffect(()=>{
  const getVideos = async () => {

    try {
      await fetch(`${YOUTUBE_PLAYLIST}?part=snippet&playlistId=PLiVna37s3zrijZRwQIf1DNxUP1YgM5_Mc&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`)
      .then((response)=> response.json())
      .then((data)=>setVideos(data.items))
    } catch (error){
      console.log(error)
    }
  };
    getVideos();
   
  },[]);

  return videos.map((video)=>{
    console.log(videos)
    const {id, snippet={}} = video;
    const {title,thumbnails ={}, resourceId } = snippet;
    const {medium = {}}= thumbnails;
  return (
    
      <div className="card cardYoutube " key={id}>
        <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank">
        <img width={medium.width} height={medium.height}
          src={medium.url}
          className="card-img-top"
          alt="..."
        />
        </a>
        <div className="card-body">
          <p className="card-title text-decoration-none titulovideo">
            {title}
          </p>
          <p className="card-text text-dark">{video.channelTitle}</p>
          <p className="position-absolute bottom-0 end-0 heart">
            <i className="fa-regular fa-heart"></i>
          </p>
        </div>
      </div>
     
  );
})
}
