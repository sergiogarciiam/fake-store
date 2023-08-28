import CategoriesList from "./CategoriesList";

function Home() {
  return (
    <div className="home">
      <h1>What are you looking for?</h1>
      <CategoriesList></CategoriesList>
      <p>
        By{" "}
        <a href="https://github.com/sergiogarciiam" target="__blank">
          Sergio García
        </a>
      </p>
    </div>
  );
}

export default Home;
