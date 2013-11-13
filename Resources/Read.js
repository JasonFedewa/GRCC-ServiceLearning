//
// create controls tab and root window
//

var winRead = Titanium.UI.createWindow({  
    title:'Read',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'images/KS_nav_mashup.png',
    title:'Read',
    window:winRead
});

	// qcr: Determine os type and assign url as required
	var osname = Ti.Platform.osname,
	version = Ti.Platform.version,
	height = Ti.Platform.displayCaps.platformHeight,
	width = Ti.Platform.displayCaps.platformWidth;
		
	var qurl;
	if (osname === 'iphone' || osname === 'ipad') {
		qurl = 'http://onswipe.com/thecollegiatemobile';
	}
	else {
		//qurl = 'http://www.google.com/reader/m/view/feed/http://thecollegiatelive.com/feed/';
		qurl = 'http://thecollegiatelive.com/';
	}
	
	var qrWebview = Titanium.UI.createWebView({url:qurl});					
	winRead.add(qrWebview);

