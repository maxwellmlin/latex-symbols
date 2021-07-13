const toggleElement = document.getElementById("toggle")

chrome.storage.sync.get("enabled", ({ enabled }) => {
  toggleElement.checked = enabled
})

toggleElement.addEventListener("click", () => {
  chrome.storage.sync.set({
    enabled: toggleElement.checked
  })
})

// Open links in new tab
document.addEventListener("DOMContentLoaded", () => {
  const links = document.getElementsByTagName("a")
  Array.from(links).forEach(link => {
    const location = link.href
    link.addEventListener("click", () => {
      chrome.tabs.create({
        active: true,
        url: location
      })
    })
  })
})
