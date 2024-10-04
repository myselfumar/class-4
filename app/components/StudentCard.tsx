import React from 'react';

// Define the props type for the StudentCard component
interface StudentCardProps {
  name: string;
  age: number;
  rollNumber: string;
  studentClass: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ name, age, rollNumber, studentClass }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm w-full text-center">
      <div className="border-b-2 pb-4 mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      </div>
      <p className="text-gray-600"><strong>Age:</strong> {age}</p>
      <p className="text-gray-600"><strong>Roll No:</strong> {rollNumber}</p>
      <p className="text-gray-600"><strong>Class:</strong> {studentClass}</p>
    </div>
  );
};

export default StudentCard;
