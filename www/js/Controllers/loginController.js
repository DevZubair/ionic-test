
myMod.controller('LoginCtrl', function($scope, $http,$state,$rootScope,$ionicLoading,$ionicPopup) {
 
 
 localStorage.clear();        /*Used this line to clear the localStorage all data from browser
                                so that user will login with it's own id and password again  */
 
 
 
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
 
 
 /* ++++++++++++++++++++++ Zubair Comment 10th March, 2015 +++++++++++++++++++++++++++++++
 
 
 Coding above is the given sample of code on ionic docs, I have just copied it here. $ionicLoading is a 
 directive and I have called show and hide functions on our need. When function starts on any button click, I
 have called show() and when function returns something, I have called hide().
 
 Note:
 
 Template I have used for ionic loading is default, I have downloaded a pretty nice loader from google and add the
 css in loader.css file in css folder. Than I have called it in a div using template of ionic loading
 
 
 */
 
$scope.loginData={
    
  username:'',
  password:''
    
    
    
};

$scope.doLogin=function(){
  
  show();
  
    
  $http.post('https://ionic-fromgithub-danh1975.c9.io/api/loginMember',{
      
      userName:$scope.loginData.username
      
  }).success(function(data){
      
      if(data=="")
      {
        hide();
          //alert('This Username is not available.  Please choose another one.');
          
         
              var alertPopup = $ionicPopup.alert({
              title: 'Danh App Alert!',
              template: 'The username is not available, please choose another.'
                  });
                       alertPopup.then(function(res) {
                      // console.log('Thank you');
                 });

          
          
          
      }
      else{
          if(data.Password==$scope.loginData.password)
          {
            
              localStorage.setItem('currentUser',$scope.loginData.username);       //$rootScope is more like a global variable
              localStorage.setItem('currentUserId',data._id);  
              console.log('login Success!');
              hide();
              //alert("Welcome Back! Let's Go!");
              
               var alertPopup = $ionicPopup.alert({
              title: 'Danh App Alert!',
              template: "Welcome Back! Let's Go!"
                  });
                       alertPopup.then(function(res) {
                      // console.log('Thank you');
                 });
              
              
              
              /* +++++++++++++++++++++++++++++ Zubair Comment 9th March, 2015 ++++++++++++++++++++++
              
              
              You forgot to put the inverted comma in the end in alert string, that's why error was coming
              
              
              */
              
              $state.go('members.mission');
          }
          else{
            hide();
            //  alert('This Password is not valid.');
            
            
              var alertPopup = $ionicPopup.alert({
              title: 'Danh App Alert!',
              template: "This Password is not valid."
                  });
                       alertPopup.then(function(res) {
                      // console.log('Thank you');
                 });
            
            
          }
      }
      
      
  }).error(function(data){
    
    hide();
      
    //  alert('Username is not valid!');
      
        var alertPopup = $ionicPopup.alert({
              title: 'Danh App Alert!',
              template: "Username is not valid!"
                  });
                       alertPopup.then(function(res) {
                      // console.log('Thank you');
                 });
            
      
      
  });
    
    
    
};
  
  
  /* +++++++++++++++++++++++++ Zubair Comments 10th March, 2015 +++++++++++++++++++++++++++++++
  
  All the javascript alerts are now replaced with ionic own alert popups. Please make sure that before calling
  any directive of ionic, we have to inject it in the controller first. Please see parameter bracket of controller.
  
  
  */
  
  
  
  
  
  
  
});

