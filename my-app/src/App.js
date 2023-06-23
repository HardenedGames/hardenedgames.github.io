import './App.css';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hardened Games
        </p>
      </header>

        <main>
            <Main title="From the firehose" posts="posts" />
        </main>
    </div>
  );
}

export default App;
