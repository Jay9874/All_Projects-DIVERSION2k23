const sidebarLinks = [
  {
    name: 'All Projects',
    icon: 'flight',
    view: 'all'
  },
  {
    name: 'AeroDynamics',
    icon: 'flight',
    view: 'Aerodynamics'
  },
  {
    name: 'Mechanics',
    icon: 'precision_manufacturing',
    view: 'Mechanics'
  },
  {
    name: 'Electronics',
    icon: 'precision_manufacturing',
    view: 'Electronics'
  },
  { name: 'Robotics', icon: 'smart_toy', view: 'Robotics' },
  { name: 'Software', icon: 'code', view: 'Software' },
  {
    name: 'AeroSpace',
    icon: 'rocket_launch',
    view: 'Aerospace'
  },
  { name: 'Science', icon: 'biotech', view: 'Science' }
]

const adminSidebarLinks = [
  {
    name: 'Add Project',
    url: '/admin/newproject',
    icon: 'flight',
    view: 'addProject'
  },
  {
    name: 'Add Student',
    url: '/admin/newstudent',
    icon: 'flight',
    view: 'addStudent'
  },
  {
    name: 'This University',
    url: '/admin/youruniversity',
    icon: 'flight',
    view: 'thisUni'
  },
  {
    name: 'All Projects',
    url: '/admin/all',
    icon: 'flight',
    view: 'all'
  }
]

module.exports = {
  sidebarLinks,
  adminSidebarLinks
}
