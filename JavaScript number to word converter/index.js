let numInput = document.getElementById("number");
let textBox = document.getElementById("textBox");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let number = numInput.value;
    number=Math.floor(number)
    const reg = new RegExp('^-{0,1}[0-9]+$');
    if (reg.test(number)) {
        if(number<0){
            number *= -1;
        }
        let word = convertToWord(number);
        if (word != "") {
            word = word.replace(/  +/g, " ");
            textBox.innerText = word;
        }
    }else{
        textBox.innerText = "Please Enter a positive decimal number";
    }
})

let special = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    20: "Twenty",
    30: "Thirty",
    40: "Fourty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
    100: "Hundred",
    1000: "Thousand",
    1000000: "Million",
    1000000000: "Billion",
    1000000000000: "Trillion",
};


function convertToWord(num) {
    num = +num;
    num = `${num}`;
    let word = "";

    let length = num.length;
    switch (length) {
        case 1:
            word = calculateSingleDigit(num);
            break;

        case 2:
            word = calculateTwoDigits(num);
            break;

        case 3:
            word = calculateThreeDigits(num);
            break;

        case 4:
        case 5:
        case 6:
            word = calculateSixDigits(num);
            break;

        case 7:
        case 8:
        case 9:
            word = calculateNineDigits(num);
            break;

        case 10:
        case 11:
        case 12:
            word = calculateTwelveDigits(num);
            break;

        case 13:
        case 14:
        case 15:
            word = calculateFifteenDigits(num);
            break;

        default:

            let msg = "This program can only convert numbers less than QuadTrillion";
            textBox.innerText = msg;
            console.log(msg);
            break;
    }

    return word.trim();
}

function calculateSingleDigit(num) {
    let word = " ";
    word += special[num];
    return word;
}

function calculateTwoDigits(num) {
    let word = " ";

    firstDigit = num[num.length - 2];
    secondDigit = num[num.length - 1];

    if (!(firstDigit == 0 && secondDigit == 0)) {
        if (firstDigit == 1) {
            if (secondDigit == 0 || secondDigit == 1) {
                word += special[num];
            } else if (secondDigit == 2) {
                word += special[secondDigit];
                word = word.slice(0, 3);
                word += "elve";
            } else {
                if (secondDigit == 3) {
                    word += special[secondDigit];
                    word = word.slice(0, 2);
                    word += "ir";
                } else {
                    word += special[secondDigit];
                }

                if (secondDigit == 8) {
                    word = word.slice(0, 4);
                }
                word += "teen";
            }
        } else {
            if (secondDigit == 0) {
                word += calculateSingleDigit(num);
            } else {
                word += eval(`special[${firstDigit}0]`);
                word += " ";
                word += special[secondDigit];
            }
        }
    }

    return word;
}

function calculateThreeDigits(num) {
    let word = " ";
    firstDigit = num[num.length - 3];
    secondDigit = num[num.length - 2];
    thirdDigit = num[num.length - 1];

    if (firstDigit != 0) {
        word += special[firstDigit];
        word += " ";
        word += special["100"];

        if (!(secondDigit == 0 && thirdDigit == 0)) {
            word += " and ";
        }
    }
    if (!(secondDigit == 0 && thirdDigit == 0)) {
        if (secondDigit == 0) {
            word += special[thirdDigit];
        } else {
            let newnum = `${secondDigit}${thirdDigit}`;
            let subWord = calculateTwoDigits(newnum);
            word += subWord;
        }
    }

    return word;
}

function calculateSixDigits(num) {
    let word = " ";
    let length = num.length;
    firstDigit = num[length - 6] || "0";
    secondDigit = num[length - 5] || "0";
    thirdDigit = num[length - 4];
    fourthDigit = num[length - 3];
    fifthDigit = num[length - 2];
    sixthDigit = num[length - 1];

    if (!(firstDigit == 0 && secondDigit == 0 && thirdDigit == 0)) {
        let firstThreeNum = `${firstDigit}${secondDigit}${thirdDigit}`;
        word += calculateThreeDigits(firstThreeNum);
        word += " ";
        word += special["1000"];
        word += " ";
    }

    if (!(fourthDigit == 0 && fifthDigit == 0 && sixthDigit == 0)) {
        let newnum = `${fourthDigit}${fifthDigit}${sixthDigit}`;
        word += calculateThreeDigits(newnum);
    }


    return word;
}

