import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../../server/server";

function Episode() {
  const [episode, setEpisode] = useState([]);
  const param = useParams();

  const getEpisodes = async () => {
    await axios
      .get(BaseUrl + `/episode/${param.episode}`)
      .then((res) => setEpisode(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(episode);

  return <div>episode</div>;
}

export default Episode;
