// let t = prompt('number', 0);
// if (t > 0) {
//     alert(1);
// } else if (t < 0) {
//     alert(-1);
// } else
//     alert(0);
//////////////////////////////////////////////////////////////////////////////////
// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// message =
//   (login == '1') ? 'hi' :
//     (login == '2') ? 'hello' :
//       (login == '3') ? 'no log' :
//         'sosi'
////////////////////////////////////////////////////////////////////////////////////

//Check user on login

let password = 993;
let admin = prompt('Who are you?');
if (admin == 'ghoul' || admin == 'Ghoul' || admin == 'dead inside') {
  foreach: {
    for (let count_tries = 3; count_tries > 0; count_tries--) {
      let user_password = prompt('Password:');
      if (user_password == password) {
        alert('Welcome back, daddy');
        break foreach;
      } else if (user_password === null) {
        alert('ny i idi naxyi');
        window.close();
        break foreach;
      } else if (count_tries == 1) {
        alert('Try again next time, shlyha')
        window.close();
        break foreach;
      }
      else {
        alert('Wrong password, tries left - ' + (count_tries - 1));
      }
    }
  }
} else if (admin === null || admin == '') {
  alert('idi naxyi');
  window.close();
} else {
  alert('I don\'t know you, fuck off');
  window.close();
}
