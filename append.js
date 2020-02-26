var fs = require('fs');
 
// appendFile function with filename, content and callback function
fs.appendFile('input2.txt', 'Learn Node FS module', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
}); 
