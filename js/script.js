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

function donationCalculator(DonationAmount, totalDonation, event) {
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

  const eventName = document.getElementById(event).innerText;

  const historyContainer = document.getElementById("history-container");
  const div = `
      <div class="p-4 md:p-6 lg:p-8 rounded-2xl border space-y-4 mt-4">
          <h3 class="text-2xl font-bold">
            ${userDonation} Taka is ${eventName}
          </h3>
          <p class="text-base text-gray-600">
            Date: ${new Date().toString()}
          </p>
        </div>
    `;
  historyContainer.innerHTML += div;

  document.getElementById(DonationAmount).value = "";
}
// const noakhali = donationCalculator("noakhali-user-donate-amount");
document.getElementById("noakhali-donate-btn").addEventListener("click", () => {
  donationCalculator(
    "noakhali-user-donate-amount",
    "noakhali-total-Donation",
    "noakhali-event"
  );
});
document.getElementById("feni-donate-btn").addEventListener("click", () => {
  donationCalculator(
    "feni-user-donate-amount",
    "feni-total-donation",
    "feni-event"
  );
});
document.getElementById("quata-protest-btn").addEventListener("click", () => {
  donationCalculator(
    "quata-user-donation",
    "quota-total-donation",
    "quota-event"
  );
});

document.getElementById("history-btn").addEventListener("click", () => {
  document.getElementById("donation-container").classList.add("hidden");
  document.getElementById("history-container").classList.remove("hidden");
});
document.getElementById("donate-btn").addEventListener("click", () => {
  document.getElementById("donation-container").classList.remove("hidden");
});
