$(document).ready(function bold(){
        $('#bold').click(function(){
         if($('#whatever').css("font-weight")=="400")
         $('#whatever').css("font-weight","700");
         else
         $('#whatever').css("font-weight","400");
        });
      
      });
         
    
 
$(document).ready(function italic(){
        $('#italic').click(function(){
         if($('#whatever').css("fontStyle")=="normal")
         $('#whatever').css("fontStyle","italic");
         else
         $('#whatever').css("fontStyle","normal");
        });
      
      });             
             
    
      $(document).ready(function(){
        $('#underlined').click(function(){
// console.log($('#whatever').css("text-decoration"));
        if($('#whatever').css("text-decoration")=="none solid rgb(0, 0, 0)")
         $('#whatever').css("text-decoration","underline solid rgb(0, 0, 0)");
         else
         $('#whatever').css("text-decoration","none solid rgb(0, 0, 0)"); 
      
      });             
      });

      $(document).ready(function(){
        $('#color').click(function(){
 console.log($('#whatever').css("color"));
        if($('#whatever').css("color")=="rgb(0, 0, 0)")
        $('#whatever').css("color","red");
         else
        $('#whatever').css("color","rgb(0, 0, 0)");


     
      
      });             
      });
      $(document).ready(function(){
      $('#abcd').on('change',function (){
        console.log($('#whatever').css('font-size'));
        $('#whatever').css('font-size', $('#abcd option:selected').val());
      });
    });
    $(document).ready(function(){
      $('#mySelect').on('change',function (){
        console.log($('#whatever').css('font-family'));
        $('#whatever').css('font-family',$('#mySelect option:selected').val());
      });
    });


