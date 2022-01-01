import "react-datepicker/dist/react-datepicker.css";
import {getVisits, saveVisit} from "../../services/doctor.service";
import {useCallback, useEffect, useState} from "react";
import Calendar from "../calendar/Calendar";
import DatePicker from "react-datepicker";
import InputSearch from "../inputSearch/InputSearch";
import MyButton from "../UI/myButton/MyButton";
import cl from "./Visits.module.scss";
import uk from "date-fns/locale/uk";
import {useFetch} from "../../hooks";

export default function Visits ({client}) {
    const [chosenDay, setChosenDay] = useState("");
    const [visitsAll, setVisitsAll] = useState([]);
    const [visit, setVisit] = useState({start: "", end: "", client: {}});
    const {goFetch, data} = useFetch();

    console.log("visit", visit);

    useEffect(() => {
        goFetch(getVisits(), true);
    }, []);

    const clickToDay = useCallback((day) => {
        setChosenDay(day);
    }, [],
    );

    const selectClient = useCallback((client) => {
        setVisit({...visit, client});
    }, [visit],
    );

    const selectStartEnd = useCallback((select) => {
        setVisit({...visit, start: select.start, end: select.end});
    }, [visit],
    );

    const selectVisit = useCallback((value) => {
        console.log(value);
        setVisit({client: value.client, start: value.start, end: value.end});
    }, [visit],
    );

    const createNewVisit = () => {
        goFetch(saveVisit(visit), true);
    };

    return (
        <div className={cl.visitsContainer}>
            <div className={cl.visitsContent}>
                <div className={cl.createVisit}>
                    <div className={cl.datePickerDiv}>
                        <DatePicker
                            selected={visit.start}
                            onChange={(date) => setVisit({...visit, start: date})}
                            showTimeSelect={true}
                            dateFormat="Pp"
                            locale ={uk}
                            placeholderText="Start"
                        />
                        <DatePicker
                            selected={visit.end}
                            onChange={(date) => setVisit({...visit, end: date})}
                            showTimeSelect={true}
                            dateFormat="Pp"
                            locale ={uk}
                            placeholderText="End"
                        />
                    </div>
                    <InputSearch client={client || visit.client} selectClient={selectClient}/>
                    <MyButton
                        onClick={() => createNewVisit()}
                    >
                        Зберегти
                    </MyButton>
                </div>
                <div className={cl.visitsList}>

                </div>
            </div>
            <div className={cl.calendardiv}>
                <Calendar
                    clickToDay={clickToDay}
                    selectStartEnd={selectStartEnd}
                    selectVisit={selectVisit}
                />
            </div>
        </div>
    );
}
