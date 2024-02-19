function indexOfIgnoreCase(s1, s2) {
 // Convert both strings to lowercase for case-insensitive comparison
  const lowerCaseStr = str.toLowerCase();
  const lowerCaseSubStr = subStr.toLowerCase();
  
  // Check if lower case str includes lower case subStr
  if (lowerCaseStr.includes(lowerCaseSubStr)) {
    // If it does, return the index of subStr in str
    return lowerCaseStr.indexOf(lowerCaseSubStr);
  } else {
    // If not found, return -1
    return -1;
  }
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
