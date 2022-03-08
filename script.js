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
    let day=parseInt(document.getElementById('day').value);
    let month=parseInt(document.getElementById('month').value);
    let fullyear=parseInt(document.getElementById('year').value);
    let gender=document.getElementById('gender').value;

    // slice fullyear
    let year1=fullyear.toString().slice(-2);
    let year=parseInt(year1);

    let century=Math.ceil((fullyear)/100)-1;
    // computation
    let dayOfWeek=((((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7);
    // validation
    const name = document.querySelector('#name').value;
    if(day>0&&day<32){
        if(month>0&&month<13){
            if(gender=='male'){
                let i=0;
                       for(i; i<=6;i++){
                           if(i==Math.floor(dayOfWeek)){
                            alert(`Hi ${name} your akan name is ${maleNames[i]}`);
                            location.reload();
        
                           }
                       }                    
            }
              
            else{
                for(i=0; i<=6;i++){
                    if(i==Math.floor(dayOfWeek)){
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
