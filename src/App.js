import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Romance from "./routes/Romance";
import Action from "./routes/Action";
import Thriller from "./routes/Thriller";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        ></Route>
        <Route
          path={`${process.env.PUBLIC_URL}/movie/romance`}
          element={<Romance />}
        ></Route>
        <Route
          path={`${process.env.PUBLIC_URL}/movie/thriller`}
          element={<Thriller />}
        ></Route>
        <Route
          path={`${process.env.PUBLIC_URL}/movie/action`}
          element={<Action />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
