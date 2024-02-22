import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="text-4xl">Nav Bar</div>
      <Outlet />
    </>
  );
}

export default App;
