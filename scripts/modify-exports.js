

let fs = require('fs');
let globby = require('globby');


/*
This script replaces all occurrences of:

exports.default =

with

export default

under lib/_gen/ to make all the modules es2015 modules as opposed to commonjs modules. This then 
allows webpack to properly tree shake our code. Any unused modules can be excluded 
from the webpack generated js bundle.

*/

//console.log('Replacing exports.default = with export default...');

globby(['../lib/_gen/**/*.js']).then((paths) => {

  let updated = 0;

  for (let path of paths) {
    if (replace(path)) {
      updated++;
    }
  }
    
  console.log('modify-exports.js - Updated', updated, 'js files');
});


function replace(filePath) {
  
  let content;
  
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error('Could not read file:', filePath);
    return;
  }
  

  var result = content.replace(/exports\.default =/g, 'export default');

  if (result == content) {
    return false;
  }

  try {
    fs.writeFileSync(filePath, result, 'utf8');
  } catch (error) {
    console.error('Could not write to file:', filePath);
    return;
  }
  return true;
  
}