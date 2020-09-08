import React, { useState } from "react";

import youtube from "../api/youtube";

const useVideo = () => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: { q: term, chart: "mostPopular" },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideo;
