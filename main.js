 

function addNewCertificationField() {
  // Create a new certification-field element
  const newCertificationField = document.createElement('div');
  newCertificationField.classList.add('certification-field');

  // Create the form-info elements for the new certification-field
  const certificationDetailsDiv = document.createElement('div');
  certificationDetailsDiv.classList.add('form-info');
  const certificationDetailsLabel = document.createElement('label');
  certificationDetailsLabel.setAttribute('for', 'cerDateI');
  certificationDetailsLabel.textContent = 'CERTIFICATION DETAILS:';
  const certificationDetailsInput = document.createElement('textarea');
  certificationDetailsInput.setAttribute('id', 'cerDateI');
  certificationDetailsInput.setAttribute('placeholder', 'Enter certification details');
  certificationDetailsInput.setAttribute('rows', '3');
  certificationDetailsInput.setAttribute('cols', '43');

  // Append the form-info elements to the new certification-field
  certificationDetailsDiv.appendChild(certificationDetailsLabel);
  certificationDetailsDiv.appendChild(certificationDetailsInput);
  newCertificationField.appendChild(certificationDetailsDiv);

  // Get the certification section container
  const certificationSection = document.querySelector('.certification-section');

  // Insert the new certification-field before the addButton container
  certificationSection.insertBefore(newCertificationField, certificationSection.lastElementChild);
}


  
  
  

function addNewExpField() {
  // Create a new experience-field element
  const newExpField = document.createElement('div');
  newExpField.classList.add('experience-field');

  // Create the form-info elements for the new experience-field
  const workDetailsDiv = document.createElement('div');
  workDetailsDiv.classList.add('form-info', 'display');
  const workDetailsLabel = document.createElement('label');
  workDetailsLabel.setAttribute('for', 'exWorkI');
  workDetailsLabel.textContent = 'WORK DETAILS:';
  const workDetailsTextarea = document.createElement('textarea');
  workDetailsTextarea.setAttribute('id', 'exWorkI');
  workDetailsTextarea.setAttribute('rows', '3');
  workDetailsTextarea.setAttribute('cols', '43');
  workDetailsTextarea.setAttribute('placeholder', 'Enter your work details');

  // Append the form-info elements to the new experience-field
  workDetailsDiv.appendChild(workDetailsLabel);
  workDetailsDiv.appendChild(workDetailsTextarea);
  newExpField.appendChild(workDetailsDiv);

  // Get the experience section container
  const experienceSection = document.querySelector('.experience-section');

  // Insert the new experience-field before the addButton container
  experienceSection.insertBefore(newExpField, experienceSection.lastElementChild);
}
 
  

function generateResume(){
  // Toggle display
  document.getElementById('toHide').style.display = 'none';
  document.getElementById('resSection').style.display = 'block';
  //UPDATED NAME
  document.getElementById('nameT').textContent = document.getElementById('nameI').value;

 //UPDATED EMAIL
    document.getElementById('emailT').textContent =   document.getElementById('emailI').value;

 //UPDATED NUMBER
   document.getElementById('numberT').textContent  =  document.getElementById('numberI').value;
 
 //UPDATED EDUCATION
   // 1st part
  document.getElementById('eBoardT1').textContent =  document.getElementById('edBoardI1').value;

   document.getElementById('percT1').textContent  =  document.getElementById('edPercI1').value;

    document.getElementById('eDateT1').textContent = document.getElementById('edDateI1').value;
   
   //2nd part
   document.getElementById('eBoardT2').textContent = document.getElementById('edBoardI2').value;
   document.getElementById('eCourseT2').textContent = document.getElementById('edCourseI2').value;
   document.getElementById('percT2').textContent = document.getElementById('edPercI2').value;
   document.getElementById('eDateT2').textContent = document.getElementById('edDateI2').value;
   //3nd part
   document.getElementById('eBoardT3').textContent = document.getElementById('edUniversityI3').value;
   document.getElementById('eCourseT3').textContent = document.getElementById('edCourseI3').value;
   document.getElementById('percT3').textContent = document.getElementById('edPercI3').value;
   document.getElementById('eDateT3').textContent = document.getElementById('edDateI3').value;


  //UPDATING SKILLS SECTION
   document.getElementById('sLanguagesT').textContent = document.getElementById('skill1').value
   document.getElementById('sTechnologyT').textContent = document.getElementById('skill2').value
   document.getElementById('sSoftSkillT').textContent = document.getElementById('skill3').value

  



 // UPDATE CERTIFICATION SECTION

 document.getElementById('certT1').textContent = document.getElementById('certI1').value;
 document.getElementById('certT2').textContent = document.getElementById('certI2').value;
  




   // UPDATING EXPERIENCE SECTION
 document.getElementById('exWorkT1').textContent = document.getElementById('exWorkI1').value;
 document.getElementById('exWorkT2').textContent = document.getElementById('exWorkI2').value;


 

}
function download(){
  window.print();
}




