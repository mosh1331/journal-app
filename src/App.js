import './App.css';
import Header from './components/header/Header';
import BlankState from './components/blankState/BlankState';
import NotesListView from './components/notesListView/NotesListView';
import { useUser } from '@clerk/clerk-react';

function App() {
  const {isSignedIn,user} = useUser()
  return (
    <div className="bg-red">
      <Header />
      {isSignedIn ?
      <div className="max-w-[1400px] mx-auto px-8 pt-2 min-h-[80vh]">
         <NotesListView /> 
      </div>:
      <div className="bg-cover bg-center w-full h-full bg-[url('https://images.pexels.com/photos/2180092/pexels-photo-2180092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
       <BlankState />
      </div> }
      
    </div>
  );
}

export default App;
