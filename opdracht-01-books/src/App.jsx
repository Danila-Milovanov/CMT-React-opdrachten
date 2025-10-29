import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import BookList from './components/BookList';

function App() {

  return (
    <>
      <h1>Opdracht 1 - Books</h1>
      <Layout>
        <BookList/>
      </Layout>
    </>
  );
}

export default App;
