export default function Header() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand text-uppercase fs-4" href="#About">Yaser Alkhayyat</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link fs-6" aria-current="page" href="#About">About</a>
                        <a className="nav-link fs-6" href="#Skills">Skills</a>
                        {/* <a className="nav-link fs-6" href="#Projects">Projects</a> */}
                        <a className="nav-link fs-6" href='#Contact'>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}