import './index.css'
import { Link } from 'react-scroll'
import WhatsAppChat from '../../component/WhatsappChat/whatsapp'

import img from '../../Assesst/01 c.png'
export function HeroSection() {
    return (
        <section className='intro_secion'>
            <div className='intro_text_div'>

                <div className='intro_name_div'>
                    <span className='intro_name'>Learn Quran Online With Tajweed</span>
                </div>

                <div className='intro_para_div'>
                    <p className='intro_para'>Embark on a journey of spiritual growth with our thorough Online Quran instruction in the United States. Our specialized Quran lessons cater to learners of all ages, and we offer both male and female online Quran instructors for both children and adults.</p>
                </div>
                <div className='intro_btn_div'>
                        <a href='https://forms.gle/xAtCrfTsoapUyKsL9' target='_blank'>
                            <button className='trial_btn'>1 Week Free Trial</button>
                        </a>
                </div>
            </div>


            <div className='intro_img_div'>
                <img src={img} alt='img' className='bg' />
            </div>

            <WhatsAppChat />


        </section>
    )
}