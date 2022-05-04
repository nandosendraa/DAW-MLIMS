<result>
{
for $x in collection (bookstoree)/bookstore/book
order by $x/author
return <book>{$x/author}</book>

}
</result>
