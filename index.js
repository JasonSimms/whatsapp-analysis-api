var fs = require("fs");

// Read local .txt file
function readTextFile(file) {
  console.log(`Reading`, file);
  fs.readFile(file, (err, res) => {
    console.log(res.toString());
  });
}

// Overwrite .txt file :: FUTURE USE?
// function writeToFile(file,newContent){
//     fs.writeFile(file,newContent,(err,newContent) =>{
//         err ? console.log(err) : console.log("Written Complete")
//     })
// }

readTextFile("test2.txt");
