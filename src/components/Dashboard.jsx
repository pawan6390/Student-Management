
import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const { studentList } = useContext(StudentContext);

    // Count the number of students in each class
    const classCounts = studentList.reduce((acc, student) => {
        acc[student.class] = (acc[student.class] || 0) + 1;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(classCounts),
        datasets: [
            {
                label: 'Number of Students',
                data: Object.values(classCounts),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ 
            backgroundColor: '#FFDEE9',
            backgroundImage: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
            color: '#000', 
            padding: '20px', 
            height: '100vh'}}>
            <h2>Dashboard</h2>
            <p>Total Students: {studentList.length}</p>
            <div style={{ width: '80%', margin: 'auto' }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Dashboard;
