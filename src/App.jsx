import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./modules/Navbar";
import TopSection from "./modules/TopSection";
import CarsSection from "./modules/CarsSection";
import HomePage from "./pages/HomePage";
import EmployeesSection from "./modules/EmployeesSection";
import FAQSection from "./modules/FAQSection";
import ContactUsSection from "./modules/ContactUsSection";
import Footer from "./modules/Footer";
import AddCarPage from "./pages/AddCarPage";
import AddTeamPage from "./pages/AddTeamPage";
import TeamPage from "./pages/TeamPage";
import CarPage from "./pages/CarPage";
import Page404 from './pages/Page404';
import ReviewPage from './pages/ReviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <TopSection />
              <HomePage />
              <CarsSection />
              <EmployeesSection />
              <FAQSection />
              <ContactUsSection />
              <Footer />
            </>
          }
        />
          <Route path="/add-car" element={<AddCarPage />} />
          <Route path="/add-team" element={<AddTeamPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/cars" element={<CarPage />} />
          <Route path="/reviews/:id" element={<ReviewPage/>}/>
          <Route path="/*" element={<Page404/>}/>
        </Routes>
    </Router>
  );
}

export default App;
