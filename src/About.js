export default function About() {
    return (
    <section className="about w-100" id="About">
        <div className="desc">
            <h3 className="fw-light">Hello, I'm Yaser</h3>
            <h1>Front-End Developer</h1>
            <h3>I develop and design inspiring interfaces</h3>
            <a href="#Contact" className="btn btn-primary">Contact Me</a>
        </div>
        <div id="circle"><img src={`${process.env.PUBLIC_URL}/codingpic.svg`} alt="codingPic"/></div>
    </section>
    );
}