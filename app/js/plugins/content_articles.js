/*
	content_articles:
		display-style___________
		this content display plugin should display "news cards" for each bit of content
			including the following information:
		* title
		* location
		* author
		* date-time
		* content-snippet
		* thumbnail (3 different sizes, can be specified as parameter, eg: 120x80, 180x120, 240x160)
		* rank (1 to 5 stars)
		* social-sharing-data (fb/gplus/twitter likes/shares/etc)
		
		example:
		* SSW Winner Announced!
		* Thailand
		* Karl Hoffmann
		* July 7, 18:26
		* Winner of SSW Bangkok, Splashpost, has received a gigantic prize ticket to Switzerland where ....
		* <thumbnail image>
		* 2
		* {FB:10, GP:6, TW:19}
 
		functional goal___________
		this plugin should display content cards in a "news-card" fashion, and allow simple
			interaction via clicking on the card itself, which will send the user to
			the full content page to view the entire article/content/guide/tutorial/etc
			
		example-content -> displayed information ==> action-on-interaction:
			news/article/tutorial/guide -> detailed info ==> full-content-page
*/

(function() {

	var appModule = angular.module('TechGrindApp.controllers.content.articles', []);

	appModule.controller('ContentArticlesCtrl', ['$scope', 'steam',
	function($scope, steam) {
		var articles = [{
			title: 'How to Use ng-bind-html-safe',
			day: '20',
			month: 'june',
			tags: 'developement',
			country: 'thailand',
			owner: 'Naveen',
			articlename: 'how-to-use-ng-bind-html-safe',
			tab: 'articles',
			rate: 5,
			fb: 30,
			tw: 5,
			gp: 10,
			excerpt: 'Creates a binding that will innerHTML the result of evaluating the expression into the current element. The innerHTML-ed content will not be sanitized!',
			content: 'Creates a binding that will innerHTML the result of evaluating the expression into the current element. The innerHTML-ed content will not be sanitized! You should use this directive only if ngBindHtml directive is too restrictive.'
		}, {
			title: 'SSW Winner Announced',
			day: '7',
			month: 'july',
			tags: 'developement',
			country: 'singapore',
			owner: 'Naveen',
			articlename: 'ssw-winner-announced',
			tab: 'articles',
			rate: 1,
			fb: 30,
			tw: 5,
			gp: 10,
			excerpt: 'Winner of SSW Bangkok, SplashPost, has received a gigantic prize ticket to Switzerland where he will pitch for $500,000 in funding from the European investor',
			content: 'Winner of SSW Bangkok, SplashPost, has received a gigantic prize ticket to Switzerland where he will pitch for $500,000 in funding from the European investor community and Sandbox Network.'
		}, {
			title: 'Fashion Incubator Looking for Talent',
			day: '9',
			month: 'May',
			tags: 'developement',
			country: 'vietnam',
			owner: 'Naveen',
			articlename: 'fashion-incubator',
			tab: 'articles',
			rate: 3,
			fb: 30,
			tw: 5,
			gp: 10,
			excerpt: 'If you are a talented designer looking for support and infrastructure to build your own fashion brand - a group of Singapore-based women entrepreneurs',
			content: 'If you are a talented designer looking for support and infrastructure to build your own fashion brand - a group of Singapore-based women entrepreneurs are looking to help you do just that!'
		}, {
			title: 'Founder Equity Calculator',
			day: '8',
			month: 'May',
			tags: 'developement',
			country: 'india',
			owner: 'Naveen',
			articlename: 'founder-equity-calculator',
			tab: 'articles',
			rate: 4,
			fb: 30,
			tw: 5,
			gp: 10,
			excerpt: 'Sorry about that everyone - meant to put this up immediately after the session over a week ago. Click here to view the founder-equity calculator',
			content: 'Sorry about that everyone - meant to put this up immediately after the session over a week ago. Click here to view the founder-equity calculator that was presented at TechGrind Co-founder dating event in April.'
		}, {
			title: 'TG Monthly Enter Singaphore',
			day: '2',
			month: 'May',
			tags: 'developement',
			country: 'singapore',
			owner: 'Naveen',
			articlename: 'tg-monthly-enter-singapore',
			tab: 'articles',
			rate: 2,
			fb: 30,
			tw: 5,
			gp: 10,
			excerpt: 'To all you struggling startups in Singapore, tired of all the noise and fluff, eager to really solve problems and be part of a community',
			content: 'To all you struggling startups in Singapore, tired of all the noise and fluff, eager to really solve problems and be part of a community supportive of eachother --- get on over to Hackerspace.SG this Saturday, May 4th!!!'
		}];

		return $scope.articles = articles;
	}
	]);
}).call(this);