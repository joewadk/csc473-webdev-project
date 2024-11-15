import { getCourses } from "@/api/apiCourses";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetch from "@/hooks/use-fetch";
import { useSession, useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { BarLoader } from "react-spinners";

const Courses = () => {
  const { isLoaded } = useUser(); //load use state to handle if a user is loaded

  if (!isLoaded) {
    console.log("courses")
    return (
      <div className="h-96 flex items-end">
        <BarLoader width={"100%"} color="#080808" />
      </div>
    );
  }
  
  const {
    fn: fnCourses,
    data: courses,
    loading: loadingCourses,
  } = useFetch(getCourses);

  console.log(courses);//debug if it worked

  useEffect(() => {
    if (isLoaded) {
      fnCourses();
    }
  }, [isLoaded]);


  return (
    <>
      <h1 className="font-bold text-4xl sm:text-6xl pb-10 pl-10">Courses</h1>
      <div className="flex gap-6">
        {loadingCourses === false && (
          <div className="flex flex-wrap gap-4">
            {courses?.length ? (
              courses.map((course) => ( //course map starts here
                <Card key={course.id} className="w-1/5">
                  <CardHeader>
                    <CardTitle>{course.name}</CardTitle>
                    <CardDescription>{course.created_at}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Course ID: {course.id}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div>No Courses Found</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Courses;


//old code
        {/* <Card className="w-1/5">
          <CardHeader>
            <CardTitle>Course 1</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="w-1/5">
          <CardHeader>
            <CardTitle>Course 2</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="w-1/5">
          <CardHeader>
            <CardTitle>Course 3</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card> */}
  

