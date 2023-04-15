Book My Seat
"Book My Seat" is a next-generation seat booking system that allows moviegoers to reserve their preferred seats for any movie. The system has two types of seating capacities: Standard and Premium.

Technologies Used
Node.js
Express.js
MongoDB
Installation
Clone the repository: git clone https://github.com/AstickDutta/seat-booking-app 
Navigate to the project directory: cd book-my-seat
Install the dependencies: npm install
Start the server: npm start
Open http://localhost:3000 in your web browser to access the application.
Usage
The "Book My Seat" system provides the following functionality:

Add, view, update, and delete movies
Add, view, update, and delete theaters
Add, view, update, and delete seats
To use the system, follow these steps:

Open http://localhost:5000 in your web browser.
Click the "Movies" tab to view the list of movies.
Click the "Add Movie" button to add a new movie.
Click the "Theaters" tab to view the list of theaters.
Click the "Add Theater" button to add a new theater.
Click the "Seats" tab to view the list of seats.
Click the "Add Seat" button to add a new seat.
API Endpoints
The following API endpoints are available:

/movies
GET: Get a list of all movies
GET /:id: Get a movie by ID
POST: Create a new movie
PUT /:id: Update a movie by ID
DELETE /:id: Delete a movie by ID
/theaters
GET: Get a list of all theaters
GET /:id: Get a theater by ID
POST: Create a new theater
PUT /:id: Update a theater by ID
DELETE /:id: Delete a theater by ID
/seats
GET: Get a list of all seats
GET /:id: Get a seat by ID
POST: Create a new seat
PUT /:id: Update a seat by ID
DELETE /:id: Delete a seat by ID
