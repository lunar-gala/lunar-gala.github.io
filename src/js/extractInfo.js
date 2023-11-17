const { parse } = require("csv-parse");
const fs = require("fs");

// specify the path of the CSV file
const path = "config.csv";

// Create a readstream
// Parse options: delimiter and start from line 1

const rows = []

fs.createReadStream(path)
  .pipe(parse({ delimiter: ",", from_line: 1 }))
  .on("data", function (row) {
    // executed for each row of data
    rows.push(row)
    console.log(row);
  })
  .on("error", function (error) {
    // Handle the errors
    console.log(error.message);
  })
  .on("end", function () {
    // executed when parsing is complete
    console.log("File read successful");
  });

function extractPosition (index){
    return rows[index][0];
}
