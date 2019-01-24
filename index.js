var fs = require("fs");

function readTextFile(file) {
  console.log(`Hello`, file);
  fs.readFile(file, (err, res) => {
    console.log(res.toString());
  });
}

function writeToFile(file,newContent){
    fs.writeFile(file,newContent,(err,newContent) =>{
        err ? console.log(err) : console.log("Written Complete")
    })
}

writeToFile("test2.txt",'Beep boop bop!');
// readTextFile("test2.txt");
