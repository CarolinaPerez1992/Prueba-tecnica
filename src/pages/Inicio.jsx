import "./inicio.css";
import { Link } from "react-router-dom";

export default function Inicio() {
return (
        <section className="popular__section">
        <div className="popular__title">
            <h1>Popular Titles</h1>
        </div>
        <div className="popular__container">
            <div>
            <div className="card">
                <Link className="link" to="/series">
                <h2> SERIES</h2>
                </Link>
            </div>
            <Link className="title" to="/series">
                <p>Popular Series</p>
            </Link>
            </div>
            <div>
            <Link className="link" to="/movies">
                <div className="card">
                <h2> MOVIES</h2>
                </div>
            </Link>
            <Link className="title" to="/movies">
                <p>Popular Movies</p>
            </Link>
            </div>
        </div>
        </section>
);
}
