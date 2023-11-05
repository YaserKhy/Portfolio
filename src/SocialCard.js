export default function SocialCard({icon,link,val}) {
    return (
        <div className="social">
            <div className="socialLogo">
                <i className={icon} style={{color:'#252bc1'}}></i>
            </div>

            <div className="socialLink">
                <a href={link} target="_blank" rel="noreferrer">{val}</a>
            </div>
        </div>
    )
}