'use strict'
var file = {}
file.aritGeo = function (arr){
	if(isArithmetric(arr)){
		return "Arithmetic"
	}
	if(isGeometric(arr)){
		return "Geometric"
	}
}
file.isArithmetric = function(arr){
	var diff = arr[1] - arr[0];
	for (var i = 2; i < arr.length; i++){
		if(arr[i+1]-arr[i] === diff){
			return true
		}
	}
	return false
}
file.isGeometric = function(arr){
	var div = (arr[1]/arr[0]);
	for (var i = 2; i < arr.length; i++){
		if(arr[i+1]/arr[i] === div){
			return true
		}
	}
	return false
}
	
