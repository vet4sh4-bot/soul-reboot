let currentScene = 0;

const sceneContainer = document.getElementById("scene");
const textElement = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");

function loadScene() {
  const scene = chapter1[currentScene];

  // очищаем
  sceneContainer.innerHTML = "";
  sceneContainer.style.backgroundImage = "";
  textElement.innerText = "";

  if (scene.type === "background") {

    sceneContainer.style.backgroundImage = `url("${scene.src}")`;
    sceneContainer.style.backgroundSize = "cover";
    sceneContainer.style.backgroundPosition = "center";
    sceneContainer.style.backgroundRepeat = "no-repeat";

    nextBtn.style.display = "inline-block";
  }

  if (scene.type === "text") {
    textElement.innerText = scene.text;
    nextBtn.style.display = "inline-block";
  }
}

nextBtn.addEventListener("click", () => {
  currentScene++;

  if (currentScene < chapter1.length) {
    loadScene();
  } else {
    textElement.innerText = "Глава окончена";
    nextBtn.style.display = "none";
  }
});

loadScene();
