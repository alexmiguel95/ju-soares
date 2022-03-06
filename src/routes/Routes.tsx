import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from "../components/Header";
import Home from '../pages/Home';

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PublicRoutes;
