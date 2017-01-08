'use strict'

var aritGeo = function (arr){

	if (arr === []){
		return 0
	}
	if(isArithmetric(arr)){
		return "Arithmetic"
	}
	if(isGeometric(arr)){
		return "Geometric"
	}
	if(!isGeometric(arr) && !isArithmetric(arr)){
		return -1
	}
}
var isArithmetric = function(arr){
	var diff = arr[1] - arr[0];
	for (var i = 2; i < arr.length; i++){
		if(arr[i+1]-arr[i] === diff){
			return true
		}
	}
	return false
}
var isGeometric = function(arr){
	var div = (arr[1]/arr[0]);
	for (var i = 2; i < arr.length; i++){
		if(arr[i+1]/arr[i] === div){
			return true
		}
	}
	return false
}
	
module.exports = {
	aritGeo : aritGeo
};