$(function(){

    // Validate Email   
    let isEmailValid ;
    function isFormValid() {
        let email = $('#newsletter').val();
        let regex =  /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if(regex.test(email)){
            $('.newsletter label').hide();
            isEmailValid = true;
        }else if(email === '') {
            $('.newsletter label').show();
            $('.newsletter label').text('please enter your Email');
            isEmailValid = false;
        }else{
            $('.newsletter label').show();
            $('.newsletter label').text('please enter valid Email');
            isEmailValid = false;
        }
        return isEmailValid;               
    }

    $('#newsletter').blur(function(){
        isFormValid(); 
    }); 

    $("form").submit(function(event){
        event.preventDefault();      
        if(isEmailValid){
            $('.newsletter label').hide();
            window.location = '../php/newsletter.php'           
        }else{
            $('.newsletter label').show();
            $('.newsletter label').text('please enter valid Email');  
        }
    });

});