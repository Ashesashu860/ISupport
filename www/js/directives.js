angular.module('starter.directives', []).directive('readMore', function($ionicModal) {
	return {
		restrict: 'A',
		link: function($scope, $ele, $attrs) {
			$ele.on('click', function() {
				var tmplStr = '<ion-content class="read-more-modal"><div class="close-icon" ng-click="closeReadMoreModal()"><i class="ion-android-arrow-back"></i><span>Back</span></div>' + this.closest('.card').innerHTML + '</ion-content>';

				var readMoreModal = $ionicModal.fromTemplate(tmplStr, {
					scope: $scope
				});

				$scope.closeReadMoreModal = function(){
					readMoreModal.hide();
					readMoreModal.remove();
				}
				readMoreModal.show();
			})
		}
	};
})
