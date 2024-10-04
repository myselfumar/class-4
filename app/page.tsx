import StudentCard from "./components/StudentCard";

export default function Home() {
  // Student data to pass as props
  const students = [
    { name: 'Momin Sheikh', age: 16, rollNumber: '10013', studentClass: '10th Grade' },
    { name: 'Bilal Ashraf', age: 17, rollNumber: '20078', studentClass: '11th Grade' },
    { name: 'Zoha Umar', age: 15, rollNumber: '30098', studentClass: '9th Grade' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Student ID Cards</h1>
      <div className="flex flex-wrap justify-center">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            rollNumber={student.rollNumber}
            studentClass={student.studentClass}
          />
        ))}
      </div>
    </div>
  );
}
