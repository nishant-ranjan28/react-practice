import React from "react";

function FunctionClick() {
  const clickHandler = () => {
    console.log('Button');
  };
  return (
    <div className=' flex pt-2 pl-3 justify-center'>
      <button className='bg-blue-300 px-4 py-2' onClick={clickHandler}>
        Test
      </button>
    </div>
  );
}

export default FunctionClick;
