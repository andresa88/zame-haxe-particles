

let fs = require('fs');
let globby = require('globby');


/*
This script replaces all occurrences of:

exports.default =

with

export default

and remove the $global lines at the top of all the js files

under lib/_gen/ to make all the modules es2015 modules as opposed to commonjs modules. This then 
allows webpack to properly tree shake our code. Any unused modules can be excluded 
from the webpack generated js bundle.

*/

//console.log('Replacing exports.default = with export default...');

// Search for all the js files under lib/_gen/
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
  
  // By replacing exports.default with export default we are converting the module 
  // to an es2015 module from commonjs
  var result = content.replace(/exports\.default =/g, 'export default');

  // We must remove these lines at the top of the generated js files or else when the
  // webpack generated bundle is run in the browser we will encounter an "exports is not defined" 
  // error. The variable "exports" is only availabe in commonjs modules.
  result = result.replace('var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this', '');
  result = result.replace('$global.Object.defineProperty(exports, "__esModule", {value: true});', '');
  result = result.replace('Object.defineProperty(exports, "__esModule", {value: true});', '');
  
  if (result == content) {
    // Nothing was changed in the file
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