import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import Video from './pages/Video';
import { DataProvider } from './Export';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
