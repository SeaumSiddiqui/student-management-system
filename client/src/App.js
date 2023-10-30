import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Home from './Home';
import StudentsView from './component/student/StudentsView';
import NavBar from "./component/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentPofile from "./component/student/StudentProfile";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/view-students" element={<StudentsView/>}></Route>
          <Route exact path="/add-student" element={<AddStudent/>}></Route>
          <Route exact path="/edit-student/:id" element={<EditStudent/>}></Route>
          <Route exact path="/student-profile/:id" element={<StudentPofile/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
