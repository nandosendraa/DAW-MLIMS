for $x in collection (bookstoree)/bookstore/book
let $number := count ($x/author)
return 
<books>
<book>{$x/title}</book>
<numAuth>{$number}</numAuth>
</books>
