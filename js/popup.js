let toggleElement = document.getElementById("toggle");

chrome.storage.sync.get("enabled", ({
  enabled
}) => {
  toggleElement.checked = enabled
});

toggleElement.addEventListener("click", async () => {
  chrome.storage.sync.set({
    enabled: toggleElement.checked
  });
});

// Open links in new tab
document.addEventListener('DOMContentLoaded', function() {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    (function() {
      var ln = links[i];
      var location = ln.href;
      ln.onclick = function() {
        chrome.tabs.create({
          active: true,
          url: location
        });
      };
    })();
  }
});