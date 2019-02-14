$(document).ready(function(){


    $('[data-toggle="tooltip"]').tooltip();   
    var ans,dir,clue,qpos;
    var across_qposes = [];
    var down_qposes = [];
    var rows = 10;
    var cols = 10;
    var tbl = ['<table class="table" id="puzzle_data_table">'];
    var isPlacedOnce = false;
    var data = [];
    var item_col ;
    var item_row ;
    var item_pos ;
    var puzzle_data = [];
    var isPosExists ;
    var WrngAttmpt = false;
      
    $('#saveBtn').prop('disabled', true);
    $('#nextBtn').prop('disabled', true);
      
    tbl.push("<tbody>");

    for (var i=1; i <= rows; ++i) {
        tbl.push("<tr>");
            for (var x=1; x <= cols; ++x) {
                tbl.push('<td data-coords="' + i + ',' + x + '"  > <input class = "item_input" maxlength="1"  type="text" tabindex="-1" id = "'+ i + ',' + x +'"><span><span></td>');		
            };
        tbl.push("</tr>");
    };

    tbl.push("</tbody>");
    tbl.push("</table>");
 
    $('#puzzle_table').append(tbl.join(''));

    $('#quesPosition').change(function(){
        $('#nextBtn').prop('disabled', true);
    });

    $("#answer").change(function(){
        if( $('#quesPosition').val() =='' ||$('#answer').val() == '' || $('#clue').val() == '' ||$('#dirSelect').val() =='')
        {
            alert("Fill all the fields");
        }
        $('#placeBtn').focus();
    })
    $('#placeBtn').unbind().click(function(){
        $('#saveBtn').prop('disabled', true);
        $('#nextBtn').prop('disabled', true);
     
        if( $('#quesPosition').val() =='' ||$('#answer').val() == '' || $('#clue').val() == '' ||$('#dirSelect').val() =='')
        {
            alert("Fill all the fields");
        }
        else{
            
            qpos = $('#quesPosition').val();
            clue =  $('#clue').val();
            dir = $('#dirSelect').val() ;
            ans = $('#answer').val();

            $("table td").unbind().click(function() { 
                isPosExists = checkElementExists(dir,qpos);
                if(isPosExists){
                    alert("Question with same position has already entered in "+dir +" direction");
                }
                else{
  
                if(isPlacedOnce){
                    $('#saveBtn').focus();
                }
                else{
              

               var parent_td = $(this).attr("data-coords");
               $(this).children("span").attr('style','display:block');
               
               var chars = ans.split('');
               var char_length = ans.length;
               item_pos = parent_td.split(","); 
               item_row = item_pos[0];
               item_col = item_pos[1];
               
                if(dir  == 'across')
                {
                 
                   
                       var length = parseInt(item_col) + parseInt(char_length);
                       console.log(length);
                       if(length > cols+1){

                           alert("Misplaced Answer");
                       }
                       else{
                       
                           var j = item_col;
                           for(i=0;i<char_length;i++){
                            var item_char = chars[i].toUpperCase();
                            var this_id = item_row+","+j;
                               if(i == 0)
                                    {
                                    if((qpos != $(this).children("span").text()) && ($(this).children("span").text() != '')) {
                                        WrngAttmpt = true; 
                                    }
                               }

                               if(($("table td[data-coords='"+this_id+"']").children("input").val() != item_char) &&  ($("table td[data-coords='"+this_id+"']").children("input").val() != '')){
                                WrngAttmpt = true; 
                               }
                               j++;
                           }
                           if(!WrngAttmpt){
                            var j_col  =  item_col;
                            for(i=0;i<char_length;i++){
                                var item_char = chars[i].toUpperCase();
                                var this_id = item_row+","+j_col;
                                if(i == 0){
                                    $(this).children("span").text(qpos);
                                }
                                $("table td[data-coords='"+this_id+"']").children("input").val(item_char);
                                $("table td[data-coords='"+this_id+"']").children("input").addClass("hasElement");
                                j_col++;
                               }
                                $('#placeBtn').prop('disabled', true);            
                                $('#saveBtn').prop('disabled', false);            
                                isPlacedOnce = true;
                                WrngAttmpt = false;
                             
                           }
                           else{
                               alert("Misplaced Answer");
                               WrngAttmpt = false;
                           }
                      
         
                           
                       }
              
                }
                else if(dir == 'down')
                {
          
                    var length = parseInt(item_row) + parseInt(char_length);
                    console.log(length);
                    if(length > rows+1){

                        alert("Misplaced Answer");
                    }
                    else{
                    
                        var k = item_row;
                        for(i=0;i<char_length;i++){
                         var item_char = chars[i].toUpperCase();
                         var this_id = k+","+item_col;
                            if(i == 0)
                                 {
                                 if((qpos != $(this).children("span").text()) && ($(this).children("span").text() != '')) {
                                     WrngAttmpt = true; 
                                 }
                            }

                            if(($("table td[data-coords='"+this_id+"']").children("input").val() != item_char) &&  ($("table td[data-coords='"+this_id+"']").children("input").val() != '')){
                             WrngAttmpt = true; 
                            }
                            k++;
                        }
                        if(!WrngAttmpt){
                         var k_row  =  item_row;
                         for(i=0;i<char_length;i++){
                             var item_char = chars[i].toUpperCase();
                             var this_id =  k_row+","+item_col;
                             if(i == 0){
                                 $(this).children("span").text(qpos);
                             }
                             $("table td[data-coords='"+this_id+"']").children("input").val(item_char);
                             $("table td[data-coords='"+this_id+"']").children("input").addClass("hasElement");
                             k_row++;
                            }
                             $('#placeBtn').prop('disabled', true); 
                             $('#saveBtn').prop('disabled', false);            
                             isPlacedOnce = true;
                             WrngAttmpt = false;
                          
                        }
                        else{
                            alert("Misplaced Answer");
                            WrngAttmpt = false;
                        }
                   
      
                        
                    }
           

                }
            }
            $('#saveBtn').unbind().click(function(){
                
                $('#saveBtn').blur();             
                $('#saveBtn').prop('disabled',true);
                if(isPlacedOnce){
                     if(dir  == 'across' )  {
                        across_qposes.push(parseInt(qpos));
                     }   
                     else if (dir  == 'down'){
                        down_qposes.push(parseInt(qpos));
                     }                                      
                    data = {
                        'position': parseInt(qpos),
                        'answer': ans.toUpperCase(),
                        'clue' : clue,
                        'orientation' : dir,
                        'startr' : item_row,
                        'startc' : item_col
                        }
                    puzzle_data.push(data);
                    // console.log(puzzle_data)
                    // console.log(across_qposes)
                    // console.log(down_qposes)
                   
                    $('#nextBtn').prop('disabled',false);
                    $('#nextBtn').focus();
                    $('#nextBtn').click(function(){
                        
                        $('#quesPosition').val('');
                        $('#clue').val('');
                        $('#dirSelect').val('') ;
                        $('#answer').val('');
                        $('#saveBtn').prop('disabled', true);
                        $('#quesPosition').focus();
                        $('#placeBtn').prop('disabled', false); 
                      
                        isPlacedOnce = false ;
                        data = [];
                   
                        
                    });

                }
            });
             }
            });
        

        }

    });

    $('#submitBtn').on('click',function(){

  
        var data = JSON.stringify(puzzle_data);
        console.log(data);
        if (puzzle_data == "") {
            document.getElementById("result").innerHTML = "";
            return;
        } else { 
            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("result").innerHTML = this.responseText;
                }
            };
            xmlhttp.open("GET","model/add_puzzle.php?q="+data,true);
            xmlhttp.send();
        }
      
        // localStorage.setItem("puzzleData", JSON.stringify(puzzleData)); // for temp  store into localStorage
       // $('#puzzle-wrapper').crossword(puzzleData); 
    });
    function checkElementExists(dir,val) {
        var index;
        var pos = parseInt(val);
        if (dir == 'across')
        {
           index = across_qposes.indexOf(pos);
        }
        else if(dir == 'down')
        {
           index = down_qposes.indexOf(pos);
        }
        
        if(index > -1){
          return true;
        }
        else{
          return false;
        }
      }
});