for $factura in collection("facturacio")//factura
where $factura/total > 500
return $factura/client/raosocial/nom