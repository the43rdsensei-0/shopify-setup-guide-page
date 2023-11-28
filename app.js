// javascript goes here

// variable declarations

const accordionUnits = document.querySelectorAll(".accordion_unit");
const accordion = document.querySelector(".accordion_wrapper");
const trialCard = document.querySelector(".trial_card");
const downArrow = document.querySelector(".down-arrow");
const closeBtn = document.querySelector(".close_btn");
const searchbar = document.querySelector("#search_input");
const form = document.querySelector("form");
const progressCount = document.getElementById("progress_count");
const progressBar = document.querySelector("progress");
const notifBtn = document.querySelector(".notif_btn");
const profileBtn = document.querySelector(".profile_btn");
const notifDropdown = document.querySelector(".notif_dropdown");
const profileDropdown = document.querySelector(".profile_dropdown");

let count = 0;
let svgString = `<svg class='accordion_svg' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
      d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
      fill="#fff"
    ></path>
  </svg>`;

accordionUnits.forEach((unit) => {
  let header = unit.querySelector("label");
  let btn = unit.querySelector(".accordion_icon");
  let originalSvg = btn.innerHTML;
  console.log(unit);
  header.addEventListener("click", () => {
    // Remove 'open' class from all units
    accordionUnits.forEach((otherUnit) => {
      if (otherUnit !== unit && otherUnit.classList.contains !== "open") {
        otherUnit.classList.remove("open");
      }
    });

    // Add 'open' class to the clicked unit
    unit.classList.add("open");
  });

  btn.addEventListener("click", () => {
    if (btn.classList.contains("clicked")) {
      btn.classList.remove("clicked");
      btn.innerHTML = originalSvg;
      count = count - 1;
    } else {
      btn.classList.add("clicked");
      count = count + 1;
      btn.innerHTML = svgString;
    }

    if (count <= progressBar.max) {
      progressBar.value = count;
      progressCount.textContent = count;
    } else return;
  });
});

// SEARCHBAR FUNCTIONALITY

searchbar.addEventListener("input", (e) => {
  let value = e.target.value;
  console.log(value);
  // getting the value from the search input and logging to the console, which can be used to filter through an array or perform an action...
});

// the submit event onclick of ENTER key for better accessibility esp for keyboard users

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearInputField();
});

// below is a function that clears the input field but still keeps the focus on, however the focus maybe be removed (depends on UX intended)

function clearInputField() {
  searchbar.value = "";
}

// CLOSE TRIAL CARD FUNCTIONALITY

closeBtn.addEventListener("click", (e) => {
  trialCard.style.display = "none";
});

// SETUP GUIDE TOGGLE INTERACTION

// Initialize the state of the accordion and the arrow
accordion.classList.add("show");
accordion.style.height = "100%";
downArrow.style.transform = "rotate(0deg)";

downArrow.addEventListener("click", (e) => {
  if (accordion.classList.contains("show")) {
    accordion.classList.remove("show");
    accordion.style.height = "0px";
    downArrow.style.transform = "rotate(180deg)";
  } else {
    accordion.classList.add("show");
    accordion.style.height = "100%";
    downArrow.style.transform = "rotate(0deg)";
  }
});

// NAVIGATION BUTTON INTERACTION

profileBtn.addEventListener("click", () => {
  profileDropdown.classList.toggle("show_dropdown");
  notifDropdown.classList.remove("show_dropdown");
});

notifBtn.addEventListener("click", () => {
  notifDropdown.classList.toggle("show_dropdown");
  profileDropdown.classList.remove("show_dropdown");
});

