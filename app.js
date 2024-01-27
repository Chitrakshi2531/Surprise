$(document).ready(function(){
    var i = 0;
    var interval = null;
    var speed = 30;
    var txt1 = "Hi SweetHeart.....!  <<               Now I wan't to say something special to you. <<< So , Please read everything carefully...!                                                                           > When I saw you for the first time < Didn't thought you will become Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                      > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >I Love u Baby.....!                  << Will you be my valentine? << ~Chiku" ;
  
    $('.title').click(function(){
        i = 0;
        typeWriter();
      $('.container').addClass('open');
    });
    
    
    $('.close').click(function(){
        document.getElementById("text1").innerHTML = '';
        clearInterval(interval);
      $('.container').removeClass('open');
    });
  
  function typeWriter() {
    if (i < txt1.length) {        
       if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
      else if(txt1.charAt(i)=='>')
        document.getElementById("text1").innerHTML = ''
      else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    interval =  setTimeout(typeWriter, speed);
    }
  }
  });

  