<results>
{
for $x in collection (bookstoree)/bookstore/book
return <result>{$x/title}{$x/author}</result>

}
</results>
