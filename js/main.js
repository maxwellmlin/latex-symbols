document.querySelectorAll('input').forEach(item => {
  item.addEventListener('input', latexToUnicode)
})

function latexToUnicode(e) {
  chrome.storage.sync.get("enabled", ({
    enabled
  }) => {
    if (!enabled) return
    $.each(latex_unicode, function(key, value) {
      e.target.value = e.target.value.replace(key, value);
    });
  });
}