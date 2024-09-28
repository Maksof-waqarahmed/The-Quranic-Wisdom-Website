import './ChooseUs.css'

import crossPlatformImg from '../Assesst/cross plat foam.jpg'
import techSupportImg from '../Assesst/Tech Support.jpg'
import onlineClassesImg from '../Assesst/Online Class.jpg'
import courseMaterialImg from '../Assesst/Course Material.jpg'
import awardingImg from '../Assesst/award.jpg'
import quranCultureImg from '../Assesst/Duranic Culture.jpg'

export function ChooseUs() {
    return (
        <section className='chooseUs_section1'>
            <h2 className='choose_title1'>Why Choose Us?</h2>
            <h2 className='choose_heading1'>What services do we provide?
            </h2>
            <div className='card_container_chooseUs1'>
                <div className="card_choose1">
                    <div className="icon_choose1 ">
                        <img className='chooseImg1' src={crossPlatformImg} />
                    </div>
                    <h3 className='heading_card_choose'>Cross-Platform & Multimedia</h3>
                    <p className='para_card_choose'>Cross-Platform Learning: website and apps on PC and smart phones</p>
                </div>

                <div className="card_choose1">
                    <div className="icon_choose1">
                        <img className='chooseImg1' src={techSupportImg} />
                    </div>
                    <h3 className='heading_card_choose1' >Full-Time Technical Support</h3>
                    <p className='para_card_choose1'>Academic and Technical Support: Available until graduation</p>
                </div>

                <div className="card_choose1">
                    <div className="icon_choose1">
                        <img className='chooseImg1' src={onlineClassesImg} />
                    </div>
                    <h3 className='heading_card_choose1'>Interactive Online Classes</h3>
                    <p className='para_card_choose1'>Developing the Quranic Culture, Socialization and Communication</p>
                </div>

            </div>
            <div className='card_container_chooseUs1'>
                <div className="card_choose1 ">
                    <div className="icon_choose1">
                        <img className='chooseImg1' src={awardingImg} />
                    </div>
                    <h3 className='heading_card_choose1'>Awarding Genuine Certification</h3>
                    <p className='para_card_choose1'>Awarding Genuine Certifications from England after course completion</p>
                </div>

                <div className="card_choose1 ">
                    <div className="icon_choose1">
                        <img className='chooseImg1' src={courseMaterialImg} />
                    </div>
                    <h3 className='heading_card_choose1'>Multilingual Course Materials
                    </h3>
                    <p className='para_card_choose1'>Multilingual course contents and a variety of Multimedia content
                    </p >
                </div>

                <div className="card_choose1">
                    <div className="icon_choose1">
                        <img className='chooseImg1' src={quranCultureImg} />
                    </div>
                    <h3 className='heading_card_choose1'>Developing The Quranic Culture
                    </h3>
                    <p className='para_card_choose1'>Selected male and female educators, teaching you in online sesssions

                    </p>
                </div>


            </div>
            <div className='institute_overView_Div1'>
                <div className='classes_div_institute1'>
                    <h1 className='heading_best_Edu1'>Need Help To Choose The Best Learning Path ?
                    </h1>
                    <div className='class_multiple_divs1'>
                        <div className='class_div1'>
                            <h3>4,000+</h3>
                            <p>Students</p>
                        </div>
                        <div className='class_div1'>
                            <h3>12</h3>
                            <p>Years</p>
                        </div>
                        <div className='class_div1'>
                            <h3>190+</h3>
                            <p>Nationality</p>
                        </div>
                    </div>
                    <div className='class_multiple_divs1'>
                        <div className='class_div1'>
                            <h3>200+</h3>
                            <p>Classes</p>
                        </div>
                        <div className='class_div1'>
                            <h3>95+</h3>
                            <p>Courses</p>
                        </div>
                        <div className='class_div1'>
                            <h3>110+</h3>
                            <p>Colleagues</p>
                        </div>

                    </div>
                </div>



            </div>
        </section>
    )
}

