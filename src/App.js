import Navbar from "./components/Navbar";
import ToDoPage from "./Pages/ToDoPage";
import UpdateForm from "./Pages/UpdateForm";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<ToDoPage />} />
        <Route path="/update" element={<UpdateForm />} />
      </Routes>
    </>
  );
}

export default App;
