// Code your solution in this file!
function returnFirstTwoDrivers(driverArray){
    const firstTwoDrivers = () => {
        return driverArray.slice(0,2);
    }
    return firstTwoDrivers();
}

function returnLastTwoDrivers(driverArray){
    const lastTwoDrivers = () => {
        return driverArray.slice(-2);
    }
    return lastTwoDrivers();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier){
    return function(currentFare){
        return currentFare * fareMultiplier;
    }
}

function fareDoubler(currentFare){
    const newFare = () => {
        return createFareMultiplier(2)(currentFare);
    }
    return newFare();
}

function fareTripler(currentFare){
    const newFare = () => {
        return createFareMultiplier(3)(currentFare);
    }
    return newFare();
}

function selectDifferentDrivers(drivers, unknownDrivers){
    return unknownDrivers(drivers);
}