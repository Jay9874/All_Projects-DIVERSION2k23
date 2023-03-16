import CreateProject from '../../../Components/CreateProject/CreateProject'
import AddStudent from '../../../Components/AddStudent/AddStudent'
import Projects from '../../../Components/Projects/Projects'
import './main.css'

export default function Main ({ view, loggedUser, projects, loading }) {
  return (
    <div className='dash-proj-container'>
      <div className='proj-container'>
        {view === 'addProject' ? (
          <CreateProject loggedUser={loggedUser} />
        ) : view === 'addStudent' ? (
          <AddStudent loggedUser={loggedUser} />
        ) : (
          <Projects loggedUser={loggedUser} projects={projects} />
        )}
      </div>
    </div>
  )
}
