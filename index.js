// Code your solution in this file!
function distanceFromHqInBlocks(streetNum) {
    if (streetNum >= 42) {
        return streetNum - 42;
    }
    else if (streetNum < 42) {
        return 42 - streetNum;
    };
    };
    function distanceFromHqInFeet(streetNum) {
        if (streetNum >= 42) {
            return (streetNum - 42) * 264;
        }
        else if (streetNum < 42) {
            return (42 - streetNum) * 264;
        }
    };
    function distanceTravelledInFeet(num1, num2) {
        if (num1 > num2) {
        return (num1 - num2) * 264
        }
        else if (num1 <= num2) {
            return (num2 - num1) * 264
        }
    }
    function calculatesFarePrice(start, destination) {
        if (Math.abs(start - destination) <= 1) {
            return 0
        }
        else if (Math.abs(start - destination) <= 7) {
            return (((start - destination) * 264) - 400) * .02
        }
        else if (Math.abs(start - destination) <= 8 ) {
            return 25
        }
        else if (start - destination >= 10) {
        return 'cannot travel that far'
        }
    }