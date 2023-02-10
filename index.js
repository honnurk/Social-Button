const Button = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <button className={`button ${className}`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-container">
    <div className="text-container">
      <h1 className="text-heading">Social Buttons</h1>
      <div className="text">
        <Button text="Like" className="like-button" />
        <Button text="Comment" className="comment-button" />
        <Button text="Share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
