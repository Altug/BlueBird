/*
BlueBird v.0.5
Custimizable Twitter feed fetcher.
Latest Changes on this file: Altug Gurkaynak (https://github.com/altug) - 01/11/2017 - 17:51
*/

var BlueBirdConfig = {
	"profile"			: {"screenName": 'twitter'},	// Twitter account to be shown
	"maxTweets"			: 10,						// Twit count to be shown
	"enableLinks"		: true,						// Links (true/false) -- False: Disables Avatar to be shown too
	"showUser"			: true,						// Show/hide user name on each twit
	"showTime"			: true,						// Show/hide published dates of the twits
	"showImages"		: true,						// Show/hide attached twit images
	"dataOnly"			: true,
	"showInteraction"	: true,

	"BlueBirdBgcolor"			: '#222',			// BlueBird box background color
	"BlueBirdBgHovercolor"		: '#444',			// Mouseover background color for single twits
	"BlueBirdTweetFontSize"		: '16px',			// Twit font size
	"BlueBirdTweetLineHeight"	: '1.4em',			// Twit text line height
	"BlueBirdTweetcolor"		: '#aaa',			// Twit text color
	"BlueBirdTweetAuthor"		: '#4af',			// Author name color
	"BlueBirdTweetLinkColor"	: '#fff',			// Link color in twits

	"customCallback": populateTpl
};

twitterFetcher.fetch(BlueBirdConfig);

function populateTpl(tweets){

	var element = document.getElementById('BlueBird');
	var html = '<ul>'

	for (var i = 0, lgth = tweets.length; i < lgth ; i++) {
		var tweetObject = tweets[i];
		html += '<li>'
			+ '<div class="twit_avatar">' + tweetObject.author + '</div>'
			+ '<div class="twit_twit">'
				+ '<div class="twit_twitter">' + tweetObject.author + '</div>'

				+ '<p>' + tweetObject.tweet + '</p>'
				//+ '<span class="tweet-infos">Published: ' + tweetObject.time + '</span></p>'
				//+ '<p class="tweet-link"><a href="' + tweetObject.permalinkURL + '">Original Twit</a></p>'
				+ (tweetObject.image ? '<div class="tweet-img"><img src="'+tweetObject.image+'" /></div>' : '')
			+ '</div></li>';
	}
	html += '</ul>';
	element.innerHTML = html;
}


var style = (function () {
	var style = document.createElement("style");			// Create the <style> tag
	style.appendChild(document.createTextNode(""));			// WebKit hack
	document.head.appendChild(style);						// Add the <style> element to the page
	console.log(style.sheet.cssRules);						// length is 0, and no rules
	return style;
})();
style.sheet.insertRule('#BlueBird{background-color:' + BlueBirdConfig.BlueBirdBgcolor + ';}', 0);
style.sheet.insertRule('#BlueBird li:hover{background-color:' + BlueBirdConfig.BlueBirdBgHovercolor + ';}', 0);
style.sheet.insertRule('.TweetAuthor-link{color:' + BlueBirdConfig.BlueBirdTweetAuthor + ';}', 0);
style.sheet.insertRule('#BlueBird p {font-size:' + BlueBirdConfig.BlueBirdTweetFontSize + ';line-height:' + BlueBirdConfig.BlueBirdTweetLineHeight + ';color:' + BlueBirdConfig.BlueBirdTweetcolor + ';}', 0);
style.sheet.insertRule('#BlueBird p a{color:' + BlueBirdConfig.BlueBirdTweetLinkColor + ';}', 0);
console.log(style.sheet.cssRules);							// length is 1, rule added