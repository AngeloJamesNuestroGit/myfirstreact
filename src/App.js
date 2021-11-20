import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Employee from './components/Employee';

function App() {
    return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
            
                    <p> test header </p>
                    <p>
                        {Hello()}
                    </p>
                    <p>
                        <Employee></Employee>
                    </p>
                    <p>
                        test text hello
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Learn React
                    </a>
                </header>
            </div>
            );
}

export default App;
