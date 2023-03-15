import "./App.css";
import "./static/css/style.css";
import "./static/css/theme.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Services from "./components/Services";

import { Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import FloorPlan from "./components/FloorPlan";
import Studio from "./components/Studio";
import TownHouse from "./components/TownHouse";
import Cabins from "./components/Cabins";
import BookApartment from "./components/resident/BookApartment";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import ResidentHeader from "./components/resident/ResidentHeader";
import SignLease from "./components/resident/SignLease";
import ResidentProfile from "./components/resident/ResidentProfile";
import RegisterVehicle from "./components/resident/RegisterVehicle";
import AmenitiesTimings from "./components/resident/AmenitiesTimings";
import Subscriptions from "./components/resident/Subscriptions";
import Chat from "./components/resident/Chat";
import ResidentLogin from "./components/resident/ResidentLogin";
import ForgotPassword from "./components/ForgotPassword";
import ManagerLogin from "./components/manager/ManagerLogin";
import ManagerHome from "./components/manager/ManagerHome";
import ManagerHeader from "./components/manager/ManagerHeader";
import ManageVisitors from "./components/manager/ManageVisitors";
import ManageResidents from "./components/manager/ManageResidents";
import AmenitiesManagerCRUD from "./components/manager/AmenitiesManagerCRUD";
import VisitorHome from "./components/visitor/VisitorHome";
import VisitorLog from "./components/visitor/VisitorLog";
import Directions from "./components/visitor/Directions";
import Location from "./components/visitor/Location";
import RegisterVisitor from "./components/visitor/RegisterVisitor";
import ManagerLoggedOutHeader from "./components/manager/ManagerLoggedOutHeader";
import GardenManagerLogin from "./components/gardenmanager/GardenManagerLogin";
import GardenManagerHome from "./components/gardenmanager/GardenManagerHome";
import GardenManagerHeader from "./components/gardenmanager/GardenManagerHeader";
import GMManageResident from "./components/gardenmanager/GMManageResident";
import GMManageVisitor from "./components/gardenmanager/GMManageVisitor";
import GMChat from "./components/gardenmanager/GMChat";

function BasicLayout() {
  return (
    <>
      <Header />

      <Outlet />

      <div className="extender"></div>

      <Footer />
    </>
  );
}

function ResidentLayout() {
  return (
    <>
      <ResidentHeader />

      <Outlet />

      <div className="extender"></div>

      <Footer />
    </>
  );
}

function ManagerLayout() {
  return (
    <>
      <ManagerHeader />

      <Outlet />

      <div className="extender"></div>

      <Footer />
    </>
  );
}


function GardenManagerLayout() {
  return (
    <>
      <GardenManagerHeader/>

      <Outlet />

      <div className="extender"></div>

      <Footer />
    </>
  );
}


function ManagerLoggedOutLayout() {
  return (
    <>
      <ManagerLoggedOutHeader />

      <Outlet />

      <div className="extender"></div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicLayout />}>
            <Route index element={<Hero />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="floorplan" element={<FloorPlan />} />
            <Route path="studio" element={<Studio />} />
            <Route path="townhouse" element={<TownHouse />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="amenities" element={<Amenities />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="book_apartment" element={<BookApartment />} />
            <Route path="sign_lease" element={<SignLease />} />
            <Route path="resident_login" element={<ResidentLogin />} />
            <Route path="forgot_password" element={<ForgotPassword />} />

            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>

          <Route path="/manager_login" element={<ManagerLoggedOutLayout />}>
            <Route index element={<ManagerLogin />} />
            <Route path="garden" element={<GardenManagerLogin />} />
          </Route>

          <Route path="/resident" element={<ResidentLayout />}>
            <Route index element={<Hero />} />
            <Route path="profile" element={<ResidentProfile />} />
            <Route path="register_vehicle" element={<RegisterVehicle />} />
            <Route path="check_timings" element={<AmenitiesTimings />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="chat" element={<Chat />} />
          </Route>

          <Route path="/manager" element={<ManagerLayout />}>
            <Route index element={<Hero />} />
            <Route path="home" element={<ManagerHome />} />
            <Route path="manage_visitors" element={<ManageVisitors />} />
            <Route path="manage_residents" element={<ManageResidents />} />
            <Route path="crud_managers" element={<AmenitiesManagerCRUD />} />
          </Route>

          <Route path="/visitor" element={<BasicLayout />}>
            <Route index element={<Hero />} />
            <Route path="home" element={<VisitorHome />} />
            <Route path="visitor_chat" element={<Chat />} />
            <Route path="logs_visitor" element={<VisitorLog />} />
            <Route path="directions" element={<Directions />} />
            <Route path="map" element={<Location />} />
            <Route path="register_visitor" element={<RegisterVisitor />} />
          </Route>

          <Route path="/gardenmanager" element={<GardenManagerLayout />}>
            <Route index element={<Hero />} />
            <Route path="home" element={<GardenManagerHome />} />
            <Route path="manage_visitor" element={<GMManageVisitor />} />
            <Route path="manage_resident" element={<GMManageResident />} />
            <Route path="chat" element={<GMChat />} />
          </Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
