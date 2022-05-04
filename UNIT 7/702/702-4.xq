<books>
{
for $x in collection ("bookstoree")/bookstore/book
where $x/year > 2000
return <book>{$x/title}</book>
}
</books>
