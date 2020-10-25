import React, { Component } from 'react'

class ClassClick extends Component {

  clickHandler =() => {
    console.log('click me')
  }
  
  render() {
    return (
      <div className=' flex pt-2 pl-3 justify-center'>
        <button className='bg-blue-300 px-4 py-2' onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
