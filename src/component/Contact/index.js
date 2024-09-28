import './index.css';

import facebook_img from '../../Assesst/facebook.png';
import instagram_img from '../../Assesst/instagram.png';
import twitter_img from '../../Assesst/twitter.png';
import payment from '../../Assesst/payment.png'

export default function Contact() {
    return (
        <section id='contact' className='contact_section'>
            <h2 className='contact_title'>Contact Us</h2>
            <form
                className='contact_form'
                action="https://formsubmit.co/ ceaa58e8a45b3f31a61efd8dbcc89721"
                method="POST"
            >
                <input className='name' type='text' placeholder='Your Name' name='your_name' />
                <input className='email' type='email' placeholder='Your Email' name='your_email' />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' className='submit_btn'>Submit</button>

                <div className='links'>
                    <a target='_blank' rel="noreferrer" href='https://www.facebook.com/profile.php?id=61561908502530'>
                        <img src={facebook_img} alt='Facebook' className='link' />
                    </a>
                    <a target='_blank' rel="noreferrer" href='https://www.instagram.com/the_quranic_wisdomm?igsh=eGUyN2UyYjVhM2xw&utm_source=qr'>
                        <img src={instagram_img} alt='Instagram' className='link' />
                    </a>
                    <a target='_blank' rel="noreferrer" href='#'>
                        <img src={twitter_img} alt='Twitter' className='link' />
                    </a>
                </div>
                <div>
    <img src={payment} alt="Payment Methods" className="payment_img" />
</div>
            </form>
        </section>
    );
}
