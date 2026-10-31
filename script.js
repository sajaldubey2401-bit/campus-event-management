var events = [
  { name: "Campus Photography Walk", seats: 30 },
  { name: "Introduction to Web Design", seats: 24 },
  { name: "Open Mic Evening", seats: 40 }
];

function updateSeats() {
  var cards = document.querySelectorAll(".event");
  for (var i = 0; i < cards.length; i++) {
    cards[i].querySelector(".seats").textContent = events[i].seats;
  }
}

function showEvents() {
  var s = document.getElementById("event");
  s.innerHTML = "<option>Select an event</option>";
  for (var i = 0; i < events.length; i++) {
    var o = document.createElement("option");
    o.value = i;
    o.textContent = events[i].name;
    s.appendChild(o);
  }
}

function registerUser() {
  var i = document.getElementById("event").value;
  if (events[i].seats > 0) {
    events[i].seats--;
    document.getElementById("message").textContent = "Registration complete.";
    document.getElementById("receipt").textContent = document.getElementById("student-name").value + " · " + events[i].name;
    document.getElementById("confirmation").hidden = false;
    updateSeats();
  } else {
    document.getElementById("message").textContent = "This event is full.";
  }
}

document.getElementById("registration-form").addEventListener("submit", function (e) {
  e.preventDefault();
  registerUser();
});

document.getElementById("custom-event-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var n = document.getElementById("custom-title").value;
  if (n) {
    events.push({ name: n, seats: 20 });
    document.getElementById("custom-message").textContent = "Custom event created successfully.";
    showEvents();
    this.reset();
  }
});

document.getElementById("download").addEventListener("click", function () {
  var t = document.getElementById("receipt").textContent;
  var a = document.createElement("a");
  a.href = "data:text/plain," + encodeURIComponent(t);
  a.download = "confirmation.txt";
  a.click();
});

showEvents();
updateSeats();
