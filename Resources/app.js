//Project Name: The Collegiate Mobile App
//Authors: 
//Course: CO275
//Date of Last Edit: 10/19/2012


// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

Ti.include("Home.js");

Ti.include("Read.js");

Ti.include("News.js");

Ti.include("About.js");



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  
tabGroup.addTab(tab4);





if (osname === 'iphone' || osname === 'ipad') {
	tabGroup.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
} else {
	tabGroup.open();
}

	
	//each click on or in a tab genereates a focus event.  We only want to renavigate the tab1 and tab3 when it is switched to.
	var tabTemp = tab4;
	
	
	tabGroup.addEventListener('focus',function(e) {


	if (tabTemp != tabGroup.activeTab) {

		if (tabGroup.activeTab == tab1)
		{
			
			WebviewHome.url = WebviewHomeUrl;
		
	 	}
	 	
	 	if (tabGroup.activeTab == tab3)
		{
			
			qrWebview.url = qurl;
		
	 	}
	 	tabTemp = tabGroup.activeTab;
	 
	 	
	}
	
})
	





