let currentScene = 0;

function loadScene() {
  const scene = chapter1[currentScene];

  if (scene.type === "text") {
    document.getElementById("text").innerText = scene.text;
  }
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentScene++;

  if (currentScene < chapter1.length) {
    loadScene();
  } else {
    document.getElementById("text").innerText = "Глава окончена";
    document.getElementById("nextBtn").style.display = "none";
  }
});

loadScene();
