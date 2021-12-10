import {useEffect, useState} from "react";
import cl from "./DoctorPage.module.css";
import {getVisits} from "../../services/doctor.service";
import {useSelector} from "react-redux";

export default function DoctorPage () {
    const [vizits, setvizits] = useState([]);
    const defaultRootState = useSelector(state => state);

    console.log(defaultRootState);

    useEffect(() => {
        setvizits(getVisits());
    }, []);

    return (
        <div className={cl.DoctorPageDiv}>

            <button onClick= {() => getVisits()} >sdssssssssss</button>
        </div>
    );
}
