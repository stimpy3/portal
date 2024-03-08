\/*The current placement of 
search_txt=document.getElementById("searchinput").value;
might cause issues because it tries to access the value 
before the element might exist in the HTML. place
in event listener instead*/
div=document.querySelector(".d");
search_button=document.querySelector("#searchbutton");
body_js=document.querySelector("body");
transport=document.querySelector("#TransportInfrastrucutre");
education=document.querySelector("#Education");
job=document.querySelector("#EmploymentJob");
business=document.querySelector("#BusinessEconomy");
healtcare=document.querySelector("#Healthcare");
social=document.querySelector("#SocialWelfare");
legal=document.querySelector("#LegalJudicial");
agriculture=document.querySelector("#AgricultureRural");
environment=document.querySelector("#Environment");
emergency=document.querySelector("#Emergency");
it=document.querySelector("#IT");
foreign=document.querySelector("#ForeignAid");
tax_finance=document.querySelector("#TaxFinance");
house_urban=document.querySelector("#HousingUrbanDev");
consumer=document.querySelector("#ConsumerProtection");

search_button.addEventListener("click", () => {
    const search_txt = document.getElementById("searchinput").value.toLowerCase();
  
    const allDivs = document.querySelectorAll(".d");
    let anyMatchFound = false; // Flag to track if any matches are found
  
    allDivs.forEach((div) => {
      // Check for matching content within the div or its ID
      if (
        div.textContent.toLowerCase().includes(search_txt) ||
        div.id.toLowerCase().includes(search_txt)
      ) {
        div.style.display = "block";
        anyMatchFound = true; // Set flag if a match is found
      } else {
        // Hide only if a search term is entered (optional)
        if (search_txt) {
          div.style.display = "none";
        }
      }
    });
  
    // Display alert if no matches are found (optional)
    if (!anyMatchFound && search_txt) {
      alert("No results found for your search.");
    }
  });
  
