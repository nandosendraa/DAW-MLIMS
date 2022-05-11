for $client in doc("facturacio.xml")//factura
order by number($client/total) descending
return <totalFact>{$client/client/raosocial/nom, $client/total}</totalFact>