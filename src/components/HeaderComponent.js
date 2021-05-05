
const HeaderComponent = () => {


    return (
        <div>
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">Create</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <ul className="right">
                        <li className="hide-on-small-only"><a href="#!">Create</a></li>
                        <li className="hide-on-med-and-up"><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown
                            <i className="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
)

}

export default HeaderComponent;