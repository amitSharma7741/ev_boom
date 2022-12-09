import React from 'react'

const ContactUs = () => {
  return (
    <>
    <div className="contact-us">
        <div className="contact-us__container">
            <div className="contact-us__container__left">
                <div className="contact-us__container__left__title">
                    <h1>Get in touch</h1>
                </div>
                <div className="contact-us__container__left__form">
                    <form>
                        <div className="contact-us__container__left__form__input">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="contact-us__container__left__form__input">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="contact-us__container__left__form__input">
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div className="contact-us__container__left__form__input">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
                        <div className="contact-us__container__left__form__input">
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contact-us__container__right">
                <div className="contact-us__container__right__title">
                    <h1>Our Location</h1>
                </div>
                <div className="contact-us__container__right__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.473863132851!2d3.379236314769809!3d6.524356995014851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f7f0f4b5a0d%3A0x4f8a2b2b2b2b2b2b!2sThe%20Hub%20Nigeria!5e0!3m2!1sen!2sng!4v1617721240009!5m2!1sen!2sng" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>

     


    
    </>
  )
}

export default ContactUs