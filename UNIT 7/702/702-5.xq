<books>
{
for $x in doc ("bookstore.xml")/bookstore/book
where $x/@lang = "en" and $x/year < 2004 
return <book>{$x/title}{$x/year}</book>
}
</books>