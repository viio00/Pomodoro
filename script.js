function showPage(pageId) {
   document.querySelectorAll("body > div").forEach(div => {
      if (div.id!== "titlebar" && div.id!=="bodybg") {
         div.style.display = "none";
      }
    });
    document.getElementById(pageId).style.display = "block";
    }
  
function quit(){
  document.getElementById("close").addEventListener("click", () => {
    window.electronAPI.closeWindow();
  });
}

function min() {
  document.getElementById("minimize").addEventListener("click", () => {
    window.electronAPI.minimizeWindow();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  quit();
  min();
});

function setDigit(elementId, digit) {
  const digitHeight = 48; 
  const yOffset = -digit * digitHeight;
  const img = document.getElementById(elementId);
  img.style.backgroundPositionY = `${yOffset}px`;
}
let timer;
  let mins = 0;
  let secs = 0;
  const alarm = new Audio('Objects/AlarmPopUp/Alarm.mp3');
  alarm.loop = true;

  function openForm() {
    document.getElementById("alarmPop").style.display = "block";
    alarm.play();

    document.getElementById("exitAlarm").addEventListener("click", () => {
      document.getElementById("alarmPop").style.display = "none";
      alarm.pause();
    })
  }
  
document.addEventListener("DOMContentLoaded", () => {

  function display() {
    setDigit("minTens", Math.floor(mins / 10));
    setDigit("minOnes", mins % 10);
    setDigit("secTens", Math.floor(secs / 10));
    setDigit("secOnes", secs % 10);
  }

  function startCountdown(m, s) {
    clearInterval(timer);
    mins = m;
    secs = s;
  
    display();
  
    timer = setInterval (() => {
      if (secs === 0 && mins === 0) {
        clearInterval(timer);
        const icon = document.getElementById("catBus");
        icon.src = "Objects/Icon_CatBus/catBus1.png";
        stopIcon();

        openForm();

      } else {
        if (secs === 0) {
          mins--;
          secs = 59;
        } else {
          secs--;
        }
        display();
      }
    }, 1000);
  }
  
  
  function stopTimer() {
    clearInterval(timer);
    mins = 0;
    secs = 0;
    display();
  }
  
  function resetTimer() {
    stopTimer();
    mins = 0;
    secs = 0;
    display();
  }
  
  function activateIconCB() {
    const icon = document.getElementById("catBus");
    icon.src = "Objects/Icon_CatBus/CatBus.gif";
  
  }
  
  function stopIcon() {
    const icon = document.getElementById("catBus");
    icon.src = "Objects/Icon_CatBus/catBus1.png";
  }
  
    document.getElementById("back").addEventListener("click", () => {
      resetTimer(0,0);
      stopIcon();
  
    })
  
    document.getElementById("stop").addEventListener("click", () => {
      stopTimer();
      stopIcon();
    })
  
  document.getElementById("strtBtn25").addEventListener("click", () => {
    startCountdown(25,0);
    activateIconCB();
    
    
  })
})

document.addEventListener("DOMContentLoaded", () => {

  function display2() {
    setDigit("minTens5", Math.floor(mins / 10));
    setDigit("minOnes5", mins % 10);
    setDigit("secTens5", Math.floor(secs / 10));
    setDigit("secOnes5", secs % 10);
  }

  function startCountdown2(m, s) {
    clearInterval(timer);
    mins = m;
    secs = s;
  
    display2();
  
    timer = setInterval (() => {
      if (secs === 0 && mins === 0) {
        clearInterval(timer);
        const icon = document.getElementById("catBus2");
        icon.src = "Objects/Icon_CatBus/catBus1.png";
        stopIcon2();

        openForm();

      } else {
        if (secs === 0) {
          mins--;
          secs = 59;
        } else {
          secs--;
        }
        display2();
      }
    }, 1000);
  }
  
  
  function stopTimer2() {
    clearInterval(timer);
    mins = 0;
    secs = 0;
    display2();
  }
  
  function resetTimer2() {
    stopTimer2();
    mins = 0;
    secs = 0;
    display2();
  }
  
  function activateIconCB2() {
    const icon = document.getElementById("catBus2");
    icon.src = "Objects/Icon_CatBus/CatBus.gif";
  
  }
  
  function stopIcon2() {
    const icon = document.getElementById("catBus2");
    icon.src = "Objects/Icon_CatBus/catBus1.png";
  }
  
    document.getElementById("back5").addEventListener("click", () => {
      resetTimer2(0,0);
      stopIcon2();
  
    })
  
    document.getElementById("stop5").addEventListener("click", () => {
      stopTimer2();
      stopIcon2();
    })
  
  document.getElementById("strtBtn5").addEventListener("click", () => {
    startCountdown2(5,0);
    activateIconCB2();
  })
})

document.addEventListener("DOMContentLoaded", () => {

  function display3() {
    setDigit("minTensF", Math.floor(mins / 10));
    setDigit("minOnesF", mins % 10);
    setDigit("secTensF", Math.floor(secs / 10));
    setDigit("secOnesF", secs % 10);
  }

  function startCountdown3(m, s) {
    clearInterval(timer);
    mins = m;
    secs = s;
  
    display3();
  
    timer = setInterval (() => {
      if (secs === 0 && mins === 0) {
        clearInterval(timer);
        const icon = document.getElementById("catBus3");
        icon.src = "Objects/Icon_CatBus/catBus1.png";
        stopIcon3();

        openForm();
      } else {
        if (secs === 0) {
          mins--;
          secs = 59;
        } else {
          secs--;
        }
        display3();
      }
    }, 1000);
  }
  
  
  function stopTimer3() {
    clearInterval(timer);
    mins = 0;
    secs = 0;
    display3();
  }
  
  function resetTimer3() {
    stopTimer3();
    mins = 0;
    secs = 0;
    display3();
  }
  
  function activateIconCB3() {
    const icon = document.getElementById("catBus3");
    icon.src = "Objects/Icon_CatBus/CatBus.gif";
  
  }
  
  function stopIcon3() {
    const icon = document.getElementById("catBus3");
    icon.src = "Objects/Icon_CatBus/catBus1.png";
  }
  
    document.getElementById("back15").addEventListener("click", () => {
      resetTimer3(0,0);
      stopIcon3();
  
    })
  
    document.getElementById("stop15").addEventListener("click", () => {
      stopTimer3();
      stopIcon3();
    })
  
  document.getElementById("strtBtn15").addEventListener("click", () => {
    startCountdown3(15,0);
    activateIconCB3();
  })

})

document.addEventListener("DOMContentLoaded", () => {

  function display4() {
    setDigit("minTensT", Math.floor(mins / 10));
    setDigit("minOnesT", mins % 10);
    setDigit("secTensT", Math.floor(secs / 10));
    setDigit("secOnesT", secs % 10);
  }

  function startCountdown4(m, s) {
    clearInterval(timer);
    mins = m;
    secs = s;
  
    display4();
  
    timer = setInterval (() => {
      if (secs === 0 && mins === 0) {
        clearInterval(timer);
        const icon = document.getElementById("catBus4");
        icon.src = "Objects/Icon_CatBus/catBus1.png";
        stopIcon4();

        openForm();
      } else {
        if (secs === 0) {
          mins--;
          secs = 59;
        } else {
          secs--;
        }
        display4();
      }
    }, 1000);
  }
  
  
  function stopTimer4() {
    clearInterval(timer);
    mins = 0;
    secs = 0;
    display4();
  }
  
  function resetTimer4() {
    stopTimer4();
    mins = 0;
    secs = 0;
    display4();
  }
  
  function activateIconCB4() {
    const icon = document.getElementById("catBus4");
    icon.src = "Objects/Icon_CatBus/CatBus.gif";
  
  }
  
  function stopIcon4() {
    const icon = document.getElementById("catBus4");
    icon.src = "Objects/Icon_CatBus/catBus1.png";
  }
  
    document.getElementById("back30").addEventListener("click", () => {
      resetTimer4(0,0);
      stopIcon4();
  
    })
  
    document.getElementById("stop30").addEventListener("click", () => {
      stopTimer4();
      stopIcon4();
    })
  
  document.getElementById("strtBtn30").addEventListener("click", () => {
    startCountdown4(30,0);
    activateIconCB4();
  })
})



