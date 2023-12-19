import SocialCard from './SocialCard.js';

export default function Contact() {
    return (
        <section className="contact" id="Contact">
            <h1 className='text-center'>Contact</h1>
            <div className="container text-center" id='contactContainer'>
                <div className="row">
                    <div className="col">
                        <SocialCard
                            icon='fa-brands fa-linkedin'
                            link='https://www.linkedin.com/in/yaser-alkhayyat-382369290'
                            val='YaserAlkhayyat'
                        />
                    </div>
                    <div className="col">
                        <SocialCard
                            icon='fa-solid fa-envelope'
                            link='mailto:YaserAlkhayyat@outlook.sa'
                            val='YaserAlkhayyat@outlook.sa'
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <SocialCard
                            icon='fa-brands fa-github'
                            link='https://github.com/YaserKhy'
                            val='YaserKhy'
                        />
                    </div>
                    <div className="col">
                        <SocialCard
                            icon='fa-brands fa-x-twitter'
                            link='https://x.com/Yso_kh'
                            val='@Yso_kh'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}