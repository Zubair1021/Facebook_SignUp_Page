
// Get all the elements
var form = document.getElementById('form');
var NameInput = document.getElementById('name');
var SnameInput = document.getElementById('sname');
var EmailInput = document.getElementById('number');
var PasswordInput = document.getElementById('password');

var Date_Select = document.getElementById('date');
var Month_Select = document.getElementById('month');
var year_Select = document.getElementById('year');

var button = document.querySelector('button')


// Add Event Listener to the form Button

button.addEventListener('click' , ()=>{
    
  // This will get all the user entered data in the input fields
    var Name = NameInput.value;
    var Sname = SnameInput.value;
    var Email_No = EmailInput.value;
    var Password = PasswordInput.value;
    var SelectedGender = document.querySelector('input[name="gender"]:checked');
    var selected_Date= Date_Select.options[Date_Select.selectedIndex].value;
    var selected_Month= Month_Select.options[Month_Select.selectedIndex].value;
    var selected_year= year_Select.options[year_Select.selectedIndex].value;



    if(Name.trim()==""||Sname.trim()==""||Email_No===""||Password.trim()==""||!SelectedGender){
        
        alert("Fill the date Completely");
      
    }
    else{
      // This line will get the label of the selected radio input field
      var Gender = document.querySelector(`label[for="${SelectedGender.id}"]`).textContent;
      alert("Successfully Entered Data.\nNow data is being downloaded in PDF format");

      // This will create a PDF file and download it
      var doc = new jsPDF();
      doc.setFontSize(28)
      doc.text("User Credentials",30,30)
      doc.setFontSize(20);
      doc.text('Name: '+ Name,50,60);
      doc.text('Surname: '+ Sname,50,70);
      doc.text('Email: '+ Email_No,50,80);
      doc.text('Your Password: '+ Password,50,90);
      doc.text('DOB: '+ `${selected_Date}/${selected_Month}/${selected_year}`,50,100);
      doc.text('Gender: '+ Gender,50,110);

      doc.save("Data.pdf");
    }


})







