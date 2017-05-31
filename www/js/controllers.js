angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $ionicPlatform, $ionicPopup, $ionicHistory, $ionicScrollDelegate) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	// Form data for the login modal
	$scope.loginData = {};



	/*//handle the hardware bcak button click
	$ionicPlatform.registerBackButtonAction(function (event) {
       if($state.current.name==="app.landing"){

             var myPopup = $ionicPopup.show({
                    title: 'Exit the application',
                    scope: $scope,
                    buttons: [
                      { text: 'Cancel',
                        onTap: function(e) {
                            $state.go("app.menu.home");
                        }
                      },
                      {
                        text: 'Yes',
                        type: 'button-positive',
                        onTap: function(e) {
                            navigator.app.exitApp();
                        }
                      }
                    ]
                  });
        }
        else{
          navigator.app.backHistory();
          //$ionicHistory.goBack();
        }
      }, 100);*/

	$scope.scrollClicked = function(elmNo) {
		var top = 52*elmNo;
    $ionicScrollDelegate.$getByHandle('content-scroll').scrollTop();
  };

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.loginModal = modal;
	});

	// Create the sign up modal that we will use later
	$ionicModal.fromTemplateUrl('templates/sign-up.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.signUpModal = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.loginModal.hide();
	};

	// Open the login modal
	$scope.openSignUp = function() {
		$scope.signUpModal.show();
	};

	$scope.closeSignUp = function() {
		$scope.signUpModal.hide();
	};

	// Open the login modal
	$scope.openLogin = function() {
		$scope.loginModal.show();
	};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
			$scope.closeLogin();
		}, 1000);
	};
/*
	$scope.isItemActive = function(stateName) {
		return $state.current.name.indexOf(stateName) > -1;
	};*/

	$scope.goToLink = function (link) {
	  window.open(link,'_system');
	}
})
