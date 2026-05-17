// Document DOM Loaded Initialization
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Intermittent Activity Interruption Engine
  const activityModal = document.getElementById("activity-modal");
  const btnConfirmAttendance = document.getElementById(
    "btn-confirm-attendance",
  );

  setInterval(() => {
    const isScreen3Active = document
      .getElementById("screen-3")
      .classList.contains("page-active");

    if (!isScreen3Active && Math.random() > 0.4) {
      if (activityModal) {
        activityModal.style.display = "flex";
      }
    }
  }, 12000);

  if (btnConfirmAttendance && activityModal) {
    btnConfirmAttendance.addEventListener("click", () => {
      activityModal.style.display = "none";
    });
  }

  // 2. Session Expiration Clock
  let totalTime = 300; // 5 Minutes
  const timerElement = document.getElementById("timer");

  const countdown = setInterval(() => {
    let mins = Math.floor(totalTime / 60);
    let secs = totalTime % 60;
    timerElement.innerText = `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
    if (totalTime <= 0) {
      clearInterval(countdown);
      alert(
        "PROTOCOL EXPIRED: Wasting Bureau terminal memory space is an infraction. Terminal resetting.",
      );
      window.location.reload();
    }
    totalTime--;
  }, 1000);

  // 3. Cursed Dark Mode Logic Controller
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      alert("Applying official dark mode layout rules.");
      // Turns both background AND text black so everything becomes invisible!
      document.body.style.backgroundColor = "#000000";
      document.body.style.color = "#000000";
    });
  }

  // 4. Screen 1 Password Monitoring
  const passField = document.getElementById("pass-field");
  const passError = document.getElementById("pass-error");
  const btnAuthorize = document.getElementById("btn-authorize");

  if (passField) {
    passField.addEventListener("input", () => {
      if (passField.value.length > 3 && Math.random() > 0.5) {
        passError.style.display = "block";
      } else {
        passError.style.display = "none";
      }
    });
  }

  if (btnAuthorize) {
    btnAuthorize.addEventListener("click", () => {
      if (!passField.value) {
        alert(
          "ERR: Authorization string cannot balance within computational servers empty.",
        );
        return;
      }
      document.getElementById("screen-1").classList.remove("page-active");
      document.getElementById("screen-2").classList.add("page-active");
      document.getElementById("flow-step").innerText =
        "Terminal Protocol Layer: [2 of 3]";
    });
  }

  // 5. Screen 2 Typing Speed Protection
  const usernameField = document.getElementById("username");
  const speedWarning = document.getElementById("speed-warning");
  let lastType = Date.now();

  if (usernameField) {
    usernameField.addEventListener("input", () => {
      const now = Date.now();
      if (now - lastType < 90 && usernameField.value.length > 1) {
        speedWarning.style.display = "block";
        setTimeout(() => {
          usernameField.value = "";
          speedWarning.style.display = "none";
          alert(
            "KEYBOARD CRITICAL EXCEPTION: Data input flow velocity has destabilized server buffers. Input purged.",
          );
        }, 400);
      }
      lastType = now;
    });
  }

  // 6. Slider Control Synchronization
  const phoneSlider = document.getElementById("phoneSlider");
  const phoneDisplay = document.getElementById("phoneDisplay");

  if (phoneSlider && phoneDisplay) {
    phoneSlider.addEventListener("input", (e) => {
      const val = e.target.value.toString();
      phoneDisplay.innerText = `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6, 10)}`;
    });
  }

  // 7. Insult Select Matrix
  function insultUser() {
    const val = document.getElementById("urgency").value;
    if (val === "fast") {
      alert(
        "Bold of you to assume we have infrastructure for immediate deployment. You have been placed on a watch list.",
      );
    }
  }

  document.getElementById("urgency").addEventListener("change", insultUser);

  // 8. Runaway Submit Button Transformation
  const btnSubmit = document.getElementById("btn-submit");

  if (btnSubmit) {
    btnSubmit.addEventListener("mouseover", () => {
      const x = Math.random() * 260 - 130;
      const y = Math.random() * 60 - 30;
      btnSubmit.style.transform = `translate(${x}px, ${y}px)`;

      if (Math.random() > 0.8) {
        const terms = ["TRANSMIT", "HOLD DATA", "PROCESSING", "VOID ARRAYS"];
        btnSubmit.innerText = terms[Math.floor(Math.random() * terms.length)];
      }
    });

    // Event handler execution patterns
    btnSubmit.addEventListener("click", startLoadingSequence);
    btnSubmit.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        startLoadingSequence();
      }
    });
  }

  function startLoadingSequence() {
    document.getElementById("btn-submit-container").style.display = "none";
    document.getElementById("loading-container").style.display = "block";

    let bar = document.getElementById("progress-fill");
    let txt = document.getElementById("loading-text");
    let w = 0;
    let counterLoopCount = 0;

    let interval = setInterval(() => {
      if (w >= 95) {
        counterLoopCount++;
        if (counterLoopCount < 2) {
          w = 12;
          txt.innerText =
            "Error 0x00F892: Reticulating regulatory micro-splines...";
        } else {
          clearInterval(interval);
          clearInterval(countdown); // Halt timeout clock
          goToScreen3();
        }
      } else {
        w += Math.random() * 4;
        bar.style.width = w + "%";
        bar.innerText = Math.floor(w) + "%";
      }
    }, 100);
  }

  function goToScreen3() {
    document.getElementById("screen-2").classList.remove("page-active");
    document.getElementById("screen-3").classList.add("page-active");
    document.getElementById("flow-step").innerText =
      "Terminal Protocol Layer: [3 of 3]";
  }

  // 9. Screen 3 Interactive Action Nodes
  const btnPremiumAd = document.getElementById("btn-premium-ad");
  const btnReceiptDownload = document.getElementById("btn-receipt-download");

  if (btnPremiumAd) {
    btnPremiumAd.addEventListener("click", () => {
      alert(
        "Error: Premium resources currently restricted to structural high-tier elite profiles.",
      );
    });
  }

  if (btnReceiptDownload) {
    btnReceiptDownload.addEventListener("click", () => {
      if (
        confirm(
          "Are you absolutely confident you want to request a receipt generation request?",
        )
      ) {
        if (
          confirm(
            "The requested document contains exactly zero meaningful data sequences. Proceed anyway?",
          )
        ) {
          if (
            confirm(
              "Final Security Check: Do you authorize your structural browser memory to hold a blank file system element?",
            )
          ) {
            alert(
              "SUCCESS: Document transmission request logged. Your blank sheet has been dropped into a fictional queue.",
            );
          }
        }
      }
    });
  }
});