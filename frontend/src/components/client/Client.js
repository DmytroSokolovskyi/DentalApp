import cl from "./Client.module.scss";

export default function Client ({client, clickEdit}) {
    return (
        <div className={cl.clientDiv} onClick={() => clickEdit(client)}>
            <span>{client.name}</span>
            <span>{client.surname}</span>
            <span>{client.phone}</span>
            <span>{client.email}</span>
        </div>
    );
}
