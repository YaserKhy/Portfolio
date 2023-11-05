export default function SkillCard({icon,title,desc}) {
    return (
        <div className="card">
            <div className="icon">
                <i className = {icon} style={{color : '#252bc1'}}></i>
            </div>

            <div className="info">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}