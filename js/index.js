
   
        
        var signupname = document.getElementById('signupName');
        var signupemail = document.getElementById('signupEmail');
        var signuppassword = document.getElementById('signupPassword');
        var existmessage = document.getElementById('exist');
        
        
        var nameregex = /^[A-Za-z].{2,20}$/;
        var emailregex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
        var passwordregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
        var arrsignedpass = JSON.parse(localStorage.getItem('signup')) || [];

        function signUp() {
            
            if (signupname.value.trim() === "" || signupemail.value.trim() === "" || signuppassword.value.trim() === "") {
                existmessage.textContent = 'Please fill out all fields.';
                existmessage.style.color = 'red';
                existmessage.style.boxShadow = "2px 2px 5px rgba(255, 0, 0, 0.7)";
                return;
            }
        
           
            if (!nameregex.test(signupname.value)) {
                existmessage.textContent = 'Name must be between 3-20 characters and contain only letters.';
                existmessage.style.color = 'red';
                existmessage.style.boxShadow = "2px 2px 5px rgba(255, 0, 0, 0.7)";
                return;
            }
        
            if (!emailregex.test(signupemail.value)) {
                existmessage.textContent = 'Please enter a valid email.';
                existmessage.style.color = 'red';
                return;
            }
       
            if (!passwordregex.test(signuppassword.value)) {
                existmessage.textContent = 'Password must be at least 8 characters long, include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.';
                existmessage.style.color = 'red';
                return;
            }
        
            
            var existingUsers = JSON.parse(localStorage.getItem("signup")) || [];
        
            for (let user of existingUsers) {
                if (user.email === signupemail.value) {
                    existmessage.textContent = 'This email is already registered. Please use a different email.';
                    existmessage.style.color = 'red';
                    return;
                }
            }
        
            var user = {
                "name": signupname.value,
                "email": signupemail.value,
                "password": signuppassword.value
            };
        
            existingUsers.push(user);
        
            localStorage.setItem("signup", JSON.stringify(existingUsers));
        
       
            existmessage.textContent = 'Registration successful! You can now Signin.';
            existmessage.style.color = 'green';
            existmessage.style.boxShadow = "none";
        }
        


        var signinemail = document.getElementById('signinEmail');
        var signinpassword = document.getElementById('signinPassword');
        var incorrectMessage = document.getElementById('incorrect');
        
        var checkdata = [];
       
   var newname="";
        function tryenter(event){
          
            checkdata=JSON.parse(localStorage.getItem("signup"));
            var userIndex = -1;
    for (var i = 0; i < checkdata.length; i++) {
       
      
        if (checkdata[i].email === signinemail.value) {  
            userIndex = i;  
            break;  
        }
    }
    
            
            
            if (userIndex !== -1) {
               
                if (checkdata[userIndex].password === signinpassword.value) {
                     
                     newname=checkdata[userIndex].name;
                     localStorage.setItem("username",newname);
                     
                     window.location.href = 'signin.html';
                     
                } else {
                   
                    incorrectMessage.textContent = 'Invalid password. Please try again.';
                    incorrectMessage.style.color = 'red';
                }
            } else {
              
                incorrectMessage.textContent = 'Invalid email. Please try again.';
                incorrectMessage.style.color = 'red';
            }
        }
        var usernames = document.getElementById('usernames');
      if(usernames!=null){
        usernames.textContent='welcome'+'  '+localStorage.getItem('username');
       
      }
     
     function logout(){
            
          console.log('548')
         
            window.location.href='index.html';
            signinemail="";
            signinpassword="";
        }
     
   

       