import SocialCard from './SocialCard.js';

export default function Contact() {
    return (
        <section className="contact" id="Contact">
            <h1>Contact</h1>
            <div className="socialContainer">
                <SocialCard
                    icon='fa-brands fa-x-twitter'
                    link='https://x.com/Yso_kh'
                    val='@Yso_kh'
                />

                <SocialCard
                    icon='fa-solid fa-envelope'
                    link='mailto:YaserAlkhayyat@outlook.sa'
                    val='YaserAlkhayyat@outlook.sa'
                />

                <SocialCard
                    icon='fa-brands fa-linkedin'
                    link='https://www.linkedin.com/in/yaser-alkhayyat-382369290'
                    val='YaserAlkhayyat'
                />

                <SocialCard
                    icon='fa-brands fa-github'
                    link='https://github.com/YaserKhy'
                    val='YaserKhy'
                />

            </div>
        </section>
    );
}