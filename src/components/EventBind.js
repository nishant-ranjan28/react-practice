import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler = () => {
    this.setState({
      message: "Good bye",
    });
  };

  render() {
    return (
      <div className='flex pt-2 pl-3 justify-center'>
        <div>
          {/* <div className='text-lg'>{this.state.message}</div> */}

          {/* 1. Below apporach is called binding in render */}

          {/* <button
            className='bg-blue-300 px-4 py-2'
            onClick={this.clickHandler.bind(this)}
          >
            Click me to change
          </button> */}

          {/* 2. Below apporach is called  arrow function in render*/}

          {/* <button
            className='bg-blue-300 px-4 py-2'
            onClick={() => this.clickHandler()}
          >
            Click me to change
          </button> */}

          {/* 3. Below approach is called binding in class constructor */}

          {/* <button
            className='bg-blue-300 px-4 py-2'
            onClick={this.clickHandler}
          >
            Click me to change
          </button> */}

          {/* 4. below method is called Arrow function as class property */}
          <button className='bg-blue-300 px-4 py-2' onClick={this.clickHandler}>
            Click me to change
          </button>
        </div>
      </div>
    );
  }
}

export default EventBind;
