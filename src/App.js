import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterScreen from "./component/characterscreen/characterscreen";
import EpisodeScreen from "./component/episodescreen/episdoescreen";
import Home from "./component/home/home";
import ScrollTo from "./component/utilities/scrollto";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/characterscreen" element={<CharacterScreen />} />
          <Route path="/episodescreen" element={<EpisodeScreen />} />
        </Routes>
        <ScrollTo />
      </BrowserRouter>
    </div>
  );
};

export default App;
