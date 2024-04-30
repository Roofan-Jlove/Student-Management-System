import inquirer from "inquirer";
// Student Management System
const randomNumer = Math.floor(10000 + Math.random() * 90000);
console.log(randomNumer);
let myBalance = 0;
let answers = await inquirer.prompt([
    {
        name: "student",
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
        choices: ["HTML5", "CSS3", "TypeScript", "JavaScript"]
    }
]);
const tutionFee = {
    "HTML5": 2500,
    "CSS3": 3000,
    "TypeScript": 4500,
    "JavaScript": 5000,
};
console.log(`\nTution Fees is: ${tutionFee[answers.Courses]}/-\n`);
console.log(`Your payable amount is: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select your Pyament method",
        choices: ["Bank Transfer", "East Paisa", "Jazz Cash"]
    },
    {
        name: "Amount",
        type: "input",
        message: "Kindly Transfer the payment",
        validate: function (Value) {
            if (Value.trim() !== "") {
                return true;
            }
            return "Please Enter the Correct Amount to Pay";
        }
    }
]);
console.log(`\nYou Selected the Payment Method: ${paymentType.payment}\n`);
const tutionFees = tutionFee[answers.Courses];
const paymentAmount = parseFloat(paymentType.Amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulation you had successfull enrolled in ${answers.Courses}`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would like to do next?",
            choices: ["View Status", "Exit the Portal"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n****** STATUS ******\n");
        console.log(`Student Name: ${answers.student}\n`);
        console.log(`Student ID number: ${randomNumer}\n`);
        console.log(`Course Enrolled for: ${answers.Courses}\n`);
        console.log(`Tuution fees Paid: ${paymentAmount}\n`);
        console.log(`Balance amount: ${myBalance += ans.paymentAmount}`);
    }
    else {
        console.log("\n Exiting Student Management System \n");
    }
}
else {
    console.log("you have to course fee in full");
}
