import cl from "./Client.module.scss";
import {useHistory} from "react-router";

export default function Client ({client, clickEdit, clickDelete}) {
    const history = useHistory();

    // todo dorobutu royting z ID

    return (
        <div className={cl.clientDiv} >
            <div className={cl.infoClient} onClick={() => clickEdit(client)}>
                <span>{client.name}</span>
                <span>{client.surname}</span>
                <span>{client.phone}</span>
                <span>{client.email}</span>
            </div>
            <div className={cl.buttonsDiv}>
                <button className={cl.createVisit} onClick={() => history.push("/visits")}/>
                <button className={cl.addTeeth} onClick={() => history.push("/teethes")}/>
                <button className={cl.deleteBtn} onClick={() => clickDelete(client._id)}/>
            </div>
        </div>
    );
}
