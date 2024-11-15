import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Bell } from "lucide-react";

const HeaderSidebar = () => {
  return (
    <>
      <header className="flex justify-between h-24 bg-black fixed inset-x-0 inset-y-0 z-100">
        <div className="flex justify-center items-center pl-10">
          <Link to="/courses">
            <div className="relative">
              <img className="logo" src="/CustomNavigationLogo.png" />
              <div className="text-white text-3xl absolute top-[-1px] right-[-18px]">
                +
              </div>
            </div>
          </Link>
        </div>

        <div className="flex gap-10">
          <div className="flex justify-center items-center">
            <Link to="/notifications">
              <div className="relative">
                <img src="icons/notifications.svg" className="w-8" />
                <div className="text-white bg-red-600 px-[6px] py-[2px] rounded-[10px] text-[10px] absolute top-[-2px] right-[-5px]">
                  3
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center pr-10">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="Notifications"
                  labelIcon={<Bell size={15} />}
                  href="/notifications"
                />
              </UserButton.MenuItems>
            </UserButton>
          </div>
        </div>
      </header>

      <nav className="sidebar fixed bg-black text-white left-0 bottom-0 top-24 w-32 z-50">
        <Link to="/courses">
          <div className=" hover:bg-gray-400 h-32 flex flex-col justify-center items-center cursor-pointer">
            <img src="icons/courses.svg" className="w-8" />
            <div>Courses</div>
          </div>
        </Link>
        <Link to="/grades">
          <div className="sidebar hover:bg-gray-400 h-32 flex flex-col justify-center items-center cursor-pointer">
            <img src="icons/grades.svg" className="w-8" />
            <div>Grades</div>
          </div>
        </Link>
        <Link to="/calendar">
          <div className="sidebar hover:bg-gray-400 h-32 flex flex-col justify-center items-center cursor-pointer">
            <img src="icons/calendar.svg" className="w-8" />
            <div>Calendar</div>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default HeaderSidebar;
