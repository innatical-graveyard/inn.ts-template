const Home = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <img
          src="/innatical.svg"
          alt="Innatical Logo"
          width="50"
          height="50"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <h1>Welcome to Inn.ts!</h1>
      <p>An awesome framework for making React apps by Innatical.</p>

      <div className="links">
        <a href="https://innts.innatical.com">Inn.ts</a>
        <a href="https://innts.innatical.com/docs">Documentation</a>
        <a href="https://github.com/innatical/inn.ts">Fork us on GitHub!</a>
      </div>
    </>
  );
};

export default Home;
