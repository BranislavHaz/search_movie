import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Favorites from "../pages/Favorites";
import Detail from "../pages/Detail";
import PageNotFound from "../pages/PageNotFound";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/my-favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
