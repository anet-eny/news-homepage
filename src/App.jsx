import Header from "./components/Header";
import Hero from "./components/Hero";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="mx-auto px-4 sm:px-8 pb-16 max-w-5xl">
      <Header />
      <Hero />
      <Articles />
    </div>
  );
}

export default App;
