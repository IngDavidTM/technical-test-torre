import './stylesheets/App.css'
import UserPage from './pages/UserPage'
import { AppProvider } from './context/AppContext'

const App= () => {
  return (
    <AppProvider>
      <UserPage />
    </AppProvider>
  )
}

export default App
