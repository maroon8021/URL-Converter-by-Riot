var {shell} = require('electron');

// Listen for the event.
var body = document.body;
body.addEventListener(converter.EventType.INPUTTED,
 onInputted_, false);

function onInputted_(e){
	console.log("dispatched");
	shell.openExternal('https://github.com');
	var data = e.detail;
	var targetText = new RegExp(data.targetText);
  var replaceText = data.convertURL;
  var replacedUrl = data.inputtedURL.replace( targetText , replaceText ) ;
  if(replacedUrl.match(replaceText)){
  	var head = "http://";
    if(!replacedUrl.match(head)){
      replacedUrl = head+replacedUrl;
    }
    shell.openExternal(replacedUrl);
  }
}