function takevalue(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    document.getElementById('namehere').innerHTML = `your name is :
    //  ${name}`
    document.getElementById('phonehere').innerHTML = `your phone is :
    //  ${phone}`
    document.getElementById('passwordhere').innerHTML = `your password is :
    //  ${password}`


}

