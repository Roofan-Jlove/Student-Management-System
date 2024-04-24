import inquirer from "inquirer";
// Student Management System
const randomNumer = Math.floor(10000 + Math.random() * 90000);
console.log(randomNumer);
let myBalance = 0;
let answers = await inquirer.prompt([
    {
        name: "Student Name",
        type: "input",
        message: "Enter your Name",
        validate: function (Value) {
            if (Value.trim() !== "") {
                return true;
            }
            return "Enter the Name is Mandotory";
        }
    },
    {
        name: "Courses",
        type: "list",
        message: "Select your Course",
        choices: ["HTML5", "CSS3", "Type Script", "JavaScript"]
    }
]);
const tutionFee = { [key]: string, number } = {
    "HTML5": 2500,
    "CSS3": 3000,
    "Type Script": 4500,
    "JavaScript": 5000
};
console.log(`\nTution Fees is: ${tutionFee[answers.Courses]}`);
