import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';
import { toast } from 'react-toastify';

const StudentDetails = () => {
    const { id } = useParams();
    const { studentList } = useContext(StudentContext);
    const navigate = useNavigate();

    const student = studentList.find((student) => student.id === parseInt(id));

    useEffect(() => {
        if (student) {
            toast.info("Student data displayed successfully!");
        }
    }, [student]);

    if (!student) {
        return (
            <div className="container mt-5">
                <h2>Student not found.</h2>
                <button className="btn btn-primary" onClick={() => navigate('/students')}>
                    Back to Student List
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Student Details</h2>
            <div className="card p-4">
                <div className="mb-3">
                    <p><strong>Name:</strong> {student.name}</p>
                </div>
                <div className="mb-3">
                    <p><strong>Email:</strong> {student.email}</p>
                </div>
                <div className="mb-3">
                    <p><strong>Age:</strong> {student.age}</p>
                </div>
                <div className="mb-3">
                    <p><strong>Class:</strong> {student.class}</p>
                </div>
                <div className="mb-3">
                    <p><strong>Address:</strong> {student.address}</p>
                </div>
                <div className="mb-3">
                    <p><strong>Phone:</strong> {student.phone}</p>
                </div>
                <button className="btn btn-secondary" onClick={() => navigate('/students')}>
                    Back to Student List
                </button>
            </div>
        </div>
    );
};

export default StudentDetails;
