import React, { useContext } from 'react'
import RoleList from '../../config/roles';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound'
import UserContext from '../../context/UserContext';

function PrivateRoutes() {
    const { role, setRole } = useContext(UserContext);

    const roleStatus = role || "GUEST"

    return (
        <>
            <Switch>
                {RoleList[role].map(({ path, page: PageComponent }, idx) => <Route exact path={path} key={idx}>
                    <PageComponent key={idx} setRole={setRole} role={roleStatus} />
                </Route>)}
                <Route path="*" component={NotFound} />
            </Switch>
        </>
    );
}

export default PrivateRoutes;