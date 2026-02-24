const splash = document.getElementById("splash");
const menu = document.getElementById("menu");
const video = document.getElementById("menuVideo");

/* 1. Лого 2 секунды */
setTimeout(() => {
  splash.style.opacity = "0";

  setTimeout(() => {
    splash.style.display = "none";
    menu.classList.remove("hidden");

    /* 2. Пытаемся запустить видео */
    video.muted = false;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // если браузер блокирует звук — запускаем без звука
        video.muted = true;
        video.play();
      });
    }

  }, 1000);

}, 2000);
