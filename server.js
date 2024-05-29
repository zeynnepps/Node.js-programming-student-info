const http = require('http');
const url = require('url');

// Sample student data
const students = {
    11111: { StudentID: 11111, StudentName: 'Bruce Lee', Score: 84 },
    22222: { StudentID: 22222, StudentName: 'Jackie Chen', Score: 93 },
    33333: { StudentID: 33333, StudentName: 'Jet Li', Score: 88 }
};

// Create server
const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const studentID = queryObject.student_id;
    // Check if the request is for student data
    if (req.url.startsWith('/api/score') && studentID && students[studentID]) {
        // If student data exists, send it
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(students[studentID]));
    } else {
        // If student data doesn't exist, send an error message
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Student not found' }));
    }
});

// Start server on port 8000
server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});