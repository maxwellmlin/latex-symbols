// Enable extension on install

let enabled = true

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    enabled
  });
});