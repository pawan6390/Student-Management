import { createContext, useState } from 'react';
import { students as initialData } from '../data/data';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [studentList, setStudentList] = useState(initialData);

    const addStudent = (newStudent) => setStudentList([...studentList, newStudent]);
    
    const updateStudent = (updatedStudent) => {
        setStudentList(studentList.map(student => 
            student.id === updatedStudent.id ? updatedStudent : student
        ));
    };

    const deleteStudent = (id) => setStudentList(studentList.filter(student => student.id !== id));

    return (
        <StudentContext.Provider value={{ studentList, addStudent, updateStudent, deleteStudent }}>
            {children}
        </StudentContext.Provider>
    );
};