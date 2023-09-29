const express = require('express');
const app = express();
const port = 3000;
const db = require('./dbconn');

async function fetchData() {
  try {
    const [rows, fields] = await db.query('SELECT * FROM tbl_users');
    return rows; // Return the result
  } catch (err) {
    console.log(err);
    throw err; // Rethrow the error
  }
}

app.get('/', async (req, res) => {
  try {
    const data = await fetchData();
    res.send(data); // Send the data to the browser
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
