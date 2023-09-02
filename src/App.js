import React from 'react';
import Navbar from './component/Navbar';
import Content from './component/Content';
import Cards from './component/Cards';


function App() {
  return (
    <div className='relative'>
      <Navbar/>
      <Content/>
      <Cards/>
      {/* Your other content */}
    </div>
  );
}

export default App;
