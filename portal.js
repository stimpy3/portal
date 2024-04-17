/*The current placement of 
search_txt=document.getElementById("searchinput").value;
might cause issues because it tries to access the value 
before the element might exist in the HTML. place
in event listener instead*/
div=document.querySelector(".d");
search_button=document.querySelector("#searchbutton");
body_js=document.querySelector("body");


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
   var cRadios = document.querySelectorAll('input[name="c"]');

   genderRadios.forEach(function(radio) {
       radio.addEventListener('change', filterSections);
   });

   cRadios.forEach(function(radio) {
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

       var c = document.querySelector('input[name="c"]:checked');
       var gender = document.querySelector('input[name="gender"]:checked');
       

       if (gender || c) {
           var selectedGender = gender ? gender.value : null;
           var selectedc = c ? c.value : null;

           
           
           
           
           // Define the divs to display based on gender and age
           var divsToShow = []; 
           var divsToShowmg = ['shivaji12','sbc121','senior12','Economically12','postmatric12','shivajishulkh12','junior12','Vidyaniketan11','openmerit11','service121','vocational121','phymat121','government910','prematric10','maharshi10'];
           var divsToShow10 = ['government910','prematric10','maharshi10'];
           var divsToShow11 = ['phymat121','vocational121','service121','postmatric12','sbc121','Vidyaniketan11','openmerit11'];
           var divsToShow12 = ['phymat121','vocational121','service121','shivaji12','sbc121','senior12','Economically12','postmatric12','shivajishulkh12','junior12'];
           
           // Show only the appropriate divs based on gender
           if (selectedc==null) {

               if(selectedGender === 'male'){
                divsToShow = divsToShowmg;
              }

              else if (selectedGender === 'female') {
                divsToShow = divsToShowmg;
              }

            } 

           else if (selectedGender === null) {
               // If no gender selected, show all sections related to age
                 if (selectedc === '10') {
                     divsToShow =divsToShow10;
                   } 
                 else if (selectedc === '11') {
                     divsToShow =divsToShow11;
                   }

                  else if (selectedc === '12') {
                      divsToShow =divsToShow12;
                   }
               } 

               else {
                // If both gender and age selected, show the intersection
                  if (selectedc === '11' && selectedGender=='male') {
                    divsToShow = divsToShow11.filter(element => divsToShowmg.includes(element));
                    }
                    
                  else if (selectedc === '11' && selectedGender=='female') {
                    divsToShow = divsToShow11.filter(element => divsToShowmg.includes(element));
                   }
 

                   else if (selectedc === '10' && selectedGender=='male') {
                    divsToShow = divsToShow10.filter(element => divsToShowmg.includes(element));
                    }
                    
                  else if (selectedc === '10' && selectedGender=='female') {
                    divsToShow = divsToShow10.filter(element => divsToShowmg.includes(element));
                   }

 
                  else if (selectedc === '12' && selectedGender=='male') {
                    divsToShow = divsToShow12.filter(element => divsToShowmg.includes(element));
                    }
                  else if (selectedc === '12' && selectedGender=='female') {
                    divsToShow = divsToShow12.filter(element => divsToShowmg.includes(element));
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

   

   //site click redirects
   document.getElementById('shivaji12').addEventListener('dblclick', function() {
    window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A3160277BCF2AA7C6';
    });

    document.getElementById('sbc121').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A2406A5294F822FAC';
    });

    document.getElementById('senior12').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A581B0F1DB8A46333#:~:text=Maharashtrian%20Students%20studying%20Out%20of%20Maharashtra%20can%20apply%20for%20this%20scheme.&text=The%20students%20after%2012th%20are,DHE%20sanctioned%20letter.';
    });

    document.getElementById('Economically12').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AB6EDCD4985FE7C3A';
    });

    document.getElementById('postmatric12').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA07C7E01997E4885';
    });

    document.getElementById('shivajishulkh12').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA54D7A32E4C3B30A';
    });

    document.getElementById('junior12').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A581B0F1DB8A46333#:~:text=Maharashtrian%20Students%20studying%20Out%20of%20Maharashtra%20can%20apply%20for%20this%20scheme.&text=The%20students%20after%2012th%20are,DHE%20sanctioned%20letter.';
    });

    document.getElementById('Vidyaniketan11').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AEC62CC61F6C26609';
    });

    document.getElementById('openmerit11').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AAC90D4A992C45BAB';
    });

    document.getElementById('service121').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ADB0E651ACBFBD0AB';
    });

    document.getElementById('vocational121').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A6B32D7E54C4EFF76';
    });

    document.getElementById('phymat121').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A4BBDC0D4DC8452FB';
    });


    document.getElementById('government910').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1DD7FE9893041576';
    });

    document.getElementById('prematric10').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1A036BC29D2FDCCA';
    });
    
    document.getElementById('maharshi10').addEventListener('dblclick', function() {
        window.location.href = 'https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A921670DC48756720';
    });




   

   
