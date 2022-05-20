var desktopFallback = "https://www.youtube.com/watch?v=Uu_grv08R18",
mobileFallback = "https://www.youtube.com/watch?v=Uu_grv08R18",
app = "vnd.youtube://Uu_grv08R18";
if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  window.setTimeout(function() {
    window.location = app;
  }, 5000);
  window.setTimeout(function() {
    window.location = mobileFallback;
  }, 5000);
} else {
  window.setTimeout(function() {
    window.location = desktopFallback;
  }, 5000);
}
function killPopup() {
  window.removeEventListener('pagehide', killPopup);
}
window.addEventListener('pagehide', killPopup);