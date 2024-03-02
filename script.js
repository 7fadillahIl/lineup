document.addEventListener("DOMContentLoaded", function () {
  const messiElement = document.getElementById("substitute-1");

  // Handler untuk Messi
  messiElement.addEventListener("click", function () {
    handlePlayerSubstitution(
      "Messi",
      ".player-starting-6 .starter-position p",
      ".player-starting-6 p"
    );
  });

  // Fungsi umum untuk pemain pengganti
  function handlePlayerSubstitution(
    playerName,
    playerNameSelector,
    positionSelector
  ) {
    const isConfirmed = window.confirm(
      `Apakah Anda ingin memasukkan ${playerName}?`
    );

    if (isConfirmed) {
      // Ganti nama pemain starting dengan pemain pengganti
      const playerNameElement = document.querySelector(playerNameSelector);
      playerNameElement.innerText = playerName;

      // Jika Messi menggantikan Vinicius, ubah posisi menjadi FWD
      if (playerName === "Messi") {
        const positionElement = document.querySelector(positionSelector);
        positionElement.innerText = "FWD";

        // Define specific positions for each starter player
        const playerPositions = {
          2: { top: "65%", left: "85%" },
          3: { top: "75%", left: "35%" },
          4: { top: "75%", left: "65%" },
          5: { top: "65%", left: "17%" },
          6: { top: "20%", left: "17%" },
          7: { top: "45%", left: "30%" },
          8: { top: "45%", left: "50%" },
          9: { top: "45%", left: "70%" },
          10: { top: "20%", left: "85%" },
          11: { top: "10%", left: "50%" },
        };

        // Update positions for all starting players
        for (let i = 1; i <= 11; i++) {
          const playerElement = document.querySelector(`.player-starting-${i}`);
          if (playerElement && playerPositions[i]) {
            // Update CSS properties for top and left
            playerElement.style.top = playerPositions[i].top;
            playerElement.style.left = playerPositions[i].left;
          }
        }

        alert(
          `Pemain ${playerName} telah dimasukkan. Semua posisi pemain starting telah diubah.`
        );
      } else {
        alert(
          `Pemain ${playerName} telah dimasukkan. Posisi sekarang diisi oleh ${playerName}.`
        );
      }
    } else {
      alert(`Pemilihan ${playerName} dibatalkan.`);
    }
  }
});

// Memasukan GK
document.addEventListener("DOMContentLoaded", function () {
  const yashinElement = document.getElementById("substitute-2");

  // Handler untuk Yashin
  yashinElement.addEventListener("click", function () {
    handlePlayerSubstitution("Yashin", ".starting-1 .starter-position");
  });

  // Fungsi umum untuk pemain pengganti
  function handlePlayerSubstitution(playerName, positionSelector) {
    const isConfirmed = window.confirm(
      `Apakah Anda ingin memasukkan ${playerName}?`
    );

    if (isConfirmed) {
      // Ganti posisi pemain starting dengan pemain pengganti
      const position = document.querySelector(positionSelector);
      position.innerHTML = `<p>${playerName}</p>`;

      // Sesuaikan tulisan untuk posisi yang maju
      position.style.marginTop = "5px";

      alert(
        `Pemain ${playerName} telah dimasukkan. Posisi sekarang diisi oleh ${playerName}.`
      );
    } else {
      alert(`Pemilihan ${playerName} dibatalkan.`);
    }
  }
});

