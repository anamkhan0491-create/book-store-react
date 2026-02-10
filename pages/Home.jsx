import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector(state => state.books);

  return (
    <div>
      <h2>Popular Books</h2>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Home;