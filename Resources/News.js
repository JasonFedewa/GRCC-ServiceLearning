
//
// create controls tab and root window
//


var winNews = Titanium.UI.createWindow({  
    title:'News',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'images/KS_nav_ui.png',
    title:'News',
    window:winNews
});


// qcr: Determine os type and assign url as required
	var osname = Ti.Platform.osname,
	version = Ti.Platform.version,
	height = Ti.Platform.displayCaps.platformHeight,
	width = Ti.Platform.displayCaps.platformWidth;

// Function loadTweets()
function loadTweets()
{
   // Empty array "rowData" for our tableview
   var rowData = [];
   // Create our HTTP Client and name it "loader"
   var loader = Titanium.Network.createHTTPClient();
   // Sets the HTTP request method, and the URL to get data from
   loader.open("GET", 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=GRCC_Collegiate');
   // Runs the function when the data is ready for us to process
   loader.onload = function()
   {
           var tweets = eval('('+this.responseText+')');
           for (var i = 0; i < tweets.length; i++)
           {
                   var tweet = tweets[i].text; // The tweet message
                   var user = tweets[i].user.screen_name; // The screen name of the user
                   var avatar = tweets[i].user.profile_image_url; // The profile image
                   // Create a row and set its height to auto
                   var row = Titanium.UI.createTableViewRow({height:'auto'});
                   // Create the view that will contain the text and avatar
                   var post_view = Titanium.UI.createView({
                           height:'auto',
//                            layout:'vertical', // forces labels lower than logo
                           top:5,
                           right:5,
                           bottom:5,
                           left:5
                   });
                   // Create image view to hold profile pic
                   var av_image = Titanium.UI.createImageView({
                           url:avatar, // the image for the image view
                           top:0,
                           left:0,
                           height:48,
                           width:48
                   });
                   post_view.add(av_image);
              	   var inner_view = Titanium.UI.createView({
                           height:'auto',
                           layout:'vertical', // want the two labels to be vertical
                  		   top:0,                 // no extra padding is needed from inner_view
                           right:0,
                           bottom:0,
                           left:0
                   });
                   // Create the label to hold the screen name
                   var user_lbl = Titanium.UI.createLabel({
                           text:user, // debugging code follows + Math.ceil(tweet.length / 30) * 23 + ' ' + tweet.length,
                           left:54,
                           width:120,
                           top:0,
                           bottom:0,
                           height:18,
                           textAlign:'left',
                           color:'#444444',
                           font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'}
                   });
               inner_view.add(user_lbl);
//                    post_view.add(user_lbl);
               
                   // Create the label to hold the tweet message
                   var tweet_lbl = Titanium.UI.createLabel({
                           text:tweet,
                           left:54,
                           top:0,
                           bottom:2,
                   height:Math.ceil(tweet.length / 30) * 23, // rough conservative approximation
//                            height:'auto',  // 'auto' doesn't work
                           width:236,
                           textAlign:'left',
                           font:{fontSize:14}
                   });
               inner_view.add(tweet_lbl);
               post_view.add(inner_view);
//                    post_view.add(tweet_lbl);
                   // Add the post view to the row
                   row.add(post_view);
                   // Give each row a class name
                   row.className = "item"+i;
                   // Add row to the rowData array
                   rowData[i] = row;
           }
           // Create the table view and set its data source to "rowData" array
           var tableView = Titanium.UI.createTableView({data:rowData});
           //Add the table view to the window
           winNews.add(tableView);
   };
   // Send the HTTP request
   loader.send();
}
loadTweets();
