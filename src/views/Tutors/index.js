import './index.css'
import { Link } from 'react-scroll'
import img from '../../Assesst/56.png'

export function Tutors(){
    return (
        <section className='tutors_section'>
            <h1 className='tutors_text'>TUTORS</h1>

            <div className='tutors_div_container'>
            <div className='tutors_div_left'>
                <h2 className='tutors_us_text'>Acquire the services of a highly skilled and reputable Online Quran tutor.</h2>
                <p className='tutors_para'>Embark on a transformative journey of Quranic education with our skilled online tutors. Experience comprehensive learning encompassing Quranic recitation, Tajweed mastery, and profound comprehension—all from the comfort of your home. Unlock the depths of Quranic wisdom as you engage with our proficient educators. <br/> <br/> <span className='noted'> Start your holistic learning journey today. </span> </p>

                {/* <Link className='anchor_tag'> <button className='register_btn'>Register Now </button></Link> */}
            </div>
            <div className='tutors_div_right'>
                <img src={img} className='img_right' />

            </div>
        </div>

        </section>
    )
}