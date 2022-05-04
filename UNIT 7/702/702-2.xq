<books>
{
for $x in collection ("bookstoree")/bookstore/book
order by $x/year
return <book>{$x/title}{$x/year}</book>
}
</books>
