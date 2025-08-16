import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
  const vance = {
    name: "Vance Arocho",
    bio: "Experienced Application Developer and Problem Solver",
    image: "https://placehold.co/128x128/34495e/ecf0f1?text=VA",
    email: "aroc725@yahoo.com",
    phone: "(703) 201-7398"
  };

  return (
    <div className="App">
      <ProfileCard profile={vance} />
    </div>
  );
}

export default App;
