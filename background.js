// // chrome.tabs.onUpdated.addListener((tabId, tab) => {
// //   chrome.tabs.sendMessage(tabId, {
// //     type: "NEW",
// //     urlName: tab.url,
// //   });
// // });

// (async () => {
//   const [tab] = await chrome.tabs.query({
//     active: true,
//     lastFocusedWindow: true,
//   });
//   const response = await chrome.tabs.sendMessage(tab.id, { greeting: "hello" });
//   // do something with response here, not outside the function
//   console.log(response);
// })();
