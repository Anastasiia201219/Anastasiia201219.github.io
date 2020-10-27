// function f1(){
//     let max = arguments[0];
//     console.log(arguments.length)
// }
// f1(2,66,11,3)

// --------------

// console.log(document.body)
// document.body.style.

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()

// 1222225370:AAH5sA1G8SdkCJtLJisLSwgFjpfXt8Vif-w
// https://api.telegram.org/bot
// -413582632

let show = document.getElementById('show');
let formSection = document.getElementById('formSection');
let send = document.getElementById('send');


show.onclick = function(){
    formSection.style.display = 'block';
    show.style.display ='none'
}

send.onclick = function(){
    let name = document.getElementById('name').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let message = document.getElementById('message').value;
    // console.log(name);
    // console.log(phoneNumber);
    // console.log(message);

    let postInfo = new XMLHttpRequest();
    postInfo.open('GET', `https://api.telegram.org/bot1222225370:AAH5sA1G8SdkCJtLJisLSwgFjpfXt8Vif-w/sendMessage?text= Name: ${name}%0APhone number:${phoneNumber}%0AMessage:${message}&chat_id=-413582632`, false);
    postInfo.send();
}

