sum (for $article in doc("facturacio.xml")//producte[@codi="11112"]
return $article/quantitat * $article/preuunitari )