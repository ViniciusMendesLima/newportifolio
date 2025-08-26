import { ProjectCard } from "../components/ProjectCard"
import { ProjectsData } from "../data/ProjectsData"

const Projects = () => {
    return (
        <section>
            <h2>Projetos</h2>
            <div>
            <ProjectCard projects={ProjectsData}/>
            </div>
        </section>
    )
}

export {Projects}

