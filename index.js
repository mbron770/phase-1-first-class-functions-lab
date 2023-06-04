// Code your solution in this file!

const returnFirstTwoDrivers = (arr) => arr.slice(0,2)

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = (arr) => arr.slice(2,4)

returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    return function(fare){
        return fare * number
    }

    // return fareDoubler(fare)
}

const fareDoubler = (fare) => fare*2

const fareTripler = (fare) => fare*3

const selectDifferentDrivers = (driversArray, fx1) => fx1(driversArray)
  