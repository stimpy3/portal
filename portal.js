/*The current placement of 
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

   // Get the reset button element
   var resetBtn = document.getElementById('resetBtn');

   // Add an event listener to the reset button
   resetBtn.addEventListener('click', function() {
       // Get all radio button elements
       var radioButtons = document.querySelectorAll('input[type="radio"]');
       
       // Loop through each radio button
       radioButtons.forEach(function(radioButton) {
           // Uncheck the radio button
           radioButton.checked = false;
       });

       // Reset the displayed sections
       resetSections();
   });

   // Add event listeners for gender and age radio buttons
   var genderRadios = document.querySelectorAll('input[name="gender"]');
   var ageRadios = document.querySelectorAll('input[name="age"]');

   genderRadios.forEach(function(radio) {
       radio.addEventListener('change', filterSections);
   });

   ageRadios.forEach(function(radio) {
       radio.addEventListener('change', filterSections);
   });

   // Function to reset displayed sections
   function resetSections() {
       var allSections = document.querySelectorAll('.d');
       allSections.forEach(function(section) {
           section.style.display = 'block';
       });
   }

   // Function to filter sections based on gender and age
   function filterSections() {
       resetSections();

       var gender = document.querySelector('input[name="gender"]:checked');
       var age = document.querySelector('input[name="age"]:checked');

       if (gender || age) {
           var selectedGender = gender ? gender.value : null;
           var selectedAge = age ? age.value : null;

           // Define the divs to display based on gender and age
           var divsToShow = [];

           // Show only the appropriate divs based on gender
           if (selectedGender === 'male') {
               divsToShow = ['Education', 'EmploymentJob', 'BusinessEconomy', 'TransportInfrastrucutre'];
           } else if (selectedGender === 'female') {
               divsToShow = ['AgricultureRural', 'HousingUrbanDev', 'SocialWelfare', 'Healthcare'];
           } else if (selectedGender === null) {
               // If no gender selected, show all sections related to age
               if (selectedAge === '12-15') {
                   divsToShow = ['IT', 'BusinessEconomy', 'TransportInfrastrucutre'];
               } else if (selectedAge === '15-18') {
                   divsToShow = ['EmploymentJob', 'LegalJudicial', 'Education'];
               }
           } else if (selectedAge === null) {
               // If no age selected, show all sections related to gender
               if (selectedGender === 'male') {
                   divsToShow = ['Education', 'EmploymentJob', 'BusinessEconomy', 'TransportInfrastrucutre'];
               } else if (selectedGender === 'female') {
                   divsToShow = ['AgricultureRural', 'HousingUrbanDev', 'SocialWelfare', 'Healthcare'];
               }
           } else {
               // If both gender and age selected, show the intersection
               if (selectedAge === '12-15') {
                   divsToShow = ['IT', 'BusinessEconomy', 'TransportInfrastrucutre'];
               } else if (selectedAge === '15-18') {
                   divsToShow = ['EmploymentJob', 'LegalJudicial', 'Education'];
               }
           }

           // Hide divs that are not in the list of divs to show
           hideNonSelectedDivs(divsToShow);
       }
   }

   // Function to hide divs that are not in the list of divs to show
   function hideNonSelectedDivs(divsToShow) {
       var allSections = document.querySelectorAll('.d');
       allSections.forEach(function(section) {
           if (divsToShow.indexOf(section.id) === -1) {
               section.style.display = 'none';
           }
       });
   }
