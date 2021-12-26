import cl from "./Client.module.scss";
import {useHistory} from "react-router";
import {memo} from "react";

export default memo(function Client ({client, clickEdit, clickDelete}) {
    const history = useHistory();

    // todo dorobutu royting z ID

    return (
        <div className={cl.clientDiv} >
            <div className={cl.infoClient} onClick={() => clickEdit(client)}>
                <span>{client.surname}</span>
                <span>{client.name}</span>
                <span>{client.phone}</span>
                <span>{client.email}</span>
            </div>
            <div className={cl.buttonsDiv}>
                <button className={cl.createVisit} onClick={() => history.push(`/visits/${client._id}`, {client})}/>
                <button className={cl.addTeeth} onClick={() => history.push("/teethes")}/>
                <button className={cl.deleteBtn} onClick={() => clickDelete(client._id)}/>
            </div>
        </div>
    );
},
);
