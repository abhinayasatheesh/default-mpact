
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute";




import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

import About from "./pages/About/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Faq from "./pages/faq/Faq";
import OrderSuccess from "./pages/Ordersuccess";
import Trackpage from "./pages/Trackpage";
import ProductPage from "./pages/ProductSpec";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Review from "./pages/review";
import Pay from "./pages/Pay";
import SuccessPopup from "./pages/SuccessPopup.jsx";
import HelpSupport from "./pages/HelpSupport";
import Nutrition from "./pages/blog/Nutrition.jsx"
import Blog from "./pages/blog/Blog.jsx"
import Profile from "./pages/profile/Profile";
import Prfle from "./pages/profile/Prfle";
import SeeMore from "./pages/SeeMore";
import NewProfile from "./pages/profile/Newprofile.jsx"
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import VerifyEmail from "./pages/VerifyEmail";
import WishlistPage from "./pages/Wishlist.jsx";
import Products from "./components/Products.jsx";
import ProductUpdates from "./components/ProductUpdates.jsx";
import Reports from "./components/Reports.jsx";
import Settings from "./components/Settings.jsx";
import  Skeleton from "./components/ui/Skeleton.jsx";
import  Slider  from "./components/ui/Slider.jsx";


import  Switch  from "./components/ui/switch.jsx";
import  Table  from "./components/ui/table.jsx";
import  Tabs from "./components/ui/table.jsx";
import  Textarea  from "./components/ui/textarea.jsx";
import  ToggleGroup  from "./components/ui/Toggle-Group.jsx";
import  Toggle  from "./components/ui/toggle.jsx";
import  Tooltip  from "./components/ui/Tooltip.jsx";
import Inventory  from "./components/Inventory.jsx";
import KnowledgeBase  from "./components/KnowledgeBase.jsx";
import Orders from "./components/Orders.jsx";
import PersonalSettings from "./components/PersonalSettings.jsx";
import Menubar from "./components/ui/Menubar.jsx";
import NavigationMenu from "./components/ui/Navigation-Menu.jsx";
import Pagination from "./components/ui/Pagination.jsx";
import Popover from "./components/ui/Popover.jsx";
import Progress from "./components/ui/Progress.jsx";
import RadioGroup from "./components/ui/Radio-Group.jsx";
import Resizable from "./components/ui/Resizable.jsx";
import ScrollArea from "./components/ui/Scroll-Area.jsx";
import Select from"./components/ui/select.jsx";
import Separator from "./components/ui/Separator.jsx";
import Sheet from "./components/ui/Sheet.jsx";
import Sidebar from "./components/ui/Sidebar.jsx";
import AdminLayout from './components/AdminLayout.jsx';
import Analytics from './components/Analytics.jsx';
import  Categories  from './components/Categories.jsx';
import  CMS  from './components/CMS.jsx';
import CMSEnchanced  from './components/CMSEnhanced.jsx';

import ImageWithFallback from './components/figma/ImageWithFallback.jsx';

import Accordion  from './components/ui/Accordion.jsx';
import Alert from './components/ui/Alert.jsx';
import AlertDialog from './components/ui/AlertDialog.jsx';
import AspectRatio  from './components/ui/AspectRatio.jsx';
import Avatar  from './components/ui/Avatar.jsx';
import Badge from './components/ui/Badge.jsx';
import BreadCrumb from './components/ui/BreadCrumb.jsx';
import Button from './components/ui/button.jsx';
import Calender  from './components/ui/Calender.jsx';
import Card  from './components/ui/Card.jsx';
import Carousel  from './components/ui/Carousel.jsx';
import Chart  from './components/ui/Chart.jsx';




import  AdsBanner  from "./components/AdsBanner.jsx";
import  Coupons from "./components/Coupons.jsx";
import  Customers  from "./components/Customers.jsx";
import  Dashboard  from "./components/Dashboard.jsx";
import  Inbox  from "./components/Inbox.jsx";


import Checkbox  from "./components/ui/checkbox.jsx";
import  Collapsible  from "./components/ui/collapsible.jsx";
import  Command from "./components/ui/Command.jsx";
import  ContextMenu  from "./components/ui/Context-Menu.jsx";
import  Dialog  from "./components/ui/dialog.jsx";
import Drawer  from "./components/ui/Drawer.jsx";
import  DropdownMenu  from "./components/ui/DropDown-Menu.jsx";
import  Form from "./components/ui/Form.jsx";
import  HoverCard  from "./components/ui/Hover-Card.jsx";
import  InputOTP  from "./components/ui/Input-Otp.jsx";
import  Input from "./components/ui/input.jsx";
import Label  from "./components/ui/label.jsx";



