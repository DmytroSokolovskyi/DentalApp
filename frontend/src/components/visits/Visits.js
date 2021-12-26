import "react-datepicker/dist/react-datepicker.css";
import {useCallback, useEffect, useState} from "react";
import Calendar from "../calendar/Calendar";
import DatePicker from "react-datepicker";
import InputSearch from "../inputSearch/InputSearch";
import MyButton from "../UI/myButton/MyButton";
import cl from "./Visits.module.scss";
import uk from "date-fns/locale/uk";
import {useFetch} from "../../hooks";
import {getClientsAll, getVisits, saveVisit} from "../../services/doctor.service";

export default function Visits ({client}) {
    const [chosenDay, setChosenDay] = useState("");
    const [visitsAll, setVisitsAll] = useState([]);
    const [startEvent, setStartEvent] = useState("");
    const [endEvent, setEndEvent] = useState("");
    const [chosenClient, setChosenClient] = useState({});
    const {goFetch, res} = useFetch();

    console.log(res);

    useEffect(() => {
        goFetch(getVisits(), false);
    }, []);

    const clickToDay = useCallback((day) => {
        setChosenDay(day);
    }, [],
    );

    const selectClient = useCallback((client) => {
        setChosenClient(client);
    }, [],
    );

    const selectStartEnd = useCallback((select) => {
        setStartEvent(select.start);
        setEndEvent(select.end);
    }, [],
    );

    const createNewVisit = () => {
        const newVisit = {start: startEvent, end: endEvent, client: chosenClient.id};
        goFetch(saveVisit(newVisit), true);
    };

    return (
        <div className={cl.visitsContainer}>
            <div className={cl.visitsContent}>
                <div className={cl.createVisit}>
                    <div className={cl.datePickerDiv}>
                        <DatePicker
                            selected={startEvent}
                            onChange={(date) => setStartEvent(date)}
                            showTimeSelect={true}
                            dateFormat="Pp"
                            locale ={uk}
                            placeholderText="Start"
                        />
                        <DatePicker
                            selected={endEvent}
                            onChange={(date) => setEndEvent(date)}
                            showTimeSelect={true}
                            dateFormat="Pp"
                            locale ={uk}
                            placeholderText="End"
                        />
                    </div>
                    <InputSearch client={client} selectClient={selectClient}/>
                    <MyButton onClick={() => createNewVisit()}> Зберегти </MyButton>
                </div>
                <div className={cl.visitsList}>

                </div>
            </div>
            <div className={cl.calendardiv}>
                <Calendar
                    clickToDay={clickToDay}
                    selectStartEnd={selectStartEnd}
                />
            </div>
        </div>
    );
}
