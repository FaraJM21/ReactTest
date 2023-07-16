import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterSwiper from "../../components/swiper/characterSwiper";
import { BaseUrl } from "../../server/server";
import "./style.scss";

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
  const arr = episode.characters
    ? episode.characters.map((el) => el.slice(42, el.length + 1))
    : [];
  return (
    <Container maxWidth="lg">
      <div className="episode">
        <div className="episode_info">
          <h2>{episode.name}</h2>
          <h3>{episode.air_date}</h3>
        </div>
        <CharacterSwiper characters={arr} />
      </div>
    </Container>
  );
}

export default Episode;
