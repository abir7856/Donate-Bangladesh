function getInnerText(id) {
  return parseFloat(document.getElementById(id).innerText);
}
function getInputValue(id) {
  return parseFloat(document.getElementById(id).value);
}

// const noakhaliDonateBtn = document.getElementById("noakhali-donate-btn");
// noakhaliDonateBtn.addEventListener("click", function () {
//   const noakhaliDonateUserAmount = getInputValue("noakhali-user-donate-amount");
//   const noakhaliTotalDonation = getInnerText("noakhali-total-Donation");
//   document.getElementById("noakhali-total-Donation").innerText =
//     noakhaliDonateUserAmount + noakhaliTotalDonation;
//   const mainBalance = getInnerText("main-balance");
//   document.getElementById("main-balance").innerText =
//     mainBalance - noakhaliDonateUserAmount;
// });

function donationCalculator(DonationAmount, totalDonation) {
  const userDonation = parseFloat(
    document.getElementById(DonationAmount).value
  );
  const accountBalance = parseFloat(
    document.getElementById("main-balance").innerText
  );
  if (userDonation > accountBalance) {
    return alert("Not enough balance");
  }
  if (userDonation <= 0 || isNaN(userDonation)) {
    alert("Wrong Input");
    return;
  } else {
    my_modal_1.showModal();
  }

  const UserTotalDonation = parseFloat(
    document.getElementById(totalDonation).innerText
  );
  document.getElementById(totalDonation).innerText =
    userDonation + UserTotalDonation;

  document.getElementById("main-balance").innerText =
    accountBalance - userDonation;
}
// const noakhali = donationCalculator("noakhali-user-donate-amount");
document.getElementById("noakhali-donate-btn").addEventListener("click", () => {
  donationCalculator("noakhali-user-donate-amount", "noakhali-total-Donation");
});
document.getElementById("feni-donate-btn").addEventListener("click", () => {
  donationCalculator("feni-user-donate-amount", "feni-total-donation");
});
document.getElementById("quata-protest-btn").addEventListener("click", () => {
  donationCalculator("quata-user-donation", "quota-total-donation");
});
