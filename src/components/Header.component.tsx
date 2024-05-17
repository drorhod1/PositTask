import { uiText } from "@/constants/stringRes";

export default function Header() {
  return (
    <div className="header-container">
      <h1 className="title">{uiText.TechnicianApplication}</h1>
      <a href="/" className="home-link">
        <button className="header-home-btn">{uiText.homeBtn}</button>
      </a>
    </div>
  );
}
