import "./Calendar.css";
import {memo, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import uk from "date-fns/locale/uk";
import {useSelector} from "react-redux";
import Modal from "../UI/modal/Modal";

export default memo(function Calendar ({clickToDay, selectStartEnd, selectVisit}) {
    const [modalActive, setModalActive] = useState(false);

    const visits = useSelector(state => state.mainReducer.visits);

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
                initialView ='dayGridMonth'
                headerToolbar={{
                    left: "prev,next",
                    center: "title",
                    right: "dayGridMonth,timeGridDay",
                }}
                firstDay={1}
                nowIndicator={true}
                // lockMinTime={"08:00:00"}
                // scrollTime={"08:00:00"}
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
                dateClick ={(info) => clickToDay(info.date)}
                select={doSelect}
                eventClick={chosenEvent }
                eventDrop={ info => {
                    setModalActive(true);
                    // alert(info.event.title + " was dropped on " + info.event.start.toISOString());
                    //
                    // if (!confirm("Are you sure about this change?")) {
                    //     info.revert();
                    // }
                }}
                // slotDuration={"00:30:00"}
                // Срабатывает, когда текущий выбор очищен.
                // unselect = {() => {}}
                // eventContent={renderEventContent} // custom render function
                // titleFormat ={{year: "numeric", month: "short", day: "numeric"}}
                // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                        eventAdd={function(){}}
                        eventChange={function(){}}
                        eventRemove={function(){}}
                        */
            />
            <Modal active={modalActive} setActive={setModalActive}>
                <button>sdwdwedw</button>
                <button>sdwdwedw</button>
                <button>sdwdwedw</button>
                <button>sdwdwedw</button>
                <button>sdwdwedw</button>
                <button>sdwdwedw</button>
                <button>sdwdwedw</button>
                <button>sdwdwedw</button>
                <button>sdwdwedw</button>
                <button>sdwdwedw</button>
            </Modal>
        </div>
    );
});
