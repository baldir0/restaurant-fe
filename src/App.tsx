import { ContentBox } from "./components/ContentBox/ContentBox";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <ContentBox />
      </div>
    </>
  );
}

export default App;
