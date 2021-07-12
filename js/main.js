const latexEntries = Object.entries(latex_unicode)

document.querySelectorAll("input").forEach(item => {
  item.addEventListener("input", latexToUnicode)
})

function latexToUnicode(e) {
  chrome.storage.sync.get("enabled", ({ enabled }) => {
    if (!enabled) return
    latexEntries.forEach(([key, value]) => {
      e.target.value = e.target.value.replace(key, value)
    })
  })
}
