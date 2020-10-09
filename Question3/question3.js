const fs = require('fs');
const path = require('path');

const directory = 'logs';


// Removing all files from the logs directory
fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    // Showing all file to delete
    console.log(file)
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });
  }
});
//remove the Logs directory
fs.rmdir(directory, { recursive: true }, (err) => {
  if (err) {
    throw err;
  }
  console.log(`${directory} is deleted!`);
});
//////////////////////////////CREATE LOG FILES///////////////////////////
const dir = './logs';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  process.chdir('./logs')
  for (var i = 0; i < 10; i++) { //creating 10 files 
    fs.writeFile('log' + i + '.txt', 'Some Random text', function (err) {
      if (err) throw err;
    });
  }
}

//output the files names to console
const files = fs.readdirSync("./logs/");
for (const file of files) {
  console.log(file);
}   