var app=angular.module("MathService",[])
app.factory('myMath',function(){
	var my={};
	my.add=function(a,b){
		return a+b;
	}
	return my;
});