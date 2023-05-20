document.addEventListener("DOMContentLoaded", function() {
  const hoursInput = document.getElementById("hours-input");
  const minutesInput = document.getElementById("minutes-input");
  const secondsInput = document.getElementById("seconds-input");
  const addBtn = document.getElementById("add-btn");
  const resetBtn = document.getElementById("reset-btn");
  const timeList = document.getElementById("time-list");
  const totalTimeContainer = document.getElementById("total-time");

  addBtn.addEventListener("click", function() {
    const timeInput = hoursInput.value;
    const timeParts = timeInput.match(/(\d{2}):(\d{2}):(\d{2})/);

    let hours, minutes, seconds;

    if (timeParts) {
      hours = parseInt(timeParts[1]) || 0;
      minutes = parseInt(timeParts[2]) || 0;
      seconds = parseInt(timeParts[3]) || 0;
    } else {
      const timePartsAlt = timeInput.match(/(\d{1,2})(\d{2})(\d{2})/);
      if (timePartsAlt) {
        hours = parseInt(timePartsAlt[1]) || 0;
        minutes = parseInt(timePartsAlt[2]) || 0;
        seconds = parseInt(timePartsAlt[3]) || 0;
      } else {
        hours = parseInt(hoursInput.value) || 0;
        minutes = parseInt(minutesInput.value) || 0;
        seconds = parseInt(secondsInput.value) || 0;
      }
    }

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

  resetBtn.addEventListener("click", function() {
    timeList.innerHTML = "";
    totalTimeContainer.textContent = "Total time: 0 hours, 0 minutes, 0 seconds";
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
document.addEventListener("DOMContentLoaded", function() {
  // ...existing code...

  // Hide the scrolling indicator once the user starts scrolling
  window.addEventListener("scroll", function() {
    const scrollIndicator = document.getElementById("scroll-indicator");
    scrollIndicator.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  // ...existing code...

  // Scroll to the comments section when the scrolling indicator is clicked
  const scrollIndicator = document.getElementById("scroll-indicator");
  scrollIndicator.addEventListener("click", function() {
    const commentsSection = document.getElementById("disqus_thread");
    commentsSection.scrollIntoView({ behavior: "smooth" });
  });

  // Hide the scrolling indicator once the user starts scrolling
  window.addEventListener("scroll", function() {
    scrollIndicator.style.display = "none";
  });
});
