import './ChooseUs.css'

import crossPlatformImg from '../Assesst/cross plat foam.jpg'
import techSupportImg from '../Assesst/Tech Support.jpg'
import onlineClassesImg from '../Assesst/Online Class.jpg'
import courseMaterialImg from '../Assesst/Course Material.jpg'
import awardingImg from '../Assesst/award.jpg'
import quranCultureImg from '../Assesst/Duranic Culture.jpg'

export function ChooseUs() {
    return (
        <section className='chooseUs_section'>
            <h2 className='choose_title'>Why Choose Us?</h2>
            <h2 className='choose_heading'>What services do we provide?
            </h2>
            <div className='card_container_chooseUs'>
                <div className="card_choose">
                    <div className="icon_choose ">
                        <img className='chooseImg' src={crossPlatformImg} />
                    </div>
                    <h3 className='heading_card_choose'>Cross-Platform & Multimedia</h3>
                    <p className='para_card_choose'>Cross-Platform Learning: website and apps on PC and smart phones</p>
                </div>

                <div className="card_choose">
                    <div className="icon_choose">
                        <img className='chooseImg' src={techSupportImg} />
                    </div>
                    <h3 className='heading_card_choose' >Full-Time Technical Support</h3>
                    <p className='para_card_choose'>Academic and Technical Support: Available until graduation</p>
                </div>

                <div className="card_choose">
                    <div className="icon_choose">
                        <img className='chooseImg' src={onlineClassesImg} />
                    </div>
                    <h3 className='heading_card_choose'>Interactive Online Classes</h3>
                    <p className='para_card_choose'>Developing the Quranic Culture, Socialization and Communication</p>
                </div>

            </div>
            <div className='card_container_chooseUs'>
                <div className="card_choose ">
                    <div className="icon_choose">
                        <img className='chooseImg' src={awardingImg} />
                    </div>
                    <h3 className='heading_card_choose'>Awarding Genuine Certification</h3>
                    <p className='para_card_choose'>Awarding Genuine Certifications from England after course completion</p>
                </div>

                <div className="card_choose ">
                    <div className="icon_choose">
                        <img className='chooseImg' src={courseMaterialImg} />
                    </div>
                    <h3 className='heading_card_choose'>Multilingual Course Materials
                    </h3>
                    <p className='para_card_choose'>Multilingual course contents and a variety of Multimedia content
                    </p >
                </div>

                <div className="card_choose">
                    <div className="icon_choose">
                        <img className='chooseImg' src={quranCultureImg} />
                    </div>
                    <h3 className='heading_card_choose'>Developing The Quranic Culture
                    </h3>
                    <p className='para_card_choose'>Selected male and female educators, teaching you in online sesssions

                    </p>
                </div>


            </div>
            <div className='institute_overView_Div'>
                <div className='classes_div_institute'>
                    <h1 className='heading_best_Edu'>Need Help To Choose The Best Learning Path ?
                    </h1>
                    <div className='class_multiple_divs'>
                        <div className='class_div'>
                            <h3>4,000+</h3>
                            <p>Students</p>
                        </div>
                        <div className='class_div'>
                            <h3>12</h3>
                            <p>Years</p>
                        </div>
                        <div className='class_div'>
                            <h3>190+</h3>
                            <p>Nationality</p>
                        </div>
                    </div>
                    <div className='class_multiple_divs'>
                        <div className='class_div'>
                            <h3>200+</h3>
                            <p>Classes</p>
                        </div>
                        <div className='class_div'>
                            <h3>95+</h3>
                            <p>Courses</p>
                        </div>
                        <div className='class_div'>
                            <h3>110+</h3>
                            <p>Colleagues</p>
                        </div>

                    </div>
                </div>



            </div>
        </section>
    )
}

