function makeTea() {
  // Prompt user to enter the number of cups
  let numberOfCups = (prompt("Enter the number of cups of tea:"));

  //To check if number of cups entered is a valid number
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number greater than 0.");
    return;
  }

  // Ingredient amounts per cup
  const waterPerCup = 20; // in ml
  const milkPerCup = 50; // in ml
  const teaLeavesPerCup = 1; // in tsp
  const sugarPerCup = 2; // in tsp

  // Total ingredients needed
  let totalWater = numberOfCups * waterPerCup;
  let totalMilk = numberOfCups * milkPerCup;
  let totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  let totalSugar = numberOfCups * sugarPerCup;

  // Display results
  console.log(`To make ${numberOfCups} cup(s) of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tsp`);
  console.log(`Sugar (Sukari): ${totalSugar} tsp`);
}

// Call the function
makeTea();
