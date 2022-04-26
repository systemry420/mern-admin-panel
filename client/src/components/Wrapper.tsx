import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class Wrapper extends Component<any, any> {
  render() {
    return (
        <>
            <Navbar />
    
            <div className='container-fluid'>
            <Sidebar />
            <main className='container col-9'>
                {this.props.children}
            </main>
            </div>
        </>
      )
  }
}

export default Wrapper