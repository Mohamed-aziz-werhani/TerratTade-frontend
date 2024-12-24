import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./offer.css"

const Offer = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Create your Offer' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='ref property' />
            </div>
            <div>
              <input type='text' placeholder='status' />
              <input type='text' placeholder='number of parts' />
            </div>
            <input type='file' placeholder='offer Photo' />
            <textarea cols='30' rows='10' placeholder="description"></textarea>
            {/**/}
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Offer
