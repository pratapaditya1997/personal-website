import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = import.meta.env.VITE_GA_ID;

if (MEASUREMENT_ID) {
  ReactGA.initialize(MEASUREMENT_ID);
}

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Send pageview with the current path
    if (MEASUREMENT_ID) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname });
    }
  }, [location]);

  return null; // It renders nothing visually
};

export default AnalyticsTracker;
