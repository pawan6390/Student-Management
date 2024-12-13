
import { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const StudentList = () => {
    const { studentList, deleteStudent } = useContext(StudentContext);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredStudents = studentList.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        deleteStudent(id);
        toast.success("Student deleted successfully!"); 
    };

    return (
        <div style={{
            background: '#ADA996', 
            background: '-webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)',  
            background: 'linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)',  
            padding: '20px', 
            borderRadius: '8px', 
            color: '#333'
        }}>
            <h2>Student List</h2>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table className="table table-bordered"style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                backdropFilter: 'blur(5px)', 
                borderRadius: '8px', 
            }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.class}</td>
                            <td>
                                <div className="d-flex flex-column  flex-sm-row gap-2">
                                <Link to={`/students/${student.id}`} className="btn btn-primary btn-sm mr-2">View</Link>
                                <Link to={`/edit-student/${student.id}`} className="btn btn-warning btn-sm mr-2">Edit</Link>
                                <button onClick={() => handleDelete(student.id)} className="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
