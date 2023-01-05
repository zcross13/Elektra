import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to="/teslas">Tesla HomePage</Link>
            &nbsp; | &nbsp;
            <Link to="/reservations">Reservation History Page</Link>
            &nbsp; | &nbsp;
            <Link to="/reservations/new">New Reservation</Link>
        </nav>
    );
}