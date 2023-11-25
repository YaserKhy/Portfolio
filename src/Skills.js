import '@fortawesome/fontawesome-free/css/all.min.css';
import SkillCard from "./SkillCard";

export default function Skills() {
    return (
        <section className="skills" id="Skills">
        <h1>Skills</h1>
        <div className="cardsContainer">
            <SkillCard
                icon='fa-solid fa-people-group'
                title='Teamwork'
                desc="Effective team player who can easily fit in."
            />

            <SkillCard
                icon='fa-regular fa-hourglass-half'
                title='Time Management'
                desc="Able to manage my time and daily tasks."
            />

            <SkillCard
                icon='fa-solid fa-comments'
                title='Fast Communication'
                desc="Express my ideas in an understandable manner."
            />
        </div>
    </section>
    );
}