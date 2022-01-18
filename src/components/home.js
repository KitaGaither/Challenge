import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

function Home() {
  return (
    <React.Fragment>
      <div className='homepage-div'>
      </div>
      <ReactTypingEffect
        text={["-Software Engineer"]}
      />
    </React.Fragment>
  );
}

export default Home;
