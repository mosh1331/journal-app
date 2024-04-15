import './App.css';
import Header from './components/header/Header';
import BlankState from './components/blankState/BlankState';
import NotesListView from './components/notesListView/NotesListView';

function App() {
  return (
    <div className="bg-red">
      <Header />
      <div className="max-w-[1400px] mx-auto px-8 pt-2 min-h-[80vh]">
        <NotesListView />
        {/* <BlankState /> */}
      </div>
    </div>
  );
}

export default App;
