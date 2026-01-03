import React from 'react';
import Layout from '../components/layout';
import RotatingHeadline from '../components/headline';
import RotatingSummary from '../components/service_summary';
import { ButtonDemo } from '../ui/cta_button';

export default function HomePage() {
  return (
    <Layout>
      <>
        <div>
        <RotatingHeadline/> 
        </div>
        <div>
        <RotatingSummary/>
        </div>
        <div>
          <p>
            We are a certified and registered supplier of high-quality construction materials and interior design solutions. Our CAC number is 
          </p>
          <p className="font-bold">7888439</p>
        </div>
        <div>
          <ButtonDemo/>
        </div>
      </>
    </Layout>
  );
}