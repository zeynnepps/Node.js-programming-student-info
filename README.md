# Node.js-programming-student-info

This Node.js application serves student data based on their IDs. It listens for HTTP requests and responds with JSON data containing student information.

## Student Data

The server provides the following student data:

| Student ID | Student Name | Score |
|------------|--------------|-------|
| 11111      | Bruce Lee    | 84    |
| 22222      | Jackie Chen  | 93    |
| 33333      | Jet Li       | 88    |

## Usage

Replace `<student_id>` with the ID of the student you want to retrieve data for. Ensure to replace <your-server-ip> with localhost or your server's IP address.

### Example Requests

- To get data for Bruce Lee (ID: 11111):

http://<your-server-ip>:8000/api/score?student_id=11111

- To get data for Jackie Chen (ID: 22222):

http://<your-server-ip>:8000/api/score?student_id=22222

- To get data for Jet Li (ID: 33333):

http://<your-server-ip>:8000/api/score?student_id=33333

If the specified student ID exists, the server will respond with JSON data containing the student's information. If the ID is not found or the request is invalid, it will return a an error message that 'Studetn not found'.

## Running the Server

1. Install Node.js if you haven't already. You can download it from [here](https://nodejs.org/).

2. Clone this repository or download the files to your local machine.

3. Install dependencies by running the following command in the terminal:

  ```
  npm install
  ```

4. Start the server by running:

  ```
  node server.js
  ```

The server will start listening for requests on port 8000 by default.
