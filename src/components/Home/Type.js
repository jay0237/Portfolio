import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Don't have your business website?",
          "Don't worry i am here",
          "to make your Website Creative and Unique",
          "So Let's connect with me!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
