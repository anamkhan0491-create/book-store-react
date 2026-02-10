import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useState } from "react";

function AddBook() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleAdd = () => {
    dispatch(addBook({
      id: Date.now(),
      title,
      author,
      description: ""
    }));

    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <h2>Add Book</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <br />
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
      <br />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddBook;