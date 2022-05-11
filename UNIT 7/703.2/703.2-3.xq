for $x in collection("6nations11")//match[summary/team/@name]

return concat($x//team[1]/@name," - ", $x//team[2]/@name)