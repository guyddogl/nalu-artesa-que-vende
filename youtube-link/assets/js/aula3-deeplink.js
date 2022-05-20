var desktopFallback = "https://www.youtube.com/watch?v=pWA0lJv9DGE",
mobileFallback = "https://www.youtube.com/watch?v=pWA0lJv9DGE",
app = "vnd.youtube://pWA0lJv9DGE";
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