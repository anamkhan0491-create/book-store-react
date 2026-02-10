function BookCard({ book }) {
  return (
    <div style={{border:"1px solid gray", padding:"10px", margin:"10px"}}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
}

export default BookCard;