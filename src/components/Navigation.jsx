import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (

        <div className='navigation'>

            <NavLink to= '/' className={({isActive}) => isActive ? "nav_active": ""}>
                Drapeaux
            </NavLink>

            <NavLink to= '/About' className={({isActive}) => isActive ? "nav_active": ""}>
                A propos
            </NavLink>

        </div>

    );

};

export default Navigation;