<!DOCTYPE html>
<html lang="en">
<head>
  <title>Cross Word Puzzle  </title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
  
  <script src="data.js"></script>
  <script src="competition.js"></script>
</head>
<style>
        body{
            font-family:'Lato', sans-serif;
                
        }
        .table tbody tr td {
            width: 3em;
            height:3em;
            border: 1px solid #6d6c8e;
            padding: 0;
            margin: 0;
            position: relative;
        }
        .table tbody tr td input{
            width: 100%;
            height: 100%;
            padding: 0em;
            border: none;
            text-align: center;
            font-size:24px;
            font-weight:bold;
            font-family: 'TundraWeb',serif;

        }
        td span {
   
            color: #000;
            font-size: 0.8em;
            position: absolute;
            top: -1px;
            left: 1px;
            padding:0.1em;
            font-weight:bold;
        }
        .table tr {
            width: 100%;
        }
        .hasElement{
            background-color:#f4f4f4;

        }
        #puzzle-row{

            margin-top:20px;
        }
        #puzzle-row-header{
            padding:20px;
            background-color:#f4f4f4;

        }
        .btn{
            width:40%;
            color:#fff;
            font-weight:bold;
        }
        .clues > h4 {

            padding-bottom: 10px;
            margin-bottom: 10px;
        }
       h5 {
            border-bottom: 2px solid #E07481;
            padding-bottom: 5px;
            margin-bottom: 5px;
        }
        .qpos_num{
            color: #fff;
            background: #E07481;
            padding:4px 5px;
            font-size: 12px;
            margin-right:10px;
        }
        .single_clues{
            margin-bottom: 5px;
        }
        .active{
            background-color:#f4f4f4;
        }
        #costumModal28{
            height:600px;
        }
        .modal-content{
            width:500px;
        }
        .modal-header{
            text-align: center;
            color: white;
            background: #FF7733;
            border:0px none;
            border-radius:2px;
            
        }
        .modal-body{
            text-align: center;
        }

 

</style>
<body>
<div class="container">
    <div class="row" id="puzzle-row-header">
        <div class="col-md-4">
        <h4>CROSS WORD PUZZLE #1</h4>
        </div>
        <div class="col-md-6 col-md-offset-1" >
        <button type="button" class="btn btn-danger"  id="submitPzl" title="Submit the Puzzle  " style="float:right;" data-toggle="tooltip" data-placement="bottom" >Submit</button>        
        </div>
    </div>

    <div class="row" id="puzzle-row">

            <div class="col-md-4 ">
            <div class="clues ">
              
                <div class="across_items">
                <h5>Across</h5>

                </div>
                <div class="down_items">
                <h5>Down</h5>
                
                </div>
            </div>
            </div>
            <div class="col-md-6 col-md-offset-1" id="puzzle_table" style= "margin-top:20px;">
            </div> 
    </div>
    <a style="display:none" href="#costumModal28" id="success_modal" role="button" class="btn btn-default" data-toggle="modal">
            tada
        </a>
        <div id="costumModal28" class="modal" data-easein="tada"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color:#fff;">
                            ×
                        </button>
                        <h4 class="modal-title">
                         CORRECT ANSWER!!
                        </h4>
                    </div>
                    <div class="modal-body">
                        <img height="400" width="465" src="img/trophy.gif"/>
                    </div>
    
                </div>
            </div>
        </div>
</div>
</body>
</html>
<!-- - Falil muhammed -falilmuhammed@gmail.com-->