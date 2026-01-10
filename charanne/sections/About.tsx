
import { FounderSection } from "../components/founders_section";
import Layout from "../components/layout";
import {MapSection} from "../components/getdirections";
export default function About() {
  return (
    <Layout>
        <section id="about" className="py-16 bg-white">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Meet our Founders</h1>
        <FounderSection/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">About Charanne Limited</h2>
        <p className="text-lg text-gray-700 mb-4">
          Charanne Limited is a leading supplier of high-quality construction materials and interior design solutions. With years of experience in the industry, we pride ourselves on delivering exceptional products and services to our clients.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our extensive range of building materials includes Polystyrene sheets, fasteners, bond gums, and more, all sourced from trusted manufacturers to ensure durability and performance. In addition to our construction supplies, we offer a professional interior division specializing in bespoke furniture, POP ceiling installations, and fire-proof finishes.
        </p>
        <p className="text-lg text-gray-700">  
            At Charanne Limited, we are committed to quality, reliability, and customer satisfaction. Our team of experts works closely with clients to understand their unique needs and provide tailored solutions that exceed expectations. Whether you're embarking on a new construction project or looking to enhance your interior spaces, Charanne Limited is your trusted partner for premium building solutions.
        </p>
        
      </div>
      <MapSection/>
    </section>
    </Layout>
    
  );
}             