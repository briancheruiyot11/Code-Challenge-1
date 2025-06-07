function calculateBodaFare() {
  // Prompt user to enter distance
  let distanceInput = prompt("Ingiza umbali kwa kilomita (km):");
  let distanceInKm = parseFloat(distanceInput);

  // Validate input
  if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log("Tafadhali andika umbali sahihi (nambari zaidi ya sifuri).");
    return;
  }

  //Declaration of calculation rules
  const baseFare = 50; // KES
  const chargePerKm = 15; // KES per km

  //Calculation of travelCharge and totalFare
  const travelCharge = distanceInKm * chargePerKm;
  const totalFare = baseFare + travelCharge;

  // Print results to the console
  console.log(`Uko kwote Io ni: ${distanceInKm} km`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${travelCharge} `);
  console.log(`Total Fare: KES ${totalFare} `);
}
// Call the function
calculateBodaFare();