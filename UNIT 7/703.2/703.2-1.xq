let $points := collection("6nations11")//team[@name='France']
return sum($points/@score)