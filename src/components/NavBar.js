const NavBar = () =>{
    
    return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">ICS2608</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav" id="navbarNavAltMarkup">
                    <a className="nav-link" href="/myfirstreact">Home</a>
                    <a className="nav-link" href="/myfirstreact/#/employee">Employees</a>
                    <a className="nav-link" href="/myfirstreact/#/add">Add Employees</a>
                    <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                </div>
            </div>
        </div>
    </nav>
);
}

export default NavBar