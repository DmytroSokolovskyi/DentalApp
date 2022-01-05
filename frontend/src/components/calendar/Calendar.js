import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {memo} from "react";
import timeGridPlugin from "@fullcalendar/timegrid";
import uk from "date-fns/locale/uk";
import {useSelector} from "react-redux";

export default memo(function Calendar ({clickToDay, selectStartEnd, selectVisit}) {
    const {visits} = useSelector(state => state.mainReducer);

    const choseDay = (info) => {
        clickToDay(info.dateStr);
    };

    const chosenEvent = (info) => {
        const id = info.event._def.publicId;
        const visit = visits.filter(visit => id === visit.id)[0];

        selectVisit(visit);
    };

    const doSelect = (info) => {
        if (info.view.type === "timeGridDay") {
            selectStartEnd({start: info.start, end: info.end});
        }
    };

    return (
        <div className={"fullCalendar_content"}>
            <FullCalendar
                events={visits}
                locale ={uk}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView ={"dayGridMonth"}
                headerToolbar={{
                    left: "prev,next",
                    center: "title",
                    right: "dayGridMonth,timeGridDay",
                }}
                firstDay={1}
                nowIndicator={true}
                slotMaxTime={"22:00:00"}
                slotMinTime={"08:00:00"}
                eventColor={"#41b8e5"}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                businessHours={{
                    daysOfWeek: [1, 2, 3, 4, 5, 6],
                    startTime: "09:00",
                    endTime: "21:00",
                }}
                dateClick ={choseDay}
                select={doSelect}
                eventClick={chosenEvent }
                eventDrop={ info => {
                    // setModalActive(true);
                    // alert(info.event.title + " was dropped on " + info.event.start.toISOString());
                    //
                    // if (!confirm("Are you sure about this change?")) {
                    //     info.revert();
                    // }
                }}
            />
        </div>
    );
});
