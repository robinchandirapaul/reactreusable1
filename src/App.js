import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueKey: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Robin',
    role: 'Software Developer',
  },
  {
    uniqueKey: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Folyd',
    role: 'Senior Software Developer',
  },
  {
    uniqueKey: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob',
    role: 'Team Manager',
  },
  {
    uniqueKey: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon',
    role: 'Operation Manager',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueKey} />
      ))}
    </ul>
  </div>
)

export default App
