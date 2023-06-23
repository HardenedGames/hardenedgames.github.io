import './App.css';
import ResponsiveAppBar from './AppBar';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
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
