import * as React from 'react';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />  
      <ProductHero /> 
      <ProductHowItWorks />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
