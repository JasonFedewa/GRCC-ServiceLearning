
//
// create base UI tab and root window
//

var WebviewHomeUrl = "local/index.html";

var winHome = Titanium.UI.createWindow({  
    title:'Home',
    backgroundColor:'#fff'
});

	
var tab1 = Titanium.UI.createTab({  
    icon:'images/KS_nav_views.png',
    title:'Home',
    window:winHome
});

var WebviewHome = Titanium.UI.createWebView({url:WebviewHomeUrl});		


			
winHome.add(WebviewHome);


