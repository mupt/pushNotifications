$(document).on("click", ".subscribe-button", function(e){
	e.preventDefault();
	console.log('you clicked it');

	// $.ajax({
	// 	url:"test.html"
	// }).done(function() {
	// 	$(this).addClass( "done" );
	// }); 

});

document.body.onload = function() {
    // Ensure that the user can receive Safari Push Notifications.
    if ('safari' in window && 'pushNotification' in window.safari) {
        var permissionData = window.safari.pushNotification.permission('web.com.example.domain');
        checkRemotePermission(permissionData);
    }
};
 
var checkRemotePermission = function (permissionData) {
    if (permissionData.permission === 'default') {
        // This is a new web service URL and its validity is unknown.
        window.safari.pushNotification.requestPermission(
            'https://domain.example.com', // The web service URL.
            'web.com.example.domain',     // The Website Push ID.
            {}, // Data that you choose to send to your server to help you identify the user.
            checkRemotePermission         // The callback function.
        );
    }
    else if (permissionData.permission === 'denied') {
        // The user said no.
    }
    else if (permissionData.permission === 'granted') {
        // The web service URL is a valid push provider, and the user said yes.
        // permissionData.deviceToken is now available to use.
    }
};