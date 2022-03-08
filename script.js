document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('form').onsubmit = function() {
      const name = document.querySelector('#name').value;
  }
});
function computation(){
  // arrays declaration
  let maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
  // variables declaration
  let dd=parseInt(document.getElementById('day').value);
  let mm=parseInt(document.getElementById('month').value);
  let fullyear=parseInt(document.getElementById('year').value);
  let gender=document.getElementById('gender').value;

  // slice fullyear
  let year1=fullyear.toString().slice(-2);
  let yy=parseInt(year1);

  let cc=Math.ceil((fullyear)/100)-1;
  // computation
  let dayOfWeek=((((cc / 4) - 2 * cc - 1) + (( 5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7);
  // validation
  const name = document.querySelector('#name').value;
  if(dd > 0 && dd <= 31){
      if(mm > 0 && mm <= 12){
          if(gender == 'male'){
              let i = 0;
                     for(i; i <= 6; i++ ){
                         if(i == Math.floor(dayOfWeek)) {
                          alert(`Hi ${name} your akan name is ${maleNames[i]}`);
                          location.reload();
                         }
                     }                    
          }
            
          else{
              for(i = 0; i <= 6; i++ ){
                  if(i == Math.floor(dayOfWeek)) {
                  alert(`Hi ${name} your akan name is ${femaleNames[i]}`);
                   location.reload();

      
                  }
              }             
          }
      }
      else{
          alert("Invalid Month entered");
      }
  }
  else{
      alert("Invalid Day entered");
  }
}
