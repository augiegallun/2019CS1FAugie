$('.placementofshot').click(
    function(){
        var corner = this.id;
        console.log(corner);
       inputCords('.placementofshot');
    }
);

function inputCords(x,y){
     TweenMax.to('#soccerball',.75,{delay:1, ease:Sine.easeOut});
     
}



$('#upperleft').click(
    function(){
        TweenMax.to('#soccerball',.5,{x:-205, y:-530, delay:0.5, ease:Sine.easeOut});
        //TweenMax.to('#soccerball',.8,{x:-205, y:-310, delay:1, ease:Bounce.easeOut});
    });
    
$('#lowerleft').click(
    function(){
        TweenMax.to('#soccerball',.2,{x:-205, y:-310, delay:0.5, ease:Sine.easeOut});
        //TweenMax.to('#soccerball',.4,{x:0, y:-330, delay:0.75, ease:Sine.easeOut});
    });
    
$('#upperright').click(
    function(){
        /*TweenMax.to('#soccerball',.4,{x:205, y:-530, delay:0.4, ease:Sine.easeOut});
        
        if(distance(205,-530,'#goalie',0) < 10){
            TweenMax.to('#soccerball',.4,{x:240, y:-530, delay:0.5, ease:Sine.easeOut});
        }
        else{
            TweenMax.to('#soccerball',.6,{x:205, y:-320, delay:0.8, ease:Bounce.easeOut});
    }

});*/

$('#lowerright').click(
    function(){
        TweenMax.to('#soccerball',.4,{x:220, y:-320, delay:0.5, ease:Sine.easeOut});
        
        if(distance(220,-320,goalieX,goalieY) < 10){
            TweenMax.to('#soccerball',.4,{x:260, y:-290, delay:0.5, ease:Sine.easeOut});
        }
        else{
            TweenMax.to('#soccerball',.3,{x:140, y:-340, delay:0.8, ease:Sine.easeOut});
    }

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

function distance(x1, y1, x2, y2){
    var sideA = Math.abs(x1-x2)
    var sideB = Math.abs(y1-y2);
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB,2));
};

function outcome(){
    var goalie = $('#goalie')
    var goaliePosition = goalie.position();
    var goalieX = goaliePosition.left;
    var goalieY = goaliePosition.top;
};
