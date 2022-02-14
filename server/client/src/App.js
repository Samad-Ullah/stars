import { BrowserRouter } from "react-router-dom";

import StarWarRoutes from "./Router";

function App() {
  return (
    <BrowserRouter>
      <StarWarRoutes></StarWarRoutes>
    </BrowserRouter>
  );
}

export default App;
