import React from "react";

//Desctructuring
//const Greet = ({name, heroName, children}) => {
const Greet = (props) => {
  const { name, heroName, children } = props;
  return (
    <div>
      <h1 className='text-blue-600'>
        {" "}
        Hello {name} a.k.a {heroName}
      </h1>
      {children}
    </div>
  );
};

export default Greet;
