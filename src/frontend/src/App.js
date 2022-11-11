
import Dashboard from './Components/Dashboard/Dashboard'
import { Route} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            
                <Route path="/" component={Dashboard} />      
            
        </div>
    );
}

export default App
