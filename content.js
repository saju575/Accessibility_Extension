chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  //console.log("Message:", request);
  alert(request.message);
  sendResponse({ message: "Hi there!" });
});