// Memasukan MID
document.addEventListener("DOMContentLoaded", function () {
  const kroosElement = document.getElementById("substitute-4");

  // Handler untuk Messi
  kroosElement.addEventListener("click", function () {
    handlePlayerSubstitution(
      "Kroos",
      ".player-starting-10 .starter-position p",
      ".player-starting-10 p"
    );
  });

  // Fungsi umum untuk pemain pengganti
  function handlePlayerSubstitution(
    playerName,
    playerNameSelector,
    positionSelector
  ) {
    const isConfirmed = window.confirm(
      `Apakah Anda ingin memasukkan ${playerName}?`
    );

    if (isConfirmed) {
      // Ganti nama pemain starting dengan pemain pengganti
      const playerNameElement = document.querySelector(playerNameSelector);
      playerNameElement.innerText = playerName;

      // Jika Kroos menggantikan FWD, ubah posisi menjadi MID
      if (playerName === "Kroos") {
        const positionElement = document.querySelector(positionSelector);
        positionElement.innerText = "MID";

        // Define specific positions for each starter player
        const playerPositions = {
          2: { top: "65%", left: "85%" },
          3: { top: "75%", left: "35%" },
          4: { top: "75%", left: "65%" },
          5: { top: "65%", left: "17%" },
          6: { top: "35%", left: "17%" },
          7: { top: "35%", left: "40%" },
          8: { top: "35%", left: "60%" },
          9: { top: "35%", left: "85%" },
          10: { top: "55%", left: "50%" },
          11: { top: "10%", left: "50%" },
        };

        // Update positions for all starting players
        for (let i = 1; i <= 11; i++) {
          const playerElement = document.querySelector(`.player-starting-${i}`);
          if (playerElement && playerPositions[i]) {
            // Update CSS properties for top and left
            playerElement.style.top = playerPositions[i].top;
            playerElement.style.left = playerPositions[i].left;
          }
        }

        alert(
          `Pemain ${playerName} telah dimasukkan. Semua posisi pemain starting telah diubah.`
        );
      } else {
        alert(
          `Pemain ${playerName} telah dimasukkan. Posisi sekarang diisi oleh ${playerName}.`
        );
      }
    } else {
      alert(`Pemilihan ${playerName} dibatalkan.`);
    }
  }
});

//Memasukan DEF
document.addEventListener("DOMContentLoaded", function () {
  const puyolElement = document.getElementById("substitute-3");

  // Handler untuk Puyol
  puyolElement.addEventListener("click", function () {
    handlePlayerSubstitution(
      "Puyol",
      ".player-starting-9 .starter-position p",
      ".player-starting-9 p"
    );
  });

  // Fungsi umum untuk pemain pengganti
  function handlePlayerSubstitution(
    playerName,
    playerNameSelector,
    positionSelector
  ) {
    const isConfirmed = window.confirm(
      `Apakah Anda ingin memasukkan ${playerName}?`
    );

    if (isConfirmed) {
      // Ganti nama pemain starting dengan pemain pengganti
      const playerNameElement = document.querySelector(playerNameSelector);
      playerNameElement.innerText = playerName;

      // Jika Puyol menggantikan MID, ubah posisi menjadi DEF
      if (playerName === "Puyol") {
        const positionElement = document.querySelector(positionSelector);
        positionElement.innerText = "DEF";

        // Define specific positions for each starter player
        const playerPositions = {
          2: { top: "65%", left: "85%" },
          3: { top: "75%", left: "30%" },
          4: { top: "75%", left: "70%" },
          5: { top: "65%", left: "17%" },
          6: { top: "35%", left: "70%" },
          7: { top: "35%", left: "30%" },
          8: { top: "55%", left: "50%" },
          9: { top: "75%", left: "50%" },
          10: { top: "10%", left: "60%" },
          11: { top: "10%", left: "40%" },
        };

        // Update positions for all starting players
        for (let i = 1; i <= 11; i++) {
          const playerElement = document.querySelector(`.player-starting-${i}`);
          if (playerElement && playerPositions[i]) {
            // Update CSS properties for top and left
            playerElement.style.top = playerPositions[i].top;
            playerElement.style.left = playerPositions[i].left;
          }
        }

        alert(
          `Pemain ${playerName} telah dimasukkan. Semua posisi pemain starting telah diubah.`
        );
      } else {
        alert(
          `Pemain ${playerName} telah dimasukkan. Posisi sekarang diisi oleh ${playerName}.`
        );
      }
    } else {
      alert(`Pemilihan ${playerName} dibatalkan.`);
    }
  }
});

