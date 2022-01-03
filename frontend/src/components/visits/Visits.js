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
        setVisit({
            client: value.client,
            start: new Date(value.start),
            end: new Date(value.end),
        });
    }, [visit],
    );

    const createNewVisit = () => {
        goFetch(saveVisit({...visit, client: visit.client._id}), true);
    };

    return (
        <div className={cl.visitsContainer}>
            <div className={cl.calendardiv}>
                <Calendar
                    clickToDay={clickToDay}
                    selectStartEnd={selectStartEnd}
                    selectVisit={selectVisit}
                />
            </div>
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
                        <InputSearch client={visit.client} selectClient={selectClient}/>
                        <MyButton
                            onClick={() => createNewVisit()}
                        >
                            Зберегти
                        </MyButton>
                    </div>
                </div>
                <div className={cl.visitsList}>

                </div>
            </div>
        </div>
    );
}
