function getEmi() {
  let amount = document.getElementById("amount").value;
  let interest = document.getElementById("rate").value;
  let tenure = document.getElementById("tenure").value;

  let interestRate = (amount * (interest * 0.01)) / tenure;

  const emi = (amount / tenure + interestRate).toFixed(2);
  document.getElementById("emi").innerHTML = "EMI : " + emi + "/- RS";
}