function App() {
  const [loading, setLoading] = useState(true);


  return (
    <>
      {/* NAVBAR IS ALWAYS MOUNTED */}
      <Navbar />

      <ScrollToTop />

      {/* LOADER OVERLAY */}
      {loading && <Loader onFinish={() => setLoading(false)} />}


      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#262626",
            color: "#facc15",
            border: "1px solid #facc15",
          },
        }}
      />

      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/seeMore" element={<SeeMore />} />
          <Route path="/productspec/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/profile" element={<NewProfile />} /> */}
       
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <NewProfile />
              </PrivateRoute>
            }
          />


          {/* AdminLayout */}
 
          <Route path="/adminLayout"element={<AdminLayout />} />
          <Route path="/products"element={<Products/>}/>
          <Route path="/productupdates"element={<ProductUpdates/>}/>
          <Route path="/reports"element={<Reports/>}/>
          <Route path="/settings"element={<Settings/>}/>

          <Route path="/skeleton"element={<Skeleton/>}/>
          <Route path="/slider"element={<Slider/>}/>
          
          <Route path="/sonner"element={<Sonner/>}/>
         
          <Route path="/switch"element={<Switch/>}/>
          <Route path="/table"element={<Table/>}/>
          <Route path="/tabs"element={<Tabs/>}/>
          <Route path="/textarea"element={<Textarea/>}/>
          <Route path="/toggle-group"element={<ToggleGroup/>}/>
          <Route path="/toggle"element={<Toggle/>}/>
          <Route path="/tooltip"element={<Tooltip/>}/>
          
          <Route path="/use-mobile"element={<Use-Mobile/>}/>
          
          <Route path="/utils"element={<Utils/>}/>
          
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/knowledgebase" element={<KnowledgeBase />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/personalsettings" element={<PersonalSettings />} />
          <Route path="/analytics"element={<Analytics />} />
          <Route path="/categories"element={<Categories />} />
          <Route path="/cms"element={<CMS />} />
          <Route path="/cmsenhanced"element={<CMSEnchanced />} />

          
          <Route path="/imagewithfallback"element={<ImageWithFallback />} />


          <Route path="/accordion"element={<Accordion />} />
          <Route path="/alert"element={<Alert />} />
          <Route path="/alertdialog"element={<AlertDialog />} />
          <Route path="/aspectratio"element={<AspectRatio/>} />
          <Route path="/avatar"element={<Avatar />} />
          <Route path="/badge"element={<Badge />} />
          <Route path="/breadcrumb"element={<BreadCrumb />} />
          <Route path="/button"element={<Button />} />
          <Route path="/calender"element={<Calender />} />
          <Route path="/card"element={<Card />} />
          <Route path="/carousel"element={<Carousel />} />
          <Route path="/chart"element={<Chart />} />

         <Route path="/help" element={<HelpSupport />} />
         <Route path="/payment" element={<Payment />} />
          <Route path="/menubar" element={<Menubar />} />
          <Route path="/navigation-menu" element={<NavigationMenu />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/popover" element={<Popover />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/radio-group" element={<RadioGroup />} />
          <Route path="/resizable" element={<Resizable />} />
          <Route path="/scroll-area" element={<ScrollArea />} />
          <Route path="/select" element={<Select />} />
          <Route path="/seperator" element={<Separator />} />
          <Route path="/sheet" element={<Sheet />} />
          <Route path="/slidebar" element={<Sidebar />} />

          <Route path="/adsbanner" element={<AdsBanner/>}/>
          <Route path="/coupons" element={<Coupons/>}/>
           <Route path="/customers" element={<Customers/>}/>
           <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/inbox" element={<Inbox/>}/>


            <Route path="/checkbox" element={<Checkbox/>}/>
            <Route path="/collapsible" element={<Collapsible/>}/>
            <Route path="/command" element={<Command/>}/>
            <Route path="/context-menu" element={<ContextMenu/>} />
            <Route path="/dialog" element={<Dialog/>}/>
            <Route path="/drawer" element={<Drawer/>}/>
            <Route path="/dropdown-menu" element={<DropdownMenu/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/hover-card" element={<HoverCard/>}/>
            <Route path="/input-otp" element={<InputOTP/>}/>
            <Route path="/input" element={<Input/>}/>
            <Route path="/label" element={<Label/>} />
       
            










          <Route path="/help" element={<HelpSupport />} />


          <Route path="/payment" element={<Payment />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/trackorder" element={<Trackpage />} />
          <Route path="/review" element={<Review />} />
          <Route path="/popup" element={<SuccessPopup />} />
          




          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/Nutrition" element={<Nutrition />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/wishlist" element={<WishlistPage/>} />




        </Routes>
      </div>


    </>
  );
}

export default App;
