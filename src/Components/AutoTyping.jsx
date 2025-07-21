// src/components/AutoTyping.jsx
import React from 'react';
import Typewriter from 'typewriter-effect';

const AutoTyping = () => {
  return (
    <div className="text-white text-2xl font-bold">
      <Typewriter
        options={{
          strings: ['Frontend Developer', 'React Enthusiast', 'Freelancer'],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default AutoTyping;
