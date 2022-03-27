import React, { Suspense } from 'react'

import Loader from './components/Loader';


const Routing = React.lazy(() => import('./Routing'))

function App() {
  return (
    <>
    <Suspense fallback={<Loader />}>
      <Routing />
    </Suspense>
    </>
  );
}

export default App;