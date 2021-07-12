// Enable extension on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    enabled: true
  })
})
