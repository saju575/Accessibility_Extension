// const pTag = document.getElementById("link");
const submitBtn = document.getElementById("submitBtn");
const spanClick = document.getElementById("span");
let selectedStanderd;
const radioEle = document.getElementsByName("standerd");
for (ele of radioEle) {
  if (ele.checked) {
    selectedStanderd = ele.value;
  }
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const urlName = tabs[0].url;
  // const testAccessibility = async () => {
  //   const response = await fetch(
  //     `http://localhost:5000/api/v1/test/?url=${urlName}&standerd=${selectedStanderd}`
  //   );
  //   if (response.status !== 200) {
  //     //somthing
  //   } else {
  //     const data = await response.json();
  //     // console.log(data)
  //     if (data.error.length > 0) {
  //       data.error.forEach((issue) => {
  //         addIssuesToDOM(issue);
  //       });
  //     }
  //   }
  // };
  // submitBtn.onclick = testAccessibility;

  // spanClick.addEventListener("click", () => {
  //   chrome.tabs.sendMessage(tabs[0].id, { tagName: "p", action: "mouseleave" });
  // });
  // chrome.tabs.sendMessage(
  //   tabs[0].id,
  //   { message: "Hello" },
  //   function (response) {
  //     console.log("Response:", response);
  //   }
  // );
});

// console.log("something");
const issuesContainer = document.querySelector("#issues");
// const addIssuesToDOM = (issue) => {
//   const issueDiv = document.createElement("div");
//   issueDiv.classList.add("card", "mb-5");
//   issueDiv.innerHTML = `
//     <div class="card-body">
//             <h4>${issue.message}</h4>
//             <p class="bg-light p-3 my-3">
//               ${escapeHTML(issue.context)}
//             </p>
//             <p id="selector" class="cursor-pointer">${issue.selector}</p>
//             <p class="bg-secondary text-light p-2">
//               CODE: ${issue.code}
//             </p>
//           </div>
//     `;
//   issuesContainer.appendChild(issueDiv);
// };

// Escape HTML
function escapeHTML(html) {
  return html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