function calculateNineDigits(num) {
    let word = " ";
    let length = num.length;
    firstDigit = num[length - 9] || "0";
    secondDigit = num[length - 8] || "0";
    thirdDigit = num[length - 7];
    fourthDigit = num[length - 6];
    fifthDigit = num[length - 5];
    sixthDigit = num[length - 4];
    seventhDigit = num[length - 3];
    eighthDigit = num[length - 2];
    ninthDigit = num[length - 1];

    if (!(firstDigit == 0 && secondDigit == 0 && thirdDigit == 0)) {
        let firstThreeNum = `${firstDigit}${secondDigit}${thirdDigit}`;
        word += calculateThreeDigits(firstThreeNum);
        word += " ";
        word += special["1000000"];
        word += " ";
    }

    if (!(fourthDigit == 0 && fifthDigit == 0 && sixthDigit == 0 && seventhDigit == 0 && eighthDigit == 0 && ninthDigit == 0)) {
        let newnum = `${fourthDigit}${fifthDigit}${sixthDigit}${seventhDigit}${eighthDigit}${ninthDigit}`;
        word += calculateSixDigits(newnum);
    }

    return word;
}

function calculateTwelveDigits(num) {
    let word = " ";
    let length = num.length;
    firstDigit = num[length - 12] || "0";
    secondDigit = num[length - 11] || "0";
    thirdDigit = num[length - 10];
    fourthDigit = num[length - 9];
    fifthDigit = num[length - 8];
    sixthDigit = num[length - 7];
    seventhDigit = num[length - 6];
    eighthDigit = num[length - 5];
    ninthDigit = num[length - 4];
    tenthDigit = num[length - 3];
    eleventhDigit = num[length - 2];
    twelvthDigit = num[length - 1];

    if (!(firstDigit == 0 && secondDigit == 0 && thirdDigit == 0)) {
        let firstThreeNum = `${firstDigit}${secondDigit}${thirdDigit}`;
        word += calculateThreeDigits(firstThreeNum);
        word += " ";
        word += special["1000000000"];
        word += " ";
    }

    if (!(fourthDigit == 0 && fifthDigit == 0 && sixthDigit == 0 && seventhDigit == 0 && eighthDigit == 0 && ninthDigit == 0 && tenthDigit == 0 && eleventhDigit == 0 && twelvthDigit == 0)) {
        let newnum = `${fourthDigit}${fifthDigit}${sixthDigit}${seventhDigit}${eighthDigit}${ninthDigit}${tenthDigit}${eleventhDigit}${twelvthDigit}`;
        word += calculateNineDigits(newnum);
    }

    return word;
}

function calculateFifteenDigits(num) {
    let word = " ";
    let length = num.length;
    firstDigit = num[length - 15] || "0";
    secondDigit = num[length - 14] || "0";
    thirdDigit = num[length - 13];
    fourthDigit = num[length - 12];
    fifthDigit = num[length - 11];
    sixthDigit = num[length - 10];
    seventhDigit = num[length - 9];
    eighthDigit = num[length - 8];
    ninthDigit = num[length - 7];
    tenthDigit = num[length - 6];
    eleventhDigit = num[length - 5];
    twelvthDigit = num[length - 4];
    thirteenthDigit = num[length - 3];
    fourteenthDigit = num[length - 2];
    fifteenthDigit = num[length - 1];

    if (!(firstDigit == 0 && secondDigit == 0 && thirdDigit == 0)) {
        let firstThreeNum = `${firstDigit}${secondDigit}${thirdDigit}`;
        word += calculateThreeDigits(firstThreeNum);
        word += " ";
        word += special["1000000000000"];
        word += " ";
    }

    if (!(fourthDigit == 0 && fifthDigit == 0 && sixthDigit == 0 && seventhDigit == 0 && eighthDigit == 0 && ninthDigit == 0 && tenthDigit == 0 && eleventhDigit == 0 && twelvthDigit == 0 && thirteenthDigit == 0 && fourteenthDigit == 0 && fifteenthDigit == 0)) {
        let newnum = `${fourthDigit}${fifthDigit}${sixthDigit}${seventhDigit}${eighthDigit}${ninthDigit}${tenthDigit}${eleventhDigit}${twelvthDigit}${thirteenthDigit}${fourteenthDigit}${fifteenthDigit}`;
        word += calculateTwelveDigits(newnum);
    }

    return word;
}