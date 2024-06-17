import { useEffect, useState } from "react";
import Tours from "./Components/Tours";

import "./App.css";
const url = 'https://www.course-api.com/react-tours-project';


function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const toursArr = await response.json();

      setTours(toursArr);
      setLoading(false);
      console.log(tours);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTours();

  }, []);

  if (loading) {
    return (
      <div>
        <h2>Loading Tours</h2>
      </div>
    );
  }

  if (tours.length == 0) {
    return (
      <div>
        <h2>No Tours Left</h2>
      </div>
    );
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
}

export default App;
