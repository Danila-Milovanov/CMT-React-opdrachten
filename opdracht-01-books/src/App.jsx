import './App.css';
import Header from './Header';
import Layout from './Layout';
import BookList from './BookList';

function App() {

  return (
    <>
      <h1>Opdracht 1 - Books</h1>
      <Layout>
        <BookList></BookList>
      </Layout>
    </>
  );
}

export default App;
