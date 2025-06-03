import { Link } from "react-router-dom";
import "./PaginaPrincipala.css";
import { Users, History, Star } from "lucide-react";

export default function PaginaPrincipala() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>PAGINA PRINCIPALA</h1>
      </header>

      <section className="info-cursa">
        <span className="info-item">miami</span>
        <span className="info-item">cursa</span>
        <span className="info-item">12/57</span>
      </section>

      {/* Tabel */}
      <table className="tabel-cursa">
        <thead>
          <tr>
            <th>Pozitie</th>
            <th>Nume</th>
            <th>Timp</th>
            <th>Puncte</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td>25</td>
          </tr>

          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td>18</td>
          </tr>

          <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td>15</td>
          </tr>

          <tr>
            <td>4</td>
            <td></td>
            <td></td>
            <td>12</td>
          </tr>

          <tr>
            <td>5</td>
            <td></td>
            <td></td>
            <td>10</td>
          </tr>

          <tr>
            <td>6</td>
            <td></td>
            <td></td>
            <td>8</td>
          </tr>

          <tr>
            <td>7</td>
            <td></td>
            <td></td>
            <td>6</td>
          </tr>

          <tr>
            <td>8</td>
            <td></td>
            <td></td>
            <td>4</td>
          </tr>

          <tr>
            <td>9</td>
            <td></td>
            <td></td>
            <td>2</td>
          </tr>

          <tr>
            <td>10</td>
            <td></td>
            <td></td>
            <td>1</td>
          </tr>

          <tr>
            <td>11</td>
            <td></td>
            <td></td>
            <td>0</td>
          </tr>

          <tr>
            <td>12</td>
            <td></td>
            <td></td>
            <td>0</td>
          </tr>

          <tr>
            <td>13</td>
            <td></td>
            <td></td>
            <td>0</td>
          </tr>

          <tr>
            <td>14</td>
            <td></td>
            <td></td>
            <td>0</td>
          </tr>

          <tr>
            <td>15</td>
            <td></td>
            <td></td>
            <td>0</td>
          </tr>

          <tr>
            <td>16</td>
            <td></td>
            <td></td>
            <td>0</td>
          </tr>

          <tr>
            <td>17</td>
            <td></td>
            <td></td>
            <td>0</td>
          </tr>

          <tr>
            <td>18</td>
            <td></td>
            <td></td>
            <td>0</td>
          </tr>

          <tr>
            <td>19</td>
            <td></td>
            <td></td>
            <td>0</td>
          </tr>

          <tr>
            <td>20</td>
            <td></td>
            <td></td>
            <td>0</td>
          </tr>
        </tbody>
      </table>

      {/* Meniu jos */}
      <footer className="meniu-jos">
        <Link
          to="/comparatie"
          state={{ reset: true }}
          className="footer-button"
        >
          <Users size={20} style={{ marginRight: "8px" }} />
        </Link>

        <Link to="/istoric" className="footer-button">
          <History size={20} style={{ marginRight: "8px" }} />
        </Link>

        <button className="footer-button">
          <Star size={20} style={{ marginRight: "8px" }} />
        </button>
      </footer>
    </div>
  );
}
