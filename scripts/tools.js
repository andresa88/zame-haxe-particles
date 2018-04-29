

let fs = require('fs');
let globby = require('globby');


/*
We replace all occurrences of:

exports.default =

with

export default

to make all the modules es2015 modules as opposed to commonjs modules. This then 
allows webpack to properly tree shake our code. Any unused modules can be excluded 
from the webpack generated js bundle.

*/

console.log('Replacing exports.default = with export default...');

globby(['../lib/_gen/**/*.js']).then((paths) => {

  for (let path of paths) {
    replace(path);
  }
});


function replace(filePath) {
  fs.readFile(filePath, 'utf8', function (err, content) {
    if (err)
      return console.log(err);

    //let matches = content.match(/exports\.default =/);

    //console.log(matches);
    
    var result = content.replace(/exports\.default =/g, 'export default');

    fs.writeFile(filePath, result, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('written:', filePath);
    });
    
  });
}