const docsInput = document.querySelector(".docs-texteventtarget-iframe")

export const range = n => [...Array(n).keys()]

export const dispatchEvent = ({ value, code }) => {
  const keyEvent = document.createEvent("Event")
  keyEvent.initEvent("keypress", true, true)
  keyEvent.key = value
  keyEvent.keyCode = code
  docsInput.contentDocument.activeElement.dispatchEvent(keyEvent)
}
