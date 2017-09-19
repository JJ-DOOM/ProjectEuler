/*  
 *  Problem1.js
 *  ProjectEuler
 *
 *  Created by Erlend Stenberg on 19.09.2017.
 *  Copyright © 2017 Erlend Stenberg. All rights reserved.
*/

/*
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.     The sum of these multiples is 23.

    Find the sum of all the multiples of 3 or 5 below 1000.
 */

export const sumOfAllMultiplesOfThreeOrFiveBelow = number => {
    let temporarySum = 0;
    for (var i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            temporarySum += i;
        }
    }
    return temporarySum;
};