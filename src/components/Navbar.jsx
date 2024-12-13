import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{
            background: '#283048',  
            background: '-webkit-linear-gradient(to right, #859398, #283048)',
            background: 'linear-gradient(to right, #859398, #283048)' 
        }}>
            <div className="container-fluid">
                <Link className="navbar-brand ml-3 text-white" to="/">Student Management Portal</Link>
                <button
                    className="navbar-toggler mr-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse ml-3 navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/students">Student List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/add-student">Register Student</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
