<!DOCTYPE html>
<html lang="en">
<head>
  <title> Cross word Puzzle </title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
  <script src="script.js"></script>
</head>
<style>
        body{
            font-family: 'Open Sans', sans-serif;
                
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
            display:none;
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
        .btn{
            width:40%;
            color:#000;
        }
        #result{
            padding: 20px;
            font-weight :bold;
       

        }
</style>
<body>

<div class="container">
    <div class="row" id="puzzle-row">

            <div class="col-md-4 ">
            <div class="across" id="across">
                
                <div class="form-group">
                    <h4>Question Position:</h4>
                    <input type="number" class="form-control" id="quesPosition" name="quesPosition">
                </div>
                <div class="form-group">
                    <h4>Clue:</h4>
                    <input type="text" class="form-control"  id="clue" name="clue">
                </div>
                <div class="form-group">
                    <h4>Select Direction </h4>
                    <select class="form-control" id="dirSelect">
                    <option value="across">Across</option>
                    <option value="down">Down</option>
                    </select>
                </div>
                <div class="form-group">
                    <h4>Answer:</h4>
                    <input type="text" class="form-control" style="text-transform:uppercase" id="answer" name="answer">
                </div>
           
                <div class="form-group">
                    <br>
                    <button type="button" class="btn btn-warning" id="placeBtn" title="Place answer in the table" data-toggle="tooltip" data-placement="top">Place the answer</button>
                    <button type="button" class="btn btn-primary" id="saveBtn" title="save the answer" style="float:right;" data-toggle="tooltip" data-placement="top">Save</button><br><br>
                    <button type="button" class="btn btn-success" id="nextBtn" title="Enter next Question" data-toggle="tooltip" data-placement="bottom" >Next</button>
                    <button type="button" class="btn btn-danger"  id="submitBtn" title="Submit the Complete Puzzle  " style="float:right;" data-toggle="tooltip" data-placement="bottom" >Submit</button>
                </div>
            </div>  
            </div>
            
            <div class="col-md-6 col-md-offset-1" id="puzzle_table" style= "margin-top:20px;">
            </div> 
    </div>
    <p id="result"></p>
</div>

</body>
</html>
<!-- - Falil muhammed -falilmuhammed@gmail.com-->
