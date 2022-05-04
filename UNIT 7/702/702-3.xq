<books>
{
for $x in collection ("bookstoree")/bookstore/book
where $x/@price = 19.95
return <book>{$x/title}</book>
}
</books>
