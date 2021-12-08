import {useEffect, useState} from "react";
import cl from "./DoctorPage.module.css";
import {getVisits} from "../../services/doctor.service";

export default function DoctorPage () {
    const [vizits, setvizits] = useState([]);

    useEffect(() => {
        setvizits(getVisits());
    }, []);

    return (
        <div className={cl.DoctorPageDiv}>
            <button onClick= {() => getVisits()} >sdssssssssss</button>
        </div>
    );
}
