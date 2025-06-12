
theDate();

function theDate() {
    var date = new Date();
    var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var currentDate = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();

    // var todaysDate = document.getElementById("dateHere").innerHTML = month + "/" + \*currentDate + "/" + year;
    var todaysDate = document.getElementById("dateHere").innerHTML = year;
}

const tabElements = document.querySelectorAll('button[role="tab"]');
const panelElements = document.querySelectorAll('[role="tabpanel"]');
let activeIndex = 0;

// Listen to clicks on tabs
tabElements.forEach(function (tab, index) {
  tab.addEventListener("click", function (event) {
    setActiveTab(index);
  });
});

function setActiveTab(index) {
    // Make currently active tab inactive
    tabElements[activeIndex].setAttribute("aria-selected", "false");
  
    // Set the new tab as active
    tabElements[index].setAttribute("aria-selected", "true");
  
    setActivePanel(index);
    activeIndex = index;
  }
  function setActivePanel(index) {
    // Hide currently active panel
    panelElements[activeIndex].setAttribute("hidden", "");
  
    // Show the new active panel
    panelElements[index].removeAttribute("hidden");
  }

