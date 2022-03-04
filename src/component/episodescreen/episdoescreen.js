import React, { useState, useEffect } from "react";
import NavBar from "../navbar/navbar";
import Classes from "./episodescreen.module.css";

const EpisodeScreen = () => {
  const [isData, setIsData] = useState([]);
  console.log(isData);

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/episodes")
      .then((response) => response.json())
      .then((data) => setIsData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={Classes.container}>
      <NavBar />
      <h1 className="h1">BREAKING BAD SERIES AND EPISODES</h1>
      {isData.map((user, index) => (
        <div key={index} className={Classes.episode_container}>
          <div>
            <span>#{user.episode_id}</span>
          </div>
          <div className={Classes.episode_series_characters}>
            <div className={Classes.series_airdate}>
              <div>
                <h5>Series:</h5>
                <p>{user.series}</p>
              </div>

              <div>
                <h5>Title:</h5>
                <p>{user.title}</p>
              </div>
              <div className={Classes.episode_card}>
                <h5>Episode:</h5>
                <p>{user.episode}</p>
              </div>
              <div className={Classes.episode_card}>
                <h5>Air Date:</h5>
                <p>{user.air_date}</p>
              </div>
            </div>
            <div className={Classes.episode_card}>
              <h4>Characters</h4>
              {user.characters.map((character) => (
                <p>{character}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodeScreen;
