const printNum1 = () => console.log(1);
const printNum2 = () => {
  const getNumber = (v) => v;
  console.log(getNumber(2));
};
const printNum3 = () => {
  const fs = require("fs");
  fs.readFile("./num3.txt", "utf-8", function executeReadingFile(error, data) {
    if (!error) {
      console.log(Number(data));
    }
  });
};
const printNum4 = () => console.log(4);

printNum1();
printNum2();
printNum3();
printNum4();
