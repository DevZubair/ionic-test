myMod.controller('StepsCtrl', function($scope) {
    
    $scope.stepsList= [
    "Welcome!", 
    "Start",
    "Empower",
    "Worker Bee", 
    "Step 5",
    "Step 6",
    "Step 7", 
    "Step 8",
    "Step 9",
    "Step 10", 
    "Step 11",
    "Step 12",
    "Step 13", 
    "Step 14",
    "Step 15",
    "Step 16", 
    "Step 17",
    "Step 18",
    "Step 19", 
    "Step 20"
    ];
    
    
});

/* added to test scrolling on Stepping Stones page */
/*var stepsList= [
    "Step 1", 
    "Step 2",
    "Step 3",
    "Step 4", 
    "Step 5",
    "Step 6",
    "Step 7", 
    "Step 8",
    "Step 9",
    "Step 10", 
    "Step 11",
    "Step 12",
    "Step 13", 
    "Step 14",
    "Step 15",
    "Step 16", 
    "Step 17",
    "Step 18",
    "Step 19", 
    "Step 20"
    ];*/
    
    
    //First thing is that you haven't made this variable array inside the controller so html was not recognizing it during ng-repeat
