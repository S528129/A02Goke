
function addition(){
a=Number(document.my_cal.first.value);
b=Number(document.my_cal.second.value);
c=Number(document.my_cal.third.value);
d=a+b+c;
document.my_cal.total.value=d;
}

function subtraction(){
a=Number(document.my_cal.first.value);
b=Number(document.my_cal.second.value);
c=Number(document.my_cal.third.value);
d=a-b-c;
document.my_cal.total.value=d;
}

function division(){
a=Number(document.my_cal.first.value);
b=Number(document.my_cal.second.value);
c=Number(document.my_cal.third.value);
d=(a/b)/c;
document.my_cal.total.value=d;
}

$(document).ready(function(){
    $("button").click(function(){
        $("body").css("background-color", "yellow");
    });
});
