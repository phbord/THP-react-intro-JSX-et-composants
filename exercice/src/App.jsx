//import './App.css';
import MixedContent from'components/MixedContent';

function App() {
  const booksList = books.map((book) => {
    return (
      <>
        <MixedContent key={book.id} book={book} />
      </>
    )
  });
  return (
    <div className="App">
      <ul>
        {booksList}
      </ul>
    </div>
  );
}

const books = [
  { id: 1, name: 'Les trois mousquetaires', price: 25},
  { id: 2, name: 'Le capital', price: 15},
  { id: 3, name: 'Atlas du mondialisme', price: 47},
  { id: 4, name: 'La société ouverte', price: 30},
  { id: 5, name: '1984', price: 18}
];

export default App;
