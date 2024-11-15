import { Calendar } from "@/components/ui/calendar";
import React from "react";

const CalendarPage = () => {
  return (
    <>
      <h1 className="font-bold text-4xl sm:text-6xl pb-10 pl-10">Calendar</h1>
      <div className="pl-8">
        <Calendar />
      </div>
    </>
  );
};

export default CalendarPage;
