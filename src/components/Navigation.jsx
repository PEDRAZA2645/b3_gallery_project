import { Link } from "react-router-dom";
import Maldivas1 from "./maldivas1";
import Maldivas2 from "./maldivas2";
import Maldivas3 from "./maldivas3";
import Maldivas4 from "./maldivas4";
import Maldivas5 from "./maldivas5";
import Maldivas6 from "./maldivas6";
import Maldivas7 from "./maldivas7";
import Maldivas8 from "./maldivas8";
import Maldivas9 from "./maldivas9";
import Maldivas10 from "./maldivas10";

const Navigation = () => {
  return (
    <div className="container thumbnail-container mt-2">
      <Link to='/maldivas1' className="links">
        <figure className="thumbnail-image-size">
            <Maldivas1/>
            <figcaption>Maldivas 1</figcaption>
        </figure>
      </Link>
      <Link to='/maldivas2' className="links">
        <figure className="thumbnail-image-size">
            <Maldivas2/>
            <figcaption>Maldivas 2</figcaption>
        </figure>
      </Link>
      <Link to='/maldivas3' className="links">
        <figure className="thumbnail-image-size">
            <Maldivas3/>
            <figcaption>Maldivas 3</figcaption>
        </figure>
      </Link>
      <Link to='/maldivas4' className="links">
        <figure className="thumbnail-image-size">
            <Maldivas4/>
            <figcaption>Maldivas 4</figcaption>
        </figure>
      </Link>
      <Link to='/maldivas5' className="links">
        <figure className="thumbnail-image-size">
            <Maldivas5/>
            <figcaption>Maldivas 5</figcaption>
        </figure>
      </Link>
      <Link to='/maldivas6' className="links">
        <figure className="thumbnail-image-size">
            <Maldivas6/>
            <figcaption>Maldivas 6</figcaption>
        </figure>
      </Link>
      <Link to='/maldivas7' className="links">
        <figure className="thumbnail-image-size">
            <Maldivas7/>
            <figcaption>Maldivas 7</figcaption>
        </figure>
      </Link>
      <Link to='/maldivas8' className="links">
        <figure className="thumbnail-image-size">
            <Maldivas8/>
            <figcaption>Maldivas 8</figcaption>
        </figure>
      </Link>
      <Link to='/maldivas9' className="links">
        <figure className="thumbnail-image-size">
            <Maldivas9/>
            <figcaption>Maldivas 9</figcaption>
        </figure>
      </Link>
      <Link to='/maldivas10' className="links">
        <figure className="thumbnail-image-size">
            <Maldivas10/>
            <figcaption>Maldivas 10</figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default Navigation
