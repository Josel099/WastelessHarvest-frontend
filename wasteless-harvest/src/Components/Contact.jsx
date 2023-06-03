import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='contact_info'>
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
                <div className='contact_info_item d-flex justify-content-start align-item-center'>
                    <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone' />
                    <div className='contact_info_content'>
                    <div className='contact_info_title'>
                        phone
                    </div>
                    <div className='contact_info_text'>
                        +9087654359
                    </div>
                </div>
              </div>

                <div className='contact_info_item d-flex justify-content-start align-item-center'>
                    <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone' />
                    <div className='contact_info_content'>
                    <div className='contact_info_title'>
                       email
                    </div>
                    <div className='contact_info_text'>
                       neethu@gmail.com
                    </div>
                </div>
             </div>

                <div className='contact_info_item d-flex justify-content-start align-item-center'>
                    <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone' />
                    <div className='contact_info_content'>
                    <div className='contact_info_title'>
                        Address
                    </div>
                    <div className='contact_info_text'>
                       kollam,kerala
                    </div>
                </div>
                </div>
                </div>

        </div>
         </div>
         </div>
       


       {/*contact as form */}

       <div className='contact_form'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-10 offset-ls-1'>
                    <div className='contact_form_container py-5'>
                        <div className='contact_form_title'>
                            Get in touch
                        </div>
                        <form id='contact_form'>
                            <div className='contact_form_name d-flex justify-content-between align-item-between'>
                              <input type='text' id='contact_form_name' placeholder='your name' required='true' />
                              <input type='email' id='contact_form_email' placeholder='your email' required='true' />
                              <input type='number' id='contact_form_phone' placeholder='your number' required='true' />
                            </div>
<div className='contact_form_text'>
    <textarea className='text_field contact_form_message' placeholder
    ='message' cols='30' rows='10'></textarea>
</div>
<div className='contact_form_button'>
    <button type='submit' className='button contact_submit_button'>Send msg
    </button>

</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Contact
