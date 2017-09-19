/*  
 *  Problem1.test.js
 *  ProjectEuler
 *
 *  Created by Erlend Stenberg on 19.09.2017.
 *  Copyright © 2017 Erlend Stenberg. All rights reserved.
*/

import {sumOfAllMultiplesOfThreeOrFiveBelow} from './../src/Problem1';

it('First element of list should be 1', () => {
    expect(sumOfAllMultiplesOfThreeOrFiveBelow(10)).toBe(23);
});

it('Testing sumOfAll at 1000', () => {
   console.log(sumOfAllMultiplesOfThreeOrFiveBelow(1000));
});

