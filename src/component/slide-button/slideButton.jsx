import './slideButton.css';

export default function SlideButton({ link, children }) {
  return (
    <div className="slide-button">
      <ul>
        <li>
          <a href={link} target="_blank">
            <span className="button-wrapper">
              <span className="upperP-wrapper">
                <p>{children}</p>
              </span>
              <span className="downP-wrapper">
                <p>{children}</p>
              </span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
