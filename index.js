const element = (
  // Write your code here.
  <div className="congratulations-container">
    <h1 className="heading">Congratulations</h1>
    <div className="congrats-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image1"
      ></img>
      <p className="paragraph1">Kiran V</p>
      <p className="paragraph">
        Vishnu institue of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image2"
      ></img>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
