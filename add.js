// index.html

document.addEventListener("DOMContentLoaded", function() {
  const hoursInput = document.getElementById("hours-input");
  const minutesInput = document.getElementById("minutes-input");
  const secondsInput = document.getElementById("seconds-input");
  const addBtn = document.getElementById("add-btn");
  const timeList = document.getElementById("time-list");
  const totalTimeContainer = document.getElementById("total-time");

  addBtn.addEventListener("click", function() {
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;

    const formattedTime = formatTime(hours, minutes, seconds);
    if (formattedTime !== "") {
      const li = document.createElement("li");
      li.textContent = formattedTime;
      timeList.appendChild(li);
    }

    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";

    calculateTotalTime();
  });

  function formatTime(hours, minutes, seconds) {
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  function calculateTotalTime() {
    const timeItems = timeList.getElementsByTagName("li");
    let totalHours = 0;
    let totalMinutes = 0;
    let totalSeconds = 0;

    for (let i = 0; i < timeItems.length; i++) {
      const timeParts = timeItems[i].textContent.split(":");
      const hours = parseInt(timeParts[0]);
      const minutes = parseInt(timeParts[1]);
      const seconds = parseInt(timeParts[2]);

      totalHours += hours;
      totalMinutes += minutes;
      totalSeconds += seconds;
    }

    totalMinutes += Math.floor(totalSeconds / 60);
    totalSeconds %= 60;
    totalHours += Math.floor(totalMinutes / 60);
    totalMinutes %= 60;

    totalTimeContainer.textContent = `Total time: ${totalHours} hours, ${totalMinutes} minutes, ${totalSeconds} seconds`;
  }
});
