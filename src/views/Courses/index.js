import './index.css'
import c1 from '../../Assesst/C 1.jpg'
import c2 from '../../Assesst/C 2.jpg'
import c3 from '../../Assesst/C 3.jpg'
import c4 from '../../Assesst/C 4.jpg'
import c5 from '../../Assesst/C 5.jpg'
import c6 from '../../Assesst/C 6.jpg'
import c7 from '../../Assesst/C 7.jpg'
import whatsappLogo from '../../Assesst/whatsapp.png'
export function Courses() {
    return (
        <section className="courses_section">
            <h1 className='courses_title'>COURSES</h1>
            <h1 className= 'main_heading' >What we offer</h1>
            <div className='card_container'>

                <div class="card project_card color1">
                    <div className='card'></div>
                    <div className='card_img'>
                    <img src={c1} alt='' />
                    </div>
                    <div className='card_content'>
                    <h2>Sweet Quran <br/> "For Kids" </h2>
                        <p>Delve into the Holy Quran with bite-sized chapters paired with engaging activities like games, stories, crafts, and painting. Explore spirituality in a fun-filled, interactive way!</p>
                        <a target='_blank' href= 'https://wa.me/3460836870'> <img src={whatsappLogo}/> </a>
                    </div>
                </div>

                <div class="project_card color2">
                    <div className='card'></div>
                    <div className='card_img'>
                        <img src={c2} alt='' />
                    </div>
                    <div className='card_content'>
                        <h2> Quran Reading <br/> "For Kids"</h2>
                        <p>Discover the Arabic alphabet and Quranic recitation basics through playful storytelling, crafts, and animal adventures. Imprint letter shapes and sounds in young minds with fun and creativity!</p>
                        <a target='_blank' href= 'https://wa.me/3460836870'> <img src={whatsappLogo}/> </a>
                    </div>
                </div>

                <div class="card project_card color3">
                    <div className='card'></div>
                    <div className='card_img'>
                    <img src={c3} alt='' />
                    </div>
                    <div className='card_content'>
                    <h2>Juz Amma Memorisation <br/> "For Kids" </h2>
                        <p>Unlock the memorization of Juz Amma, spanning Surah Naba to the Quran's conclusion, through our specialized course.</p>
                        <a target='_blank' href= 'https://wa.me/3460836870'> <img src={whatsappLogo}/> </a>
                    </div>
                </div>

                <div class="card project_card color4">
                    <div className='card'></div>
                    <div className='card_img'>
                    <img src={c4} alt='' />
                    </div>
                    <div className='card_content'>
                    <h2>Quranic Stories <br/> "For Kids"</h2>
                        <p>This course pairs prophet stories with related concepts, blending learning with fun. Kids engage with Allah's attributes, animated tales, poems, crafts, and coloring for an enriching experience.</p>
                        <a target='_blank' href= 'https://wa.me/3460836870'> <img src={whatsappLogo}/> </a>
                    </div>
                </div>

                <div class="card project_card color5">
                    <div className='card'></div>
                    <div className='card_img'>
                    <img src={c5} alt='' />
                    </div>
                    <div className='card_content'>
                    <h2>Quran Reading <br/> "For Youth & Adults"</h2>
                        <p>This course covers Arabic alphabet, Tanwin, Tashdid, Hamzat-ul-Wasl, disjointed letters, Ilteqa-us-sakinanyn, and pronunciation rules, both theoretically and practically.</p>
                        <a target='_blank' href= 'https://wa.me/3460836870'> <img src={whatsappLogo}/> </a>
                    </div>
                </div>

                <div class="card project_card color6">
                    <div className='card'></div>
                    <div className='card_img'>
                    <img src={c6} alt='' />
                    </div>
                    <div className='card_content'>
                    <h2>Tajwid in Quran Recitation <br/> "For Youth & Adults"</h2>
                        <p>This course focuses on the authentic recitation principles of the Holy Quran, employing innovative methods and specialized insights to reflect its original revelation style.</p>
                        <a target='_blank' href= 'https://wa.me/3460836870' > <img src={whatsappLogo} className='whatsapp'/> </a>
                    </div>
                </div>

                <div class="card project_card color7">
                    <div className='card'></div>
                    <div className='card_img'>
                    <img src={c7} alt='' />
                    </div>
                    <div className='card_content'>
                    <h2> Full Memorisation of the Holy Quran "For Youth & Adults" <br/> </h2>
                        <p>Master the Holy Quran swiftly and accurately through our course, led by skilled teachers, aiming for full memorization in the shortest time possible.</p>
                        <a target='_blank' href= 'https://wa.me/3460836870' > <img src={whatsappLogo} className='whatsapp'/> </a>
                    </div>
                </div>

            </div>


        </section>
    )
}