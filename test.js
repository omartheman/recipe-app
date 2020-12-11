const str = 'My "nanny*$#  `'

const newstr = str.replace(/"/g, '\\"').replace(/'/g, `\\'`).replace(/`/g, '\\`').replace(/;/g, '\\;');

// console.log(newstr)

function replaceSqlCharacters(str){

  const newStr = str.replace(/"/g, '_').replace(/'/g, '_').replace(/`/g, '_').replace(/;/g, '_').replace(/\*/g, '_').replace(/#/g, '_').replace(/\$/g, '_');
  return newStr;
}
console.log(replaceSqlCharacters(str));
