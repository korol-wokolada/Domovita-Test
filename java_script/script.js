const label1 = document.getElementById("clear_date_1");
const label2 = document.getElementById("clear_date_2");
const label3 = document.getElementById("clear_guests_1");

function clearCheckIn() {
  document.getElementById("check-in").value = "";
}
label1.onclick = clearCheckIn;

function clearDeparture() {
  document.getElementById("departure").value = "";
}
label2.onclick = clearDeparture;

function clearGuests() {
  document.getElementById("guest").value = "";
}
label3.onclick = clearGuests;
