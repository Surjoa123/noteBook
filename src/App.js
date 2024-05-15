import { useEffect, useState } from 'react';
import './App.css';
import ChallengesList from './component/ChallengeList';
import axios from 'axios';
import AddChallenge from './component/AddChallenge';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [challenges , setChallenges] = useState([
    {id:1, name:"Johon", month:"9999", description: "Kolkata"},
    {id:2, name:"Joshef", month:"9999", description: "Delhi"}
  ]);

  const fetchedChallenges = async () => {
    try {
      const response = await axios.get('http://localhost:8080/challenges');
      setChallenges(response.data);
    } catch (error) {
        console.error("Error fetching challenges: ", error);
    }
  };

  useEffect(()=> {
    fetchedChallenges();
  }, [])

  const handleChallengeAdded = () => {
      fetchedChallenges();
  };

  return (
    <div className="container mt-5">
      <h1 className='text-center mb-4'>Contact Save Note Book</h1>
      <AddChallenge onChallengeAdded = {handleChallengeAdded}/>
      <ChallengesList challenges  = {challenges}/>
    </div>
  );
}

export default App;
