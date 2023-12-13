  var id = localStorage.getItem('id');
        if(id){
         //show upload button if user is login
          document.getElementById('up').style.display="block";   
       document.getElementById('uph').style.display="block";   
       document.getElementById('us').style.display="none";      
    /*   var username = localStorage.getItem('user'+id);
         var myphone= localStorage.getItem('phone'+id);
          var mypass = localStorage.getItem('pass'+id);
        var user = document.getElementById('user');
        var phone = document.getElementById('phone');
        var pass= document.getElementById('pass');
        user.innerHTML=username;
        phone.value = myphone;
        pass.value = mypass;
        */
        }else{
            document.getElementById('up').style.display="none";
  document.getElementById('us').style.display="block";          document.getElementById('pro').innerHTML=`
 <b class='d'>Notice</b>
 <p class="notice">You can only downlaod and listen to music but you can not manage your profile or upload any songs on kazi Music app because you don't have account.<a href="signup.html" style="color: blue;">Create Account Now</a></p>
 `;       
       document.getElementById('uph').style.display="none";  
        }
        
        function logout(){
            window.location.assign('logout.html');
        }
