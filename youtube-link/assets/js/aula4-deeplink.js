var desktopFallback = "https://www.youtube.com/watch?v=zULECjyz95I",
mobileFallback = "https://www.youtube.com/watch?v=zULECjyz95I",
app = "vnd.youtube://zULECjyz95I";
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