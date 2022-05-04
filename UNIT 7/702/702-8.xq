<books>
{
for $x in collection (bookstoree)/bookstore/book
return <book>{$x/title}{$x/author}</book>
}
</books>