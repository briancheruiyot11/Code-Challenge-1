# Code-Challenge-1

This code challenge features a collection of beginner-friendly JavaScript tools designed to help users practice programming fundamentals through practical scenarios. Each script utilizes prompt() and console.log() to interact with the user and display results.


## Description

This repository contains three JavaScript files that simulate:

1. chai.js – A tea ingredient calculator for making Kenyan chai.
2. fee.js – A money transfer transaction fee estimator.
3. fare.js – A boda boda (motorbike taxi) fare calculator based on distance.

Each script prompts the user for input and prints relevant results to the browser console. 

## Project Setup

Follow these steps to use any of the JavaScript files:

1. Open a modern web browser (Chrome)
2. Press F12 or right-click → Inspect → Console to open the Developer Console.
3. Copy and paste the entire code from chai.js, fee.js, or fare.js into the console.
4. Press Enter and follow the prompt instructions.
5. Results will appear directly in the console.



## JavaScript Overview

### Challenge 1: Chai Bora Ingredient Calculator ☕

Prompts the user for the number of cups of tea they want to make and calculates the total amount of ingredients required:

* Water: 200 ml per cup
* Milk: 50 ml per cup
* Tea Leaves (Majani): 1 tsp per cup
* Sugar (Sukari): 2 tsp per cup

Calculation of total ingredients needed:
```
  let totalWater = numberOfCups * waterPerCup;
  let totalMilk = numberOfCups * milkPerCup;
  let totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  let totalSugar = numberOfCups * sugarPerCup;
```

Output:

```
To make 3 cup(s) of Kenyan Chai, you will need:
Water: 60 ml
Milk: 150 ml
Tea Leaves (Majani): 3 tsp
Sugar (Sukari): 6 tsp
```


### Challenge 2: Boda Boda Ride Fare Estimator 🛵

Calculates the cost of a boda boda ride based on the entered distance in kilometers. Fare is calculated using:

* Base Fare: KES 50
* Charge per Kilometer: KES 15

Calculation of travelCharge and totalFare:
```
  const baseFare = 50; // KES
  const chargePerKm = 15; // KES per km

  const travelCharge = distanceInKm * chargePerKm;
  const totalFare = baseFare + travelCharge;
```

Output:

```
Uko kwote Io ni: 4 km
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 60
Total Fare: KES 110
```

### Challenge 3: Simplified Mobile Money Transaction Fee Estimator 📱

Estimates the transaction fee when sending money, using the following rules:

* Fee = 1.5% of the amount
* Minimum fee: KES 10
* Maximum fee: KES 70

Calculation of the minimum and maximum transaction fee using if-else-if condition:
  ```
  const feePercent = 0.015; // 1.5%
  let transactionFee = amountToSend * feePercent;

  if (transactionFee < 10) {
    transactionFee = 10;
  } else if (transactionFee > 70) {
    transactionFee = 70;
  }
  ```
Calculation of the total amount debited:
```
const totalDebited = amountToSend + transactionFee;
```

Output:

```
Sending: KES 500
Calculated Transaction Fee: KES 10
Total Amount to be Debited: KES 510
Send Money Securely!
```





## Author
Created by Brian Cheruiyot to support learners and beginners in practicing JavaScript in simple, practical, and meaningful ways.

## License
### MIT License

### Copyright (c) 2025 Brian Cheruiyot

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
