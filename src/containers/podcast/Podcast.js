import React, { useContext, useState } from "react";
import "./Podcast.scss";
import { podcastSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const { isDark } = useContext(StyleContext);
  const [visiblePodcasts, setVisiblePodcasts] = useState(4);

  if (!podcastSection.display) {
    return null;
  }

  const loadMore = () => {
    setVisiblePodcasts(prevVisible => prevVisible + 4);
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="podcast">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p className={isDark ? "dark-mode podcast-header-subtitle" : "subTitle podcast-header-subtitle"}>
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcasts.slice(0, visiblePodcasts).map((podcast, i) => (
            <div key={i} className="podcast-item">
              <h3>{podcast.title}</h3>
              <p>{podcast.date}</p>
              <iframe
                className="podcast"
                src={podcast.link}
                frameBorder="0"
                scrolling="no"
                title={podcast.title}
                allow="encrypted-media"
              ></iframe>
            </div>
          ))}
        </div>
        {visiblePodcasts < podcastSection.podcasts.length && (
          <button onClick={loadMore} className="load-more-button">
            Load More
          </button>
        )}
      </div>
    </Fade>
  );
}