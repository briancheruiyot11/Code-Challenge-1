function estimateTransactionFee() {
  // Prompt user to enter the amount
  let input = prompt("Enter the amount to send:");
  let amountToSend = parseFloat(input);

  // Validate input
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Please enter a valid number greater than 0.");
    return;
  }

  //Declaration and calculation of transactionFee
  const feePercent = 0.015; // 1.5%
  let transactionFee = amountToSend * feePercent;

  // Apply min and max limits
  if (transactionFee < 10) {
    transactionFee = 10;
  } else if (transactionFee > 70) {
    transactionFee = 70;
  }

  //Calculation of total amount Debited
  const totalDebited = amountToSend + transactionFee;

  // Display results
  console.log(`Sending: KES ${amountToSend.toFixed(0)}`);
  console.log(`Calculated Transaction Fee: KES ${transactionFee.toFixed(0)}`);
  console.log(`Total Amount to be Debited: KES ${totalDebited.toFixed(0)}`);
  console.log(`\nSend Money Securely!`)
}

// Call the function
estimateTransactionFee();