import { range, dispatchEvent } from "../utils"

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

// to be executed in content script (jquery.slim.js)
function checkGoogleDrive(input) {
  const backSpace = { value: "Backspace", code: 8 }

  latexEntries.forEach(([key, value]) => {
    if (input.includes(key)) {
      range(key.length).forEach(_ => {
        dispatchEvent(backSpace)
      })
      Array.from(value).forEach(char => {
        dispatchEvent({ value: char, code: char.charCodeAt(0) })
      })
    }
  })
}
