import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterScreen from "./component/characterscreen/characterscreen";
import EpisodeScreen from "./component/episodescreen/episdoescreen";
import Home from "./component/home/home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/characterscreen" element={<CharacterScreen />} />
          <Route path="/episodescreen" element={<EpisodeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
