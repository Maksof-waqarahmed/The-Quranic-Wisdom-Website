import './index.css'
import { Link } from 'react-scroll'

import img from '../../Assesst/2 (1).jpg'
export function About() {
    return <section className="about_section">
        <h1 className='about_text'>WHO WE ARE</h1>
        <div className='about_div_container'>
            <div className='about_div_left'>
                <p className='about_para'>"At Quranic Wisdom, we believe in the transformative power of Quranic teachings. Our mission is to provide accessible and authentic online Quranic education to learners worldwide. With a team of dedicated instructors deeply rooted in Islamic scholarship and modern pedagogy, we offer comprehensive courses tailored to the needs of learners of all ages and backgrounds. Whether you're seeking to deepen your understanding of the Quran, improve your recitation skills, or instill the values of compassion and wisdom in your life, Quranic Wisdom is here to guide you on your journey of spiritual growth. Join us and embark on a path of enlightenment and enrichment through the timeless wisdom of the Quran." <br /> <br /> <span className='note_para'> Begin your Quranic journey with us today!</span></p>

                <a href='https://forms.gle/xAtCrfTsoapUyKsL9' target='_blank'>
                    <button className='register_btn'>Register Now </button>
                </a>

            </div>
            <div className='about_div_right'>
                <img className='img' src={img} />
            </div>


        </div>


    </section>
}