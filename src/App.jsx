import "./App.css";
import Title from "./components/Title";
import Header from "./components/Header";
import Button from "./components/Button";
import headerImage from "./img/header-img.png";
import { BsFillSendFill } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <Header>
        <Title
          text="Learn to code by watching others"
          classes={"title header-title fs-xxl mb-3"}
        />
        <p className="header-text mb-3">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>

        <div className="header-btn">
          <Button
            type={"button"}
            classes={"btn-primary text-light"}
            text={"Try it free 30 days"}
            icon={<BsFillSendFill />}
          />
          <Button
            type={"button"}
            classes={"btn-secondary"}
            text={"Learn more"}
            icon={<BsFillSendFill />}
          />
        </div>
        <img src={headerImage} alt="headerImage" className="header-img" />
      </Header>
    </div>
  );
}

export default App;
