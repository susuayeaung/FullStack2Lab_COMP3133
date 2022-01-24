const csv = require('csv-parser');
const fs = require('fs');

// a.	Delete canada.txt and usa.txt if already exist using fs module 
fs.unlink('canada.txt', function (err) {
  if (err) return console.log(err);
  console.log('canada.txt file is deleted successfully');
});

fs.unlink('usa.txt', function (err) {
  if (err) return console.log(err);
  console.log('usa.txt file is deleted successfully');
});

// Filter data from csv file
function getFilteredData(county, callback) {
  const result = [];
  fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
      const headers = Object.keys(row);

      if (row[headers[0]] === county)
          result.push(row)
    })
    .on('end', () => {
      callback(result)
      console.log('txt file successfully processed');
    });
}

//b.	Filter data of Canada and write data to canada.txt
getFilteredData("Canada", callback_canadaTxt)

function callback_canadaTxt(result) {

  var csv = result.map(function (data) {
      return JSON.stringify(Object.values(data));
  })
      .join('\n')
      .replace(/(^\[)|(\]$)/mg, '')

  fs.writeFileSync('canada.txt', '"country","year","population" \n')
  fs.writeFileSync('canada.txt', csv, { flag: 'a' })
}

// c.	Filter data of United States and write data to usa.txt
getFilteredData("United States", callback_usaTxt)

function callback_usaTxt(result) {
  var csv = result.map(function (data) {
      return JSON.stringify(Object.values(data));
  })
      .join('\n')
      .replace(/(^\[)|(\]$)/mg, '')
  fs.writeFileSync('usa.txt', '"country","year","population" \n')
  fs.writeFileSync('usa.txt', csv, { flag: 'a' })
}
