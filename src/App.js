import "./App.css";
import Header from "./containers/Header";
import { Routes, Route } from "react-router-dom";
import AppRoutes from "./AppRoutes";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
