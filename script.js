const audio = document.getElementById("audio");
const container = document.body; // better: koi wrapper div use kar

let currentBtn = null; // track current playing button

const fetchData = async () => {
  try {
    const res = await fetch("https://api.audius.co/v1/tracks/trending?limit=10&offset=0&time=week");
    const { data } = await res.json();

    if (!data?.length) throw new Error("No data");

    data.forEach((elem) => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <img class="poster" src="${elem.artwork?.["480x480"] || "default.jpg"}" />
        <div class="title">${elem.title}</div>
        <button class="playBtn">Play</button>
      `;

      const btn = div.querySelector(".playBtn");

      btn.addEventListener("click", () => {
        // same button click = toggle
        if (currentBtn === btn && !audio.paused) {
          audio.pause();
          btn.innerText = "Play";
          currentBtn = null;
          return;
        }

        // previous button reset
        if (currentBtn) {
          currentBtn.innerText = "Play";
        }

        // new song play
        audio.src = `https://discoveryprovider.audius.co/v1/tracks/${elem.id}/stream`;
        audio.play();

        btn.innerText = "Pause";
        currentBtn = btn;
      });

      container.appendChild(div);
    });
  } catch (err) {
    console.error(err);
    alert("Backend error aya bhai");
  }
};

fetchData();