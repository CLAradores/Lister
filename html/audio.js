const btn = document.getElementById("btn");

btn.onclick = () => {
  // Here you will add path to local file you have
  const audio = new Audio(
    "/audio/@coldplay  - A Sky Full Of Stars (Lyrics) (320 kbps).mp3"
  );

  audio.play();
};
