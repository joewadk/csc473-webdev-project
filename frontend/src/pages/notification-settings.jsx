import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

const NotificationSettings = () => {
  const [grades, setGrades] = useState(false);
  const [announcements, setAnnouncements] = useState(false);
  const [uploads, setUploads] = useState(false);

  const handleGradesChange = (e) => setGrades(e.target.checked);
  const handleAnnouncementsChange = (e) => setAnnouncements(e.target.checked);
  const handleUploadsChange = (e) => setUploads(e.target.checked);

  return (
    <>
      <div className="flex justify-center">
        <Card className="w-1/2">
          <CardHeader className="pb-3">
            <CardTitle className="pb-5">Notifications</CardTitle>
            <CardDescription>Enable notifications:</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 pl-10">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="grades"
                // checked={grades}
                // onChange={handleGradesChange}
              />
              <label
                htmlFor="grades"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Grades
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="announcements"
                // checked={announcements}
                // onChange={handleAnnouncementsChange}
              />
              <label
                htmlFor="announcements"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Announcements
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="uploads"
                // checked={uploads}
                // onChange={handleUploadsChange}
              />
              <label
                htmlFor="uploads"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Uploads
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="Upcoming due dates"
                // checked={uploads}
                // onChange={handleUploadsChange}
              />
              <label
                htmlFor="upcoming"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Uploads
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="activity"
                // checked={uploads}
                // onChange={handleUploadsChange}
              />
              <label
                htmlFor="activity"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                New activity
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default NotificationSettings;
