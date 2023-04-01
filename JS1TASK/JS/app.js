function Top(){
    var a = Number(document.getElementById('inpone').value)
    var b = Number(document.getElementById('inptwo').value)

    var sum = a + b
    document.getElementById('Cavab').innerHTML = sum
}

function Cix(){
    var a = Number(document.getElementById('inpone').value);
    var b = Number(document.getElementById('inptwo').value);

    var cix = a-b;
    document.getElementById('Cavab').innerHTML = cix;
}

function Vur(){
    var a = Number(document.getElementById('inpone').value)
    var b = Number(document.getElementById('inptwo').value)

    var vur = a * b
    document.getElementById('Cavab').innerHTML = vur
}

function Bol(){
    var a = Number(document.getElementById('inpone').value)
    var b = Number(document.getElementById('inptwo').value)

    var bol = a / b
    document.getElementById('Cavab').innerHTML = bol
}



var date = new Date()
var hours = date.getHours

if (hours => 6 && hours<=12){
    alert('Goodmoning')
    document.body.style.backgroundColor='blue'
}

else if( hours =>13  && hours <=23){
    alert('Good evening')
    document.body.style.backgroundColor='dark'
}

else{
    alert('Good night')
    document.body.style.backgroundColor='yellow'
}