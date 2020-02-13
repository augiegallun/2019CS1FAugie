var goalsound = new Audio("goalsound.mp3");
var gameover = new Audio("thats the game.mp3")
var score = 0;
var goaliescore = 0;

function distance(x1, y1, x2, y2){
    var sideA = Math.abs(x1-x2);
    var sideB = Math.abs(y1-y2);
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB,2));
};
function outcome(blockX, blockY, goalX, goalY){
    var ball = $('#soccerball');
    var ballPosition = ball.position();
    var ballX = ballPosition.left;
    var ballY = ballPosition.top;
    
    var goalie = $('#goalie');
    var goaliePosition = goalie.position();
    var goalieX = goaliePosition.left;
    var goalieY = goaliePosition.top;

    console.log(distance(ballX, ballY, goalieX, goalieY));
    
        if(distance(ballX, ballY, goalieX, goalieY) < 133){
            TweenMax.to('#soccerball',.4,{x:blockX, y:blockY, delay:0.4, ease:Sine.easeOut});
            console.log("block");
            TweenMax.to('#soccerball',1,{x:0, y:0, delay:2, ease:Sine.easeOut});
            TweenMax.to('#goalie',1,{x:0, y:0, delay:2, ease:Sine.easeOut});
            goaliescore++;
            $('#Goaliescore').text(goaliescore);
                if(goaliescore > 2){
                    $('.gameover').fadeIn(5000);
                    $('#youlose').fadeIn(5000);
                    console.log("gameover");
                    $('#Goaliescore').text(0);
                    $('#Playerscore').text(0);
                    $('.gameover').fadeOut(7000);
                    $('#youlose').fadeOut(7000);
                    gameover.play();
                    };

            
        }
        else{
            TweenMax.to('#soccerball',.4,{x:goalX, y:goalY, delay:0.4, ease:Sine.easeOut});
            console.log("goal");
            $('#goalanimation').fadeIn();
            //goalsound.play();
            console.log("sound");
            TweenMax.to('#soccerball',1,{x:0, y:0, delay:5, ease:Sine.easeOut});
            TweenMax.to('#goalie',1,{x:0, y:0, delay:5, ease:Sine.easeOut});
            $('#goalanimation').fadeOut(2000);
            score++;
            $('#Playerscore').text(score);
                if(score > 4){
                    $('.gameover').fadeIn(5000);
                    $('#youwin').fadeIn(5000);
                    console.log("gameover");
                    $('#Playerscore').text(0);
                    $('#Goaliescore').text(0);
                    $('.gameover').fadeOut(5000);
                    $('#youwin').fadeOut(5000);
                    gameover.play();
                    };
        }
};



$('#lowerright').click(
    function(){
        TweenMax.to('#soccerball',.4,{x:220, y:-320, delay:0.4, ease:Sine.easeOut, onComplete:outcome, onCompleteParams:[400, -400, 100, -300]});
    });

$('#upperleft').click(
    function(){
        TweenMax.to('#soccerball',.4,{x:-205, y:-530, delay:0.4, ease:Sine.easeOut, onComplete:outcome, onCompleteParams:[-400, -310, -205, -310]});
    });
    
$('#lowerleft').click(
    function(){
        TweenMax.to('#soccerball',.4,{x:-205, y:-310, delay:0.4, ease:Sine.easeOut, onComplete:outcome, onCompleteParams:[-355, -350, -50, -340]});
    });
    
$('#upperright').click(
    function(){
        TweenMax.to('#soccerball',.4,{x:205, y:-530, delay:0.4, ease:Sine.easeOut, onComplete:outcome, onCompleteParams:[400, -530, 205, -320]});
});



$('.placementofshot').click(
    function(){
        var randN = Math.floor(Math.random() * 100);

        if(randN > 50){
            var xTarget = -235;
            
        }

        else{
            var xTarget = 235;
        }
    
        var randN = Math.floor(Math.random() * 100);
        
        if(randN > 50){
            var yTarget = -100;
        }
        else{
            var yTarget = 10;
        }
            
        TweenMax.to('#goalie',.5,{x:xTarget, y:yTarget , delay:0.1, ease:Sine.easeOut});
    });

