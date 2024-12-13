import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import EditStudent from './components/EditStudent';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import Home from './components/Home';

const App = () => (
    <StudentProvider>
        <Router>
            <Navbar />
            <div className="container mt-5">
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/students" element={<StudentList />} />
                    <Route path="/add-student" element={<StudentForm />} />
                    <Route path="/students/:id" element={<StudentDetails />} />
                    <Route path="/edit-student/:id" element={<EditStudent />} />
                </Routes>
            </div>
            <ToastContainer/>
        </Router>
    </StudentProvider>
);

export default App;
