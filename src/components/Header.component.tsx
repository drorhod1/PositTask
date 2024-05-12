import { uiText } from "@/constants/stringRes";

export default function Header() {
  return (
    <div className="header-container">
      <h1>{uiText.TechnicianApplication}</h1>
      <a href="/">
        <button className="header-home-btn">{uiText.homeBtn}</button>
      </a>
    </div>
  );
}
