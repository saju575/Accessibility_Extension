const issuesContainer = document.querySelector("#issues");
const submitBtn = document.getElementById("submitBtn");

//stander select
let selectedStanderd;
// const radioEle = document.getElementsByName("standerd");
// for (ele of radioEle) {
//   if (ele.checked) {
//     selectedStanderd = ele.value;
//   }
// }

const radioButtons = document.querySelectorAll('input[name="standerd"]');

radioButtons.forEach((button) => {
  button.addEventListener("change", (event) => {
    selectedStanderd = event.target.value;
  });
});

function getCurrentTab(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs.length ? tabs : null;
    callback(tab);
  });
}

getCurrentTab(function (tabs) {
  const urlName = tabs[0].url;
  const testAccessibility = async () => {
    issuesContainer.innerHTML = "";
    const response = await fetch(
      `http://localhost:5000/api/v1/test/?url=${urlName}&standerd=${selectedStanderd}`
    );
    if (response.status !== 200) {
      //somthing
    } else {
      const data = await response.json();

      // console.log(data)
      if (data.error.length > 0) {
        data.error.forEach((issue) => {
          const issueDiv = document.createElement("div");
          issueDiv.classList.add("card", "mb-5");
          issueDiv.innerHTML = `
            <div class="card-body">
            <h4>${issue.message}</h4>
            <p class="bg-light p-3 my-3">
              ${escapeHTML(issue.context)}
            </p>
            <p id="selector" class="cursor-pointer">${issue.selector}</p>
            <p class="bg-secondary text-light p-2">
              CODE: ${issue.code}
            </p>
          </div>
    `;
          issuesContainer.appendChild(issueDiv);
          const selector = issueDiv.querySelector("#selector");
          selector.onclick = () => {
            chrome.tabs.sendMessage(tabs[0].id, {
              tagName: issue.selector,
              action: "click",
            });
          };
        });
      }
    }
  };
  submitBtn.onclick = testAccessibility;
});

function escapeHTML(html) {
  return html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
