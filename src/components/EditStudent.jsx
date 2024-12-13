import { useContext, useState, useEffect } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditStudent = () => {
    const { studentList, updateStudent } = useContext(StudentContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const student = studentList.find((s) => s.id === parseInt(id));
    const [formData, setFormData] = useState(student);

    useEffect(() => {
        if (student) setFormData(student);
    }, [student]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(formData);
        toast.success("Student Data Edited successfully!");
        navigate('/students');
    };

    return (
        <div style={{
            background: '#83a4d4',
            background: '-webkit-linear-gradient(to right, #b6fbff, #83a4d4)',  /* Chrome 10-25, Safari 5.1-6 */
            background: 'linear-gradient(to right, #b6fbff, #83a4d4)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            padding: '20px', 
            borderRadius: '8px', 
            color: '#333'
        }}>
            <form onSubmit={handleSubmit} className="container">
                <h2 className="text-center mb-4">Edit Student</h2>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="age">Age</label>
                        <input
                            className="form-control"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="class">Class</label>
                        <input
                            className="form-control"
                            id="class"
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="address">Address</label>
                        <input
                            className="form-control"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="phone">Phone</label>
                        <input
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Save Changes</button>
            </form>
        </div>
    );
};

export default EditStudent;
