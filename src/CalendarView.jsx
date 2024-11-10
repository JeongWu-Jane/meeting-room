import { Box, Button, ButtonGroup, Chip, Grid, Tab, Tabs } from "@mui/material";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import Calendar from "@toast-ui/react-calendar";
import { useCallback, useEffect, useRef, useState } from "react";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import "./Calendar.css";

export function CalendarView() {
  const calendarRef = useRef(null);
  const [selectedDateRangeText, setSelectedDateRangeText] = useState("");
  const [selectedView, setSelectedView] = useState("month");
  const start = new Date();
  const onChangeSelect = (ev) => {
    console.log(ev);
    setSelectedView(ev.target.value);
  };
  const templates = {
    popupIsAllday() {
      return "하루종일";
    },
    popupStateFree() {
      return "반복";
    },
    popupStateBusy() {
      return "일반";
    },
    popupSave() {
      return "저장";
    },
    popupUpdate() {
      return "수정";
    },
    popupEdit() {
      return "수정";
    },
    popupDelete() {
      return "삭제";
    },
  };
  const initialEvents = [
    {
      id: "1",
      calendarId: "0",
      title: "Lunch",
      category: "time",
      start: "2024-11-11T12:00:00",
      end: "2024-11-11T13:30:00",
      location: "Meeting Room A",
      attendees: ["A"],
    },
    {
      id: "2",
      calendarId: "0",
      title: "Dinner",
      category: "time",
      start: "2024-11-12T15:00:00",
      end: "2024-11-12T16:30:00",
      location: "Meeting Room A",
      attendees: ["B"],
    },
    {
      id: "3",
      calendarId: "1",
      title: "Coffee Break",
      category: "time",
      start: new Date(new Date().setHours(start.getHours() + 1)),
      end: new Date(new Date().setHours(start.getHours() + 2)),
      location: "Meeting Room A",
      attendees: ["A"],
    },
    {
      id: "4",
      calendarId: "1",
      title: "Meeting 1",
      category: "time",
      start: new Date(new Date().setHours(start.getHours() + 2)),
      end: new Date(new Date().setHours(start.getHours() + 3)),
      location: "Meeting Room A",
      attendees: ["A"],
    },
    {
      id: "5",
      calendarId: "1",
      title: "Meeting 2",
      category: "time",
      start: new Date(new Date().setHours(start.getHours() + 3)),
      end: new Date(new Date().setHours(start.getHours() + 4)),
      location: "Meeting Room A",
      attendees: ["A"],
    },
  ];
  const calendars = [
    {
      id: "b",
      name: "대회의실",
      color: "#ffffff",
      backgroundColor: "#F2B34C",
      dragBackgroundColor: "#F2B34C",
      borderColor: "#F2B34C",
    },
    {
      id: "ss",
      name: "A회의실",
      color: "#ffffff",
      backgroundColor: "#34C38F",
      dragBackgroundColor: "#34C38F",
      borderColor: "#34C38F",
    },
    {
      id: "s",
      name: "B회의실",
      color: "#ffffff",
      backgroundColor: "#F4696A",
      dragBackgroundColor: "#F4696A",
      borderColor: "#F4696A",
    },
  ];
  const DAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"];
  const viewModeOptions = [
    {
      title: "월간",
      value: "month",
    },
    {
      title: "주간",
      value: "week",
    },
    {
      title: "일간",
      value: "day",
    },
  ];
  const getCalInstance = useCallback(
    () => calendarRef.current?.getInstance?.(),
    []
  );
  const updateRenderRangeText = useCallback(() => {
    const calInstance = getCalInstance();
    if (!calInstance) {
      setSelectedDateRangeText("");
    }

    const viewName = calInstance.getViewName();
    const calDate = calInstance.getDate();
    const rangeStart = calInstance.getDateRangeStart();
    const rangeEnd = calInstance.getDateRangeEnd();

    let year = calDate.getFullYear();
    let month = calDate.getMonth() + 1;
    let date = calDate.getDate();
    let dateRangeText;

    switch (viewName) {
      case "month": {
        dateRangeText = `${year}-${month}`;
        break;
      }
      case "week": {
        year = rangeStart.getFullYear();
        month = rangeStart.getMonth() + 1;
        date = rangeStart.getDate();
        const endMonth = rangeEnd.getMonth() + 1;
        const endDate = rangeEnd.getDate();

        const start = `${year}-${month < 10 ? "0" : ""}${month}-${date < 10 ? "0" : ""}${date}`;
        const end = `${year}-${endMonth < 10 ? "0" : ""}${endMonth}-${
          endDate < 10 ? "0" : ""
        }${endDate}`;
        dateRangeText = `${start} ~ ${end}`;
        break;
      }
      default:
        dateRangeText = `${year}-${month}-${date}`;
    }

    setSelectedDateRangeText(dateRangeText);
  }, [getCalInstance]);
  useEffect(() => {
    updateRenderRangeText();
  }, [selectedView, updateRenderRangeText]);

  const onClickNavi = (action) => {
    const actionName = (action ?? "month").replace("move-", "");
    getCalInstance()[actionName]();
    updateRenderRangeText();
  };

  return (
    <Grid item xs={10}>
      <Box
        sx={{
          bgcolor: "ghostwhite",
          height: "100vh",
          p: 2,
          mt: 2,
          mb: 2,
        }}
      >
        <div className="title">
          <ButtonGroup size="small" aria-label="Small button group">
            {viewModeOptions.map((option) => (
              <Button
                key={option.value}
                value={option.value}
                onClick={onChangeSelect}
              >
                {option.title}
              </Button>
            ))}
          </ButtonGroup>

          <div className="center-buttons">
            <Chip
              label="<"
              variant="outlined"
              onClick={() => onClickNavi("move-prev")}
            />
            <span className="render-range">{selectedDateRangeText}</span>
            <Chip
              label=">"
              variant="outlined"
              onClick={() => onClickNavi("move-next")}
            />
            <Chip
              label="오늘"
              variant="outlined"
              onClick={() => onClickNavi("move-today")}
            />
          </div>
        </div>

        <Tabs
          value="ss"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab value="ss" label="A회의실" />
          <Tab value="s" label="B회의실" />
          <Tab value="b" label="대회의실" />
        </Tabs>

        <Calendar
          ref={calendarRef}
          height="90%"
          view={selectedView}
          events={initialEvents}
          month={{
            dayNames: DAY_NAMES,
            startDayOfWeek: 1,
            workweek: true,
            visibleEventCount: 2,
            isAlways6Weeks: false,
          }}
          week={{
            dayNames: DAY_NAMES,
            taskView: false,
            workweek: true,
            hourStart: 8,
            hourEnd: 19,
            eventView: ["time"],
          }}
          calendars={calendars}
          useDetailPopup
          useFormPopup
        />
      </Box>
    </Grid>
  );
}
