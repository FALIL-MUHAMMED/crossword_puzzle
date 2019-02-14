$(document).ready(function() {
    var puzzle_comp_data = [];
    var rows = 10;
    var cols = 10;
    var tbl = ['<table class="table" id="puzzle_data_table">'];
    var data_cords ; 
    var qpos;
    var item_col ;
    var item_row ;
    var item_clue ;
    var item_answer;
    var HtmlAcross ='' ;
    var HtmlDown ='';
    var result =[];
    var result_sbmtd = [];
    var incorrect = false;



    $.ajax({

        url  :"model/get_puzzle.php", //php page URL where we post this data to view from database
        type :'POST',
        success: function(data){
            puzzle_comp_data = JSON.parse(data);
            build_table(puzzle_comp_data);
      
        }
    });

    function build_table(data){
        tbl.push("<tbody>");
        for (var i=1; i <= rows; ++i) {
            tbl.push("<tr>");
                for (var x=1; x <= cols; ++x) {
                    var index = i+","+x;
                    tbl.push('<td data-coords="' + i + ',' + x + '"  > <input class = "item_input" maxlength="1" style="text-transform:uppercase" type="text" tabindex="-1" id = "'+ i + ',' + x +'"><span></span></td>');	
                    result[index] = '';
                }
            tbl.push("</tr>");
        };
    
        tbl.push("</tbody>");
        tbl.push("</table>");
     
        $('#puzzle_table').append(tbl.join(''));

        for(k in data){
            data_cords = data[k].startr+","+data[k].startc;
            qpos = data[k].position;
            dir = data[k].orientation;
            item_clue = data[k].clue;
            item_col =  data[k].startc;
            item_row =  data[k].startr;
            item_answer = data[k].answer;
            var chars = item_answer.split('');
            var char_length = item_answer.length;

            $("table td[data-coords='"+data_cords+"']").children("span").text(qpos);
           
            if(dir == 'across'){
                var k_col = item_col;
                for(i=0;i<char_length;i++){
                var item_char = chars[i];
                var this_id =  item_row+","+k_col;
                $("table td[data-coords='"+this_id+"']").children("input").addClass("hasElement");
                result[this_id] = item_char;
                k_col++;
                }

                 HtmlAcross = HtmlAcross +'<div target_cell = "'+data_cords+'" class="single_clues"><span class="qpos_num">'+qpos+'</span><span class="clue_text">'+item_clue+'</span></div>'
           
            }
            else if(dir == 'down'){
                var k_row = item_row;
                for(j=0;j<char_length;j++){
                var item_char = chars[j];
                var this_id =  k_row+","+item_col;
                $("table td[data-coords='"+this_id+"']").children("input").addClass("hasElement");
                result[this_id] = item_char;
                k_row++;
               }
               HtmlDown = HtmlDown +'<div target_cell = "'+data_cords+'" class="single_clues"><span class="qpos_num">'+qpos+'</span><span class="clue_text">'+item_clue+'</span></div>'
            }
        }
        $("table td").children("input").not(".hasElement").attr('readonly', true);
        $(".across_items").append(HtmlAcross);
        $(".down_items").append(HtmlDown);

        $(".single_clues").click(function(){
            $(this).toggleClass("active");
            var data_cords = $(this).attr("target_cell");
            set_focus(data_cords);
            
        });

        $('#submitPzl').click(function(){
            console.log(1)
            for (var i=1; i <= rows; ++i) {
                    for (var x=1; x <= cols; ++x) {
                        var index = i+","+x;
                        result_sbmtd[index] = $("table td[data-coords='"+index+"']").children("input").val();
                        $("table td[data-coords='"+index+"']").children("input").css({
                            'color' : 'black',
                            'text-transform' : 'uppercase',
                         });
                    }
                }
               compare_results(result,result_sbmtd);
           });
  
      
           
    }
    function set_focus(data_cords){

        $("table td[data-coords='"+data_cords+"']").children("input").focus();

    }
    function compare_results(original,submitted){
        incorrect = false;
        for (var i=1; i <= rows; ++i) {
            for (var x=1; x <= cols; ++x) {
                var index = i+","+x;
                if(original[index] != submitted[index].toUpperCase()){
                    $("table td[data-coords='"+index+"']").children("input").css({
                        'color' : 'red',
                        'text-transform' : 'uppercase',
                     });
                    incorrect = true;
                }
            }
        }
        if(!incorrect){
            $('#success_modal').trigger('click');
        }
        return;
        $('#submitPzl').attr('disabled', true);
    }



});