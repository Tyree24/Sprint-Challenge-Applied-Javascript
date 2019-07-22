// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//send the GET request
let topicsUrl = "https://lambda-times-backend.herokuapp.com/topics";

// Function used to get tab data
function getTabData(topicsUrl) {
  // Get tab data from url
  axios
    .get(topicsUrl)
    .then(response => {
      // Get topics
      let topicContent = [];
      topicContent = response["data"]["topics"];
      topicContent.unshift("all");
      console.log(topicContent);

      // iterate through the array to create tabs
      for (i in topicContent) {
        CreateTabs(topicContent[i]);
      }
    })
    .catch(error => {
      console.log("Error:", error); //console logs errors
    });
}

// Create function
function CreateTabs(tabTopic) {
  // query select where to append
  let tab = document.querySelector(".topics");

  // create element
  let tabs = document.createElement("div");

  //create class list
  tabs.classList.add("tab");

  //text content
  tabs.innerText = tabTopic;

  //append child
  tab.appendChild(tabs);
}

// gets tab data
getTabData(topicsUrl);
