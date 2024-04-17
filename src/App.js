import './App.css';
import Header from './components/header/Header';
import BlankState from './components/blankState/BlankState';
import NotesListView from './components/notesListView/NotesListView';
import { useUser } from '@clerk/clerk-react';

function App() {
  const {isSignedIn,user} = useUser()
  console.log(isSignedIn,user,'isSIgned')
  return (
    <div className="bg-red">
      <Header />
      <div className="max-w-[1400px] mx-auto px-8 pt-2 min-h-[80vh]">
        {isSignedIn ? <NotesListView /> :<BlankState /> }
        
        
        {/* <BlankState /> */}
      </div>
    </div>
  );
}

export default App;
