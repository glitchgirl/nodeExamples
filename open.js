// include node fs module
var fs = require('fs');
 
// open function with filename, file opening mode and callback function
fs.open('newfile_3.txt', 'r', function (err, file) {
  if (err) throw err;
  console.log('File is opened in write mode.');
});
