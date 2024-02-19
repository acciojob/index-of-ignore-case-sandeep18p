function indexOfIgnoreCase(str, subStr) {
  const lowerCaseStr = str.toLowerCase();
  const lowerCaseSubStr = subStr.toLowerCase();
  
  if (lowerCaseStr.includes(lowerCaseSubStr)) {
    return lowerCaseStr.indexOf(lowerCaseSubStr);
  } else {
    return -1;
  }
}

// Prompt the user to enter input
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
// Call the function and display the result
alert(indexOfIgnoreCase(s1, s2));
