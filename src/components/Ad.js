import React from "react";

function Ad() {
  var rickRoll = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  };
  return (
    <aside className="ad">
      <p className="sponsored">Sponsored Content</p>
      <h1> Taking off soon? </h1>
      <p>
        <b>&#9886;Check out our travel playlist! &#9887;</b>
      </p>
      <div className="videos">
        <iframe
          src="https://www.youtube.com/embed/9ymjcSvEyhk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/AcuMa23mhHM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/ggCkN3Sve9w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <button>Full Playlist {">"}</button>
      </a>
    </aside>
  );
}

export default Ad;
