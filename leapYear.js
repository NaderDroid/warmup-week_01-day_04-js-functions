

const leapYear = function (isLeapYear) {

    if (typeof(isLeapYear) === 'number' || isLeapYear > 0) {


        if (isLeapYear % 4 === 0 && isLeapYear % 100 === 0 && isLeapYear % 400 === 0) {
            return "IT IS A LEAP YEAR";
        } else if (isLeapYear % 4 === 0 && isLeapYear % 100 === 0) {
            return "IT IS NOT";
        } else if (isLeapYear % 4 === 0) {
            return "IT IS A LEAP YEAR";
        }
    }
    else {
        return "NOT VALID NUMBER";
    }

};

console.log(leapYear(1900));