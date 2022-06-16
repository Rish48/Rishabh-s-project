function validateform(){
    

    var fn = form1.name.value;
    
    var ln = form1.lname.value;
    var pass = form1.pass.value;



if(fn == "Rishabh"){
    alert('Your first name is correct (Rishabh)');
}
else if(fn!="Rishabh"){
    alert('Your first name is incorrect.');
}
else if(ln == "Raut"){
    alert('Your last name is correct');
}
else if(ln!="Raut"){
    alert('Your last name is incorrect');
}
else if(pass == "RishabhRaut"){
    alert('Your password is correct');
}
else if(pass!="RishabhRaut"){
    alert('Your password is incorrect');
}
}
