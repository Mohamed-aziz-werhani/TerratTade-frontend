import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./property.css"

const Property = () => {
  return (
    <>
      <section className='property mb'>
        <Back name='Contact Us' title='Create your Property' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='ref' />
              <input type='text' placeholder='username' />
            </div>
            <div>
              <input type='text' placeholder='type' />
              <input type='text' placeholder='location' />
            </div>
            <div>
              <input type='text' placeholder='surface' />
              <input type='text' placeholder='parts' />
            </div>
            <div>
              <input type='text' placeholder='price of all the parts' /> </div>
            {/*<input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>*/}
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Property
