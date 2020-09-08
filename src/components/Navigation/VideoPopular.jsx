import React, { useState, useEffect } from "react";

import VideoList from "../VideoList";
import SearchBar from "../SearchBar";
import VideoDetail from "../VideoDetail";
import useVideo from "../../hooks/useVideo";

const VideoPopular = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideo();

  useEffect(() => {
    setSelectedVideo(videos[0]);
    search();
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui stackable two column grid">
        <div className="eleven wide column">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="five wide column">
          <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default VideoPopular;
