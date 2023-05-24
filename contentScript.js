// // (async () => {
// //   const response = await chrome.runtime.sendMessage({ greeting: "hello" });
// //   // do something with response here, not outside the function
// //   console.log(response);
// // })();
// const bgcolor = {
//   backgroundColor: "green",
// };
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.greeting == "hello") {
    console.log(request.greeting);
    sendResponse({ farewell: "goodbye" });
  }
  //const pTag = document.querySelectorAll(request.tagName);
  const pTag = document.querySelectorAll(request.tagName);
  if (request.action === "click") {
    for (let i = 0; i < pTag.length; i++) {
      //pTag[i].classList.add("bgcolor");
      pTag[i].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
      pTag[i].style.backgroundColor = "#FFFF00";
    }
  } else if (request.action === "mouseleave") {
    for (let i = 0; i < pTag.length; i++) {
      // pTag[i].style.backgroundColor = "transparent";
    }
  }
  // if (pTag.length > 0) {
  //   for (let i = 0; i < pTag.length; i++) {
  //     pTag[i].style.backgroundColor = "red";
  //   }
  // }
});
