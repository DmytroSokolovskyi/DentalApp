import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {memo} from "react";
import timeGridPlugin from "@fullcalendar/timegrid";
import uk from "date-fns/locale/uk";

export default memo(function Calendar ({clickToDay, selectStartEnd}) {
    const doSelect = (info) => {
        if (info.view.type === "timeGridDay") {
            selectStartEnd({start: info.start, end: info.end});
        }
    };

    return (
        <FullCalendar
            height={"90%"}
            locale ={uk}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView ='dayGridMonth'
            headerToolbar={{
                left: "prev,next",
                center: "title",
                right: "dayGridMonth,timeGridDay",
            }}
            firstDay={1}
            lockMinTime={"08:00:00"}
            slotMaxTime={"22:00:00"}
            scrollTime={"08:00:00"}
            eventColor={"#6de8de"}
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
            select ={doSelect}
            // slotDuration={"00:30:00"}
            // Срабатывает, когда текущий выбор очищен.
            // unselect = {() => {}}
            // eventContent={renderEventContent} // custom render function
            // eventClick={this.handleEventClick}
            // titleFormat ={{year: "numeric", month: "short", day: "numeric"}}
            // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
                    eventAdd={function(){}}
                    eventChange={function(){}}
                    eventRemove={function(){}}
                    */
        />
    );
});
