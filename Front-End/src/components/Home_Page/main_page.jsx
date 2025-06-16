import React from 'react'
import Header from './header'
import Section_1 from './Section_1'
import Section_2 from './Section_2'

const Main_page = () => {
  return (
    <div>
      {/* <div className='col-12 col-sm-12 col-md-12 mt-12'> */}
            <Header />
      {/* </div>
      <div className='col-12 col-sm-12 col-md-12 mt-12'> */}
         <Section_1 />

         <Section_2 />
      {/* </div> */}
    </div>
  )
}

export default Main_page
