import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import AllRoutes from './routes';

const App = () =>  {
  return (
    <>
      <AllRoutes />
      <SpeedInsights />
    </>
  );
}

export default App;
