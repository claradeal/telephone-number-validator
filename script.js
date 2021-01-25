function telephoneCheck(str) {
  let testStr = str;
  // var myRegex =       /^(1\s?)?\W?(\d{3})[\s\-\W]\s?(\d{3})[\s\-](\d{4})|(\d{10-11})/;  // early try
  // var myRegex =       /^(1\s?)?((\d{3})|(\d{3}))[\s-]?(\d{3})\s-|(\d{10-11})/;
  // Pull out your final or statement \d{10-11})$  // McKenzie's suggestion
  // let myRegex =       /^(1\s?)?((\d{3})|(\d{3}))[\s-]?(\d{3})\s-|$/;
  let myRegex =          /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/ 
  let result = myRegex.test(testStr);
  console.log(result);
  return result;
}

telephoneCheck("1 555)555-5555");

// FCC JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
// The following are examples of valid formats for US numbers (refer to the tests below for other variants):
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// FCC solution 2 provides an example of a very comprehensive and robust solution to validating US phone numbers client side. In such cases it might be much better and easier to implement this library libphonenumber 597.