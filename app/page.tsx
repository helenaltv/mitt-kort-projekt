import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div>
      <button className="Knapp">
        <Link className="link" href={"/"}>
          Skapa
        </Link>
      </button>
      <div className="footer">
        <div className="F1">
          <h1>Kontakt</h1>
          <p>
            Hej! Detta är min Footer. Hej! Detta är min Footer. Hej! Detta är
            min Footer. Hej! Detta är min Footer.
          </p>
        </div>
        <div className="F2">
          <h1>Snabbmenu</h1>
          <p>
            Hej! Detta är min Footer. Hej! Detta är min Footer. Hej! Detta är
            min Footer. Hej! Detta är min Footer.
          </p>
        </div>
        <div className="F3">
          <h1>Snabbmenu</h1>
          <p>
            Hej! Detta är min Footer. Hej! Detta är min Footer. Hej! Detta är
            min Footer. Hej! Detta är min Footer.
          </p>
        </div>
      </div>
      ;
    </div>
  );
}

export default Home;
