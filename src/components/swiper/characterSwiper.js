import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.scss";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import axios from "axios";
import { BaseUrl } from "../../server/server";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CharacterSwiper({ characters }) {
  const [arr, setArr] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [num, setNum] = useState(4);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchCharacters() {
    await axios
      .get(BaseUrl + `/character/${characters}`)
      .then((res) => setArr(res.data))
      .catch((err) => console.error(err.response));
  }

  useEffect(() => {
    fetchCharacters();
    const handleResize = () => setWidth(window.innerWidth);
    if (width < 610) {
      setNum(3);
    } else {
      setNum(4);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [characters, fetchCharacters, width]);

  return (
    <div className="swiper_content">
      <h2>Characters</h2>
      <Swiper
        slidesPerView={num}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="my_swiper"
      >
        {arr.length > 0 &&
          arr.map((el) => {
            return (
              <SwiperSlide className="swiper_slide" key={el.id}>
                <div className="slide_card">
                  <Link to={`/character/${el.id}`}>
                    <img src={el.image} alt="404" />
                  </Link>
                  <h3>{el.name}</h3>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
