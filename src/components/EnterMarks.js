import React, { useState, useEffect } from 'react';

const EnterMarks = ({ studentId, examinationId }) => {
  const [subjects, setSubjects] = useState([]);
  const [marks, setMarks] = useState({});

  useEffect(() => {
    async function fetchSubjects() {
      const response = await fetch(`/api/examinations/${examinationId}?depth=2`);
      const data = await response.json();
      setSubjects(data.courses.map(course => course.subject));
    }

    fetchSubjects();
  }, [examinationId]);

  const handleMarksChange = (subjectId, marksObtained) => {
    setMarks(prevMarks => ({
      ...prevMarks,
      [subjectId]: marksObtained,
    }));
  };

  const handleSubmit = async () => {
    const results = Object.keys(marks).map(subjectId => ({
      subject: subjectId,
      marksObtained: marks[subjectId],
    }));

    const payload = {
      student: studentId,
      examination: examinationId,
      subjectResults: results,
      date: new Date().toISOString(),
    };

    await fetch('/api/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  };

  return (
    <div>
      {subjects.map(subject => (
        <div key={subject.id}>
          <label>{subject.name}</label>
          <input
            type="number"
            value={marks[subject.id] || ''}
            onChange={e => handleMarksChange(subject.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Marks</button>
    </div>
  );
};

export default EnterMarks;
