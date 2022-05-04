<html>
  <head>
    <style>
      td{{border: 1px solid black; text-align: left;      }}
      th{{border: 1px solid black; text-align: left;      }}
      .price{{text-align: right;}}
    </style> 
  </head>
  <body>
    <h1>Book List</h1>
    <table>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Price</th>
      </tr>
{
for $x in collection ("bookstoree")/bookstore/book
return<tr>
        <td>{data ($x/title)}</td>
        <td>{data ($x/author)}</td>
        <td class= "price">{data ($x/@price)}</td>
      </tr>
}   
    </table>
  </body>
</html>