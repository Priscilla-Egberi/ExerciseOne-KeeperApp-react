import "./styles.css";
import { Button } from "react-bootstrap";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
import notes from "./note";

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map((note) => (
        <Cards key={note.key} title={note.title} content={note.content} />
      ))}

      <Button
        as="a"
        variant="warning"
        className="bg-warning btn-warning mt-5 mb-5"
      >
        Button as link
      </Button>
      <div>
        <button className="btn btn-primary mt-5">before</button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
