import React from 'react'
import "../../css/section_1.css"


const Section_2 = () => {
  return (
    <>
 <div className='section-one-main-div row' style={{marginTop : "100px"}}>

 <div className='col-6 md-6 mt-6 section_one_image_main_div'> 
            <div className='section_one_image_main_child_div' >
               <img className='section_one_image' src='/main_image.webp' />
            </div>
        </div>
        
        <div className='col-6 md-6 mt-6 section-one-main-content-div'> 
           <div className='section-one-main-child-content-div'>
            <h4>Make Your Life</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged. It was popularised in 
                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including 
                  versions of Lorem Ipsum.</p>
          </div>
        </div>

       
    </div>
    </>
  )
}

export default Section_2