// Memasukkan FWD
document.addEventListener("DOMContentLoaded", function () {
  const mbappeElement = document.getElementById("substitute-5");

  mbappeElement.addEventListener("click", function () {
    handlePlayerSubstitution(
      "Mbappe",
      ".player-starting-6 .starter-position p",
      ".player-starting-6 p"
    );
  });

  // Fungsi umum untuk pemain pengganti
  function handlePlayerSubstitution(
    playerName,
    playerNameSelector,
    positionSelector
  ) {
    const isConfirmed = window.confirm(
      `Apakah Anda ingin memasukkan ${playerName}?`
    );

    if (isConfirmed) {
      // Ganti nama pemain starting dengan pemain pengganti
      const playerNameElement = document.querySelector(playerNameSelector);
      playerNameElement.innerText = playerName;

      // Jika Mbappe menggantikan MID, ubah posisi menjadi FWD
      if (playerName === "Mbappe") {
        const positionElement = document.querySelector(positionSelector);
        positionElement.innerText = "FWD";

        // Define specific positions for each starter player
        const playerPositions = {
          2: { top: "65%", left: "85%" },
          3: { top: "75%", left: "35%" },
          4: { top: "75%", left: "65%" },
          5: { top: "65%", left: "17%" },
          6: { top: "20%", left: "17%" },
          7: { top: "45%", left: "30%" },
          8: { top: "45%", left: "50%" },
          9: { top: "45%", left: "70%" },
          10: { top: "20%", left: "85%" },
          11: { top: "10%", left: "50%" },
        };

        // Update positions for all starting players
        for (let i = 1; i <= 11; i++) {
          const playerElement = document.querySelector(`.player-starting-${i}`);
          if (playerElement && playerPositions[i]) {
            // Update CSS properties for top and left
            playerElement.style.top = playerPositions[i].top;
            playerElement.style.left = playerPositions[i].left;
          }
        }

        alert(
          `Pemain ${playerName} telah dimasukkan. Semua posisi pemain starting telah diubah.`
        );
      } else {
        alert(
          `Pemain ${playerName} telah dimasukkan. Posisi sekarang diisi oleh ${playerName}.`
        );
      }
    } else {
      alert(`Pemilihan ${playerName} dibatalkan.`);
    }
  }
});

//Download PNG
document.addEventListener("DOMContentLoaded", function () {
  const screenshotButton = document.getElementById("screenshotButton");

  screenshotButton.addEventListener("click", function () {
    const lineupContainer = document.getElementById("lineupContainer");

    domtoimage
      .toBlob(lineupContainer)
      .then(function (blob) {
        saveAs(blob, "team_formation.png");
      })
      .catch(function (error) {
        console.error("Error generating screenshot:", error);
      });
  });
});

//Download Json
document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.getElementById("downloadButton");

  downloadButton.addEventListener("click", function () {
    // Get the player positions and names
    const playerElements = document.querySelectorAll(
      ".starting-1, .player-starting-2, .player-starting-3, .player-starting-4, .player-starting-5, .player-starting-6, .player-starting-7, .player-starting-8, .player-starting-9, .player-starting-10, .player-starting-11"
    );
    const names = document.querySelectorAll(".starter-position p");

    // Create an array to store player data
    const playerData = [];

    // Iterate over player elements to create player objects
    playerElements.forEach((playerElement, index) => {
      // Extract position from the <p> element within the current playerElement
      const positionElement = playerElement.querySelector(
        ".starting-1 p , .player-starting-2 p , .player-starting-3 p, .player-starting-4 p , .player-starting-5 p , .player-starting-6 p , .player-starting-7 p , .player-starting-8 p , .player-starting-9 p , .player-starting-10 p , .player-starting-11 p "
      );
      const position = positionElement ? positionElement.innerText.trim() : "";

      // Extract name from the names array
      const name = names[index].innerText;

      // Create player object
      const player = {
        position: position,
        name: name,
      };

      // Add player object to the array
      playerData.push(player);
    });

    // Convert the player data to JSON format
    const jsonData = JSON.stringify(playerData, null, 2);

    // Create a Blob containing the JSON data
    const blob = new Blob([jsonData], { type: "application/json" });

    // Trigger file download using FileSaver.js
    saveAs(blob, "formation.json");
  });
});
