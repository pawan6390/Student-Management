import { useState, useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const StudentForm = () => {
    const { addStudent } = useContext(StudentContext);
    const [formData, setFormData] = useState({
        name: "", email: "", age: "", class: "", address: "", phone: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent({ id: Date.now(), ...formData });
        toast.success("Student added successfully!");
        navigate('/students');
    };

    return (
        <div 
            className="container mt-5" 
            style={{
                background: '#b6fbff',  
                background: '-webkit-linear-gradient(to right, #b6fbff, #83a4d4)',  
                background: 'linear-gradient(to right, #b6fbff, #83a4d4)', 
                padding: '20px', 
                borderRadius: '8px', 
            }}
        >
            <form onSubmit={handleSubmit} className="">
                <h2 className="text-center mb-4">Register Student</h2>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Name"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Email"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            name="age"
                            type="number"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            placeholder="Age"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            required
                            placeholder="Class"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            placeholder="Address"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input
                            className="form-control"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Phone"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-success w-100">Submit</button>
            </form>
        </div>
    );
};

export default StudentForm;
