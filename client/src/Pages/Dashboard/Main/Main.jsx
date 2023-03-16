import { React } from 'react'
import './main.css'
import Projects from '../../../Components/Projects/Projects'

export default function Main ({ projects, loading }) {
  return <Projects projects={projects} loading={loading} />
}
