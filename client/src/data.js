const sidebarLinks = [
  {
    name: 'All Projects',
    icon: 'flight',
    field: 'all'
  },
  {
    name: 'AeroDynamics',
    icon: 'flight',
    field: 'Aerodynamics'
  },
  {
    name: 'Mechanics',
    icon: 'precision_manufacturing',
    field: 'Mechanics'
  },
  {
    name: 'Electronics',
    icon: 'precision_manufacturing',
    field: 'Electronics'
  },
  { name: 'Robotics', icon: 'smart_toy', field: 'Robotics' },
  { name: 'Software', icon: 'code', field: 'Software' },
  {
    name: 'AeroSpace',
    icon: 'rocket_launch',
    field: 'Aerospace'
  },
  { name: 'Science', icon: 'biotech', field: 'Science' }
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
