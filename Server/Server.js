const express = require("express");

const app = express();
const PORT = 3000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var bookings = [
  {
    name: "Corey",
    email: "Corey@gmail.com",
    phoneNumber: "07979797979",
    id: "Corey",
  },
  {
    name: "Tom",
    email: "Tom@gmail.com",
    phoneNumber: "07979797979",
    id: "Tom",
  },
  {
    name: "James",
    email: "James@gmail.com",
    phoneNumber: "07979797979",
    id: "James",
  },
];
/* const newBooking = new Booking(name, number, email, id); */

/* if (reservations.length === 5) {
  waitList.push(newBooking);
} else {
  reservations.push(newBooking);
} */

//  Create a new character - takes in JSON input

app.get("/api/tables", function (req, res) {
  console.log("req.body get =", req.body);
  res.json(bookings);
  // let table = [];
  // let waiting = [];
  console.log("bookings =", bookings); 
  // if (bookings < 5){
  //   waiting.push(req.body);   
  // }else{
  //   table.push(req.body);
  // }
});


app.post("/api/reserve", function (req, res) {
  const newBooking = req.body;
  console.log("req.body post =", req.body);
  console.log("newBookings =", newBooking);
  bookings.push(newBooking);
  res.json(bookings);
});


app.use("/", express.static("../Client"));

app.listen(PORT, function () {
  console.log("Server is listening on Port ", PORT);
});

module.exports = bookings;
