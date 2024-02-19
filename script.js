function indexOfIgnoreCase(str, subStr) {
  const lowerCaseStr = str.toLowerCase();
  const lowerCaseSubStr = subStr.toLowerCase();
  
  if (lowerCaseStr.includes(lowerCaseSubStr)) {
    return lowerCaseStr.indexOf(lowerCaseSubStr);
  } else {
    return -1;
  }
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
