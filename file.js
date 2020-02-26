 var fs = require('fs');

 fs.writeFile('input.txt','this is content',function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
}); 
