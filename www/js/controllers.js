angular.module('starter.controllers', [])
	.controller('DashCtrl', function($scope, Friends) {
		$scope.friends = Friends.all();
	})

	.controller('DetailCtrl', function($scope, Friends, $stateParams) {
		var friendId = $stateParams.friendId;
		$scope.friend = Friends.get(friendId);
	})
;
