import React, { Component, useState } from "react";
import ReactAnime from "react-animejs";
const { Anime, stagger } = ReactAnime;
import anime from "animejs";

const WordCollage = () => {
  const [control, setControl] = useState(null);

  const [meta, setMeta] = useState({
    //meta state of the player
    control: control,
    progress: 0,
    currentTime: 0,
    duration: 0,
  });


  const animation = anime.timeline({
    targets: ".word-animation",
    autoplay: true,
    delay: anime.stagger(400, {
      from: "center",
    }),
    scale: anime.stagger([0.8, 1], { from: "center" }),
    loop: true,
    rotate: {
      value: 310,
      duration: 5000,
      easing: "easeInExpo",
    },
    easing: "easeInOutSine",
    //background: "#eeaeca",
    direction: "alternate",
    //rotate: anime.stagger([-360, 360])
  });

  animation
    .add({
      scale: 0.5,
    })
    .add({
      letterSpacing: "10px",
    })
    .add({
      scale: 1,
    })
    .add({
      letterSpacing: "6px",
    });

//   anime({
//     opacity: 1,
//     translateY: 50,
//     rotate: {
//       value: 360,
//       duration: 2000,
//       easing: "easeInExpo",
//     },
//     scale: anime.stagger([0.7, 1], { from: "center" }),
//     delay: anime.stagger(100, { start: 1000 }),
//     translateX: [-10, 30],
//     loop: true,
//   });

  return (
    <>
      <div id="word-collage-container">
        <div className="word-animation">
          <span>collage of words</span>
        </div>
        <div className="word-animation">collage of words</div>
        <div className="word-animation">collage of words</div>
        <div className="word-animation">collage of words</div>
        <div className="word-animation">collage of words</div>
        <div className="word-animation">collage of words</div>
        <div className="word-animation">collage of words</div>
        <div className="word-animation">collage of words</div>
        <div className="word-animation">collage of words</div>
      </div>
      <div id="second-word-collage">
        <div className="word-animation2">collaborative poetry</div>
      </div>
    </>
  );
};

export default WordCollage;
