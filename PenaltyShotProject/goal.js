$('#upperleft').click(
    function(){
        TweenMax.to('#soccerball',.5,{x:-205, y:-530, delay:0.5, ease:Sine.easeOut});
        TweenMax.to('#soccerball',.8,{x:-205, y:-310, delay:1, ease:Bounce.easeOut});
    });
    
$('#lowerleft').click(
    function(){
        TweenMax.to('#soccerball',.2,{x:-205, y:-310, delay:0.5, ease:Sine.easeOut});
        TweenMax.to('#soccerball',.4,{x:0, y:-330, delay:0.75, ease:Sine.easeOut});
    });
    
$('#upperright').click(
    function(){
        TweenMax.to('#soccerball',.4,{x:205, y:-530, delay:0.4, ease:Sine.easeOut});
        
        if(distance(ballX, ballY, goalieX, goalieY) < 10){
            TweenMax.to('#soccerball',.4,{x:240, y:-530, delay:0.5, ease:Sine.easeOut});
        }
        else{
            TweenMax.to('#soccerball',.6,{x:205, y:-320, delay:0.8, ease:Bounce.easeOut});
    }

});

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
    
    if(distance(ballX, ballY, goalieX, goalieY) < 100){
            TweenMax.to('#soccerball',.4,{x:blockX, y:blockY, delay:0.5, ease:Sine.easeOut});
        }
        else{
            TweenMax.to('#soccerball',.3,{x:goalX, y:goalY, delay:0.8, ease:Sine.easeOut});
        }
};

$('#lowerright').click(
    function(){
        TweenMax.to('#soccerball',.4,{x:220, y:-320, delay:0.5, ease:Sine.easeOut, onComplete:outcome, onCompleteParams:[blockX:250,blockY:-400,goalX:230,goalY:-350]});

    });



$('.placementofshot').click(
    function(){
        var randN = Math.floor(Math.random() * 100);

        if(randN > 50){
            var xTarget = -225;
            
        }
        else{
            var xTarget = 225;
        };
        
        if(randN > 50){
            var yTarget = -100;
        }
        else{
            var yTarget = 0;
        };
        
        
        TweenMax.to('#goalie',.5,{x:xTarget, y:yTarget , delay:0.1, ease:Sine.easeOut});
    });

