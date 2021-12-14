import Home from './Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Employee from './Employee';
import AddEmployee from './AddEmployee';

const Router = () => {
    return(
        <div>
            <HashRouter basename="/">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>    
                    <Route exact path="/employee" element={<Employee/>}/>    
                    <Route exact path="/add" element={<AddEmployee/>}/>    
                    <Route exact path="/edit/:employeeId" element={<AddEmployee/>}/>   
                    <Route exact path="*" element={<PageNotFound/>}/>    
                </Routes> 
            </HashRouter>
        </div>
    )
}

export default Router; 