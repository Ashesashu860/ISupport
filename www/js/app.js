// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('app', {
		abstract: true,
		template: '<ion-nav-view></ion-nav-view>',
		controller: 'AppCtrl'
	})

	.state('app.menu', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html'

	})

	.state('app.menu.home', {
		url: '/home',
		templateUrl: 'templates/home.html'

	})

	.state('app.menu.aboutISF', {
		url: '/aboutISF',
		templateUrl: 'templates/about-isf.html'

	})

	.state('app.menu.aboutAutism', {
		url: '/aboutAutism',
		templateUrl: 'templates/about-autism.html'

	})

	.state('app.menu.connect', {
		url: '/connect',
		templateUrl: 'templates/connect.html'

	})

	.state('app.menu.faq', {
		url: '/faq',
		templateUrl: 'templates/faq.html'

	})

	.state('app.menu.contact', {
		url: '/contact',
		templateUrl: 'templates/contact.html'

	})

	.state('app.menu.gmap', {
		url: '/gmap',
		templateUrl: 'templates/gmap.html'

	})

	.state('app.menu.pics', {
		url: '/pics',
		templateUrl: 'templates/pics.html'

	})

	.state('app.landing', {
		url: '/landing',
		templateUrl: 'templates/landing-page.html'
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('landing');
});
