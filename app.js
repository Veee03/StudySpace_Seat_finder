// app.js - all behaviour. Three parts: STATE, RENDER, EVENTS.

// 1. STATE: the few things that can change
const state = { selectedId: null, quietOnly: false, zoom: 1 };

// Icon + WORD for every environment value (never colour alone)
const ICON  = { noise: "\u266A", light: "\u2600", crowd: "\u263A" };
const LABEL = { noise: "Noise", light: "Light", crowd: "Crowd" };
const WORD  = { low: "Low", medium: "Medium", high: "High" };

const mapEl = document.getElementById("map");
const detailsEl = document.getElementById("details");
document.getElementById("updated").textContent = BUILDING.updated;

// 2. RENDER: draw the map from the data
function renderMap() {
  mapEl.innerHTML = "";                                   // clear the old seats
  SEATS.forEach(seat => {
    const btn = document.createElement("button");
    const isSelected = seat.id === state.selectedId;
    const isQuiet = seat.noise === "low";
    btn.className = "seat " + (isSelected ? "selected" : seat.status);
    if (state.quietOnly && !isQuiet) btn.classList.add("dim");
    btn.disabled = seat.status === "occupied";            // taken seats can't be chosen
    const mark = isSelected ? "" : seat.status === "available" ? "\u2713" : "/";
    btn.innerHTML = '<span class="mark" aria-hidden="true">' + mark + "</span><span>" + seat.id.slice(3) + "</span>";
    btn.setAttribute("aria-label", "Seat " + seat.id + ", " + (isSelected ? "selected" : seat.status) +
                     ", noise " + seat.noise);           // screen readers get the full meaning
    btn.addEventListener("click", () => { state.selectedId = seat.id; renderMap(); renderDetails(); });
    mapEl.appendChild(btn);
  });
}

// Details panel: shows ONE main button, "Check in here" (Think-Aloud fix)
function renderDetails() {
  const seat = SEATS.find(s => s.id === state.selectedId);
  if (!seat) return;
  const badges = ["noise", "light", "crowd"].map(k =>
    '<li class="badge"><span aria-hidden="true">' + ICON[k] + "</span> " + LABEL[k] + ": <b>" + WORD[seat[k]] + "</b></li>").join("");
  detailsEl.innerHTML =
    "<h2>Seat " + seat.id + "</h2>" +
    '<ul class="badges">' + badges +
    '<li class="badge">Sockets: <b>' + (seat.sockets ? "Yes" : "No") + "</b></li>" +
    '<li class="badge">PC: <b>' + (seat.pc ? "Yes" : "No") + "</b></li></ul>" +
    '<button class="primary" id="checkin">Check in here</button>';
  document.getElementById("checkin").addEventListener("click", () => {
    detailsEl.innerHTML = '<p class="confirm">You are checked in to seat ' + seat.id +
      ". (Prototype: the NFC check-in screen goes here.)</p>";
  });
}

// 3. EVENTS: controls change the state, then we redraw
document.getElementById("quietOnly").addEventListener("change", e => { state.quietOnly = e.target.checked; renderMap(); });
document.getElementById("lowStim").addEventListener("change", e => document.body.classList.toggle("low-stim", e.target.checked));
function setZoom(z) {
  state.zoom = Math.min(2, Math.max(0.8, z));
  document.documentElement.style.setProperty("--seat", Math.round(52 * state.zoom) + "px");
}
document.getElementById("zoomIn").addEventListener("click", () => setZoom(state.zoom + 0.2));
document.getElementById("zoomOut").addEventListener("click", () => setZoom(state.zoom - 0.2));

renderMap();   // first draw when the page loads
