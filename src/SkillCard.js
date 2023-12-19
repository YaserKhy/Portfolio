export default function SkillCard({ icon, title, desc }) {
    return (
        <div className="card">
            <i className={`${icon} card-image-top`} id='skillpic' style={{ color: '#252bc1' }} />
            <div className="card-body">
                <h4 style={{textAlign:'center'}}>{title}</h4>
                <p className="card-text" style={{textAlign:'center'}}>{desc}</p>
            </div>
        </div>
    )
}