import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../sections/homepage'
import About from '../sections/About'
import ContactForm from '../components/inquiry_form'
import OurProcess from '../sections/Our-process'
import ProductCarousel from '../sections/our-products'
import './App.css'
// import { Helmet } from 'react-helmet-async';

function App() {
  // const schemaData = {
  //   "@context": "https://schema.org",
  //   "@type": "LocalBusiness",
  //   "name": "Charanne Limited",
  //   "image": "https://yourwebsite.com/logo.png",
  //   "@id": "https://charannelimited.com",
  //   "url": "https://charannelimited.com",
  //   "telephone": "+2348033562978",
  //   "address": {
  //     "@type": "PostalAddress",
  //     "streetAddress": "MKK Plaza, opposite Gudu Market",
  //     "addressLocality": "Gudu",
  //     "addressRegion": "FCT Abuja",
  //     "postalCode": "900104",
  //     "addressCountry": "NG"
  //   },
  //   "geo": {
  //     "@type": "GeoCoordinates",
  //     "latitude": 9.0065, 
  //     "longitude": 7.4675
  //   },
  //   "openingHoursSpecification": {
  //     "@type": "OpeningHoursSpecification",
  //     "dayOfWeek": [
  //       "Monday",
  //       "Tuesday",
  //       "Wednesday",
  //       "Thursday",
  //       "Friday",
  //       "Saturday"
  //     ],
  //     "opens": "08:00",
  //     "closes": "18:00"
  //   },
  //   "sameAs": [
      
  //     "https://wa.me/2348033562978"
  //   ]
  // };

  return (
    <>
      {/* <Helmet>
        <title>Charanne Limited | Premium Building Materials & Interiors Abuja</title>
        <meta name="description" content="Direct importers of industrial building materials, bespoke furniture, and interior designs in Abuja. Visit us at MKK Plaza, Gudu." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>Page Not Found</div>} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/inquiryform" element={<ContactForm />} />
          <Route path="/productcarousel" element={<ProductCarousel />} />
        </Routes> 
      </Router>
    </>
  )
}

export default App