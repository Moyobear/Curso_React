import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Tasklist from "../components/lists/TaskList";

const Dashboard = () => {
    const history = useHistory();

    const user = localStorage.getItem("user") || null;

    useEffect(() => {
        if (!user) {
            history.push("/");
        }
    });

    return <Tasklist user={user} />;
};

export default Dashboard;
