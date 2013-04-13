define(function(){
	function showMsg(msg){
		alert(msg||"none msg paramter");
	};
	function printLog(){
		var log=[].splice.apply(arguments,0,1);
		console.log(log,+new Date());
	};
	return {
		showMsg:showMsg,
		printLog:printLog
	};
});