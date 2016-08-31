function isVampireNumber(num){
  var fangs = [];
  var factors = [];
  var specialFactors = []; // Factors with same number of digits
  var strFactors = [];
  var numToString = num.toString().split("");
  
  for(var i=1; i<num/2; i++){
		if(num%i == 0){
			factors.push([i, num/i]);
		}
	}
	for(var l=0; l<factors.length; l++){
		if(factors[l][0].lenth = factors[l][1].length){
			specialFactors.push(factors[l]);
		}
	}
	for(var m=0; m<specialFactors.length; m++){
		var elem1 = specialFactors[m][0].toString().split("");
		var elem2 = specialFactors[m][1].toString().split("");
		strFactors.push(elem1.concat(elem2));
	}
	
	if(strFactors.sort(function(a, b){return a > b;}) == numToString.sort(function(a, b){return a > b;})){
		fangs.push()
	}
  
}
