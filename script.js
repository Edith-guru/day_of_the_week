let femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let maleName = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let cc, yy, mm, dd, gender;

document.addEventListener('DOMContentLoaded', () => {
akanDay = (yy, mm, dd, cc, gender) => {
    //   declaring
    let day = document.getElementById("day-input").value;
    let dd = parseInt(day);
    let month = document.getElementById("month-input").value;
    let mm = parseInt(month);
    let year = document.getElementById("year-input").value;
    let yy = parseInt(year.toString().slice(2, 4));
    let cc = Math.ceil(year / 100);
    let dayOfBirth = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    if (gender === "female") {
        return dd && femaleName[dd.getDay()];
    } else {
        return dd && maleName[dd.getDay()];
    }
}
validation = () => {
        monthValidate = () => {
        if (month < 1 || month > 12) {
          return false;
        } else {
          return true;
        }
      }
        dayValidator = () => {
        if (month === 2 && Number(year) % 4 === 0) {
          if (day > 28 || day < 1) {
            return false;
          } else if (month === 2 && day > 29) {
            return false;
          } else if (month === 2 && day < 1) {
            return false;
          } else {
            return true;
          }
        } else if (day < 1 || day > 31){
          return false;
        } else {
          return true;
        }
      }
}
});

//front-end

$(document).ready(() => {
    $("form#form").submit(event => {
        event.preventDefault();
        const gender = $("input:radio[name=gender]:checked").val();
        const name = document.querySelector('#name').value;
        let result = akanDay(yy, mm, dd, cc, gender, name);
        alert( `Hi ${name}.Your akan name is: ${result} `);

        //refresh page
        document.getElementById("form").reset();
    });
});


// let CC, YY, MM, DD, d, dayValue;
// document.addEventListener('DOMContentLoaded', () => {

//     const male = {
//         Sunday: Kwasi, 
//         Monday: Kwadwo, 
//         Tuesday: Kwabena, 
//         Wednesday: Kwaku, 
//         Thursday:  Yaw, 
//         Friday: Kofi, 
//         Saturday: Kwame
//     };
    
//     const female = {
//         Sunday: Akosua,
//         Monday: Adwoa,
//         Tuesday: Abenaa,
//         Wednesday: Akua,
//         Thursday:  Yaa,
//         Friday: Afua,
//         Saturday: Ama,
//     };

//     //Validation
//     //month 
//     monthValidate = () => {
//         if (monthOfBirth < 1 || monthOfBirth > 12) {
//           return false;
//         } else {
//           return true;
//         }
//       }

//     if (nMonth >= 3) {
//         nMonth -= 2;
//       } else {
//         nMonth += 10;
//       }
    
//       if ((nMonth == 11) || (nMonth == 12)) nYear--;
    
//       let nCentury = parseInt(nYear / 100);
//       let nYear100 = nYear % 100;
//      // day of week number
//       let h = 0; 
//       h += parseInt(nDay);
//       h += parseInt((13 / 5) * nMonth - 0.2);
//       h += parseInt(nYear100);
//       h += parseInt(nYear100 / 4);
//       h += parseInt(nCentury / 4);
//       h -= parseInt(2 * nCentury);
//       h %= 7;
    
//       if (nYear >= 1700 && nYear <= 1751) {
//         h -= 3;
//       } else {
//         if (nYear <= 1699) h -= 4;
//       }
    
//       if (h < 0) h += 7;
     


// });


    // (() => {
    //       var date = new Date($('#date-input').val().slice("-"));
    //       day = date.getDate();
    //       month = date.getMonth() + 1;
    //       year = date.getFullYear();
    //     ;
    //   })(); 
