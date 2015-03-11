myMod.controller('RegisterCtrl',function($scope,$http,$ionicLoading,$ionicPopup,$state){
  
 
  $scope.firstName='';
  $scope.lastName='';
  $scope.userName='';
  $scope.userPassword='';
  $scope.userEmail='';
  $scope.userAboutme='';
  $scope.userMentor='';
  
  
   var show = function() {
        $ionicLoading.show({
            template: '<div class="spinner">' +
                '<div class="dot1"></div>' +
                '<div class="dot2"></div>' +
                '</div>'
        });
    };
    var hide = function(){
        $ionicLoading.hide();
    };
  
  $scope.addMember=function(){
      
      show();
    
    /* +++++++++++++ Zubair Comment 5th March, 2015
    
     Below all the coding is basically calling the API which we have made in Api.js in our server file. Now we know
     that, that Api needs some data, so we have to send the data exactly in the same manner and sequence as we 
     have mentioned in our Api.js file.
     
     Note:
     firstname e.g is the Api.js parameter you can say, $scope.firstname is the value which user is going to type
     in the textbox on register.html page. I have binded this $scope.firstname with ng-model into the textbox.
     This $scope.firstname could be any name but for our ease I have used it as the same name as Api.js parameter
     name
    
    
    */
  
    $http.post('https://ionic-fromgithub-danh1975.c9.io/api/addMember',{
      
     
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      userName: $scope.userName,
      userPassword: $scope.userPassword,
      userEmail: $scope.userEmail,
      userAboutme: $scope.userAboutme,
      userMentor: $scope.userMentor
      
      
      
    }).success(function(data){
      
      console.log(data);
      hide();
     // alert('Success' + data);    //This will be called if data is successfully sent to Mongo Lab
      
        var alertPopup = $ionicPopup.alert({
              title: 'Danh App Alert!',
              template: 'Success' + data
                  });
                       alertPopup.then(function(res) {
                      $state.go('members.mission');
                 });
            
      
      
      
    }).error(function(data){
      
       console.log(data);
       hide();
       //alert('Error' + data);     //This will be called if Mongo Lab did not get the data correctly
       
       
        var alertPopup = $ionicPopup.alert({
              title: 'Danh App Alert!',
              template: 'Error' + data
                  });
                       alertPopup.then(function(res) {
                      // console.log('Thank you');
                 });
    });
    
  };
  
});