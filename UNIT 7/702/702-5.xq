<books>
{
for $x in collection ("bookstoree")/bookstore/book
where $x/@lang = "en" and $x/year < 2004 
return <book>{$x/title}{$x/year}</book>
}
</books>
