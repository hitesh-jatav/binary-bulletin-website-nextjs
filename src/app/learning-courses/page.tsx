"use client";
import { getCoursesInfo } from "@/utils/api";
import React, { useEffect, useState } from "react";

export default function LearnCourse() {
  const [courses, setCourses] = useState<any[]>([]);
  const [selectCourse, setSelectedCourse] = useState<any>(null);
  const [selectWeek, setSelectedWeek] = useState<number>(1);
  const [selectDay, setSelectedDay] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInfo = async () => {
    setLoading(true);
    setError(null); // Reset error before trying to fetch again
    try {
      let resp = await getCoursesInfo();
      setCourses(resp.courses);
      console.log("resp.courses :>> ", resp.courses);
    } catch (error) {
      setError("Failed to load courses. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handlePrevDay = () => {
    if (selectDay > 1) {
      setSelectedDay(selectDay - 1);
    }
  };

  const handleNextDay = () => {
    const totalDays = selectCourse?.content.find(
      (week: any) => week.week === selectWeek
    )?.dayWise.length;
    if (selectDay < totalDays) {
      setSelectedDay(selectDay + 1);
    }
  };

  const renderAgendaAndPractical = (day: any) => {
    return (
      <div className="flex flex-col gap-6">
        <div className="bg-blue-100 p-6 shadow-lg ">
          <h3 className="text-xl font-semibold text-gray-800">Agenda</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {day.agenda.map((item: string, index: number) => (
              <li key={index} className="py-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green-100 p-6 shadow-lg ">
          <h3 className="text-xl font-semibold text-gray-800">
            Practical Exercises
          </h3>
          <ul className="list-disc pl-5 text-gray-700">
            {day.practical.map((item: string, index: number) => (
              <li key={index} className="py-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-black py-8 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20 z-0"></div>

      {/* Course selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl z-10">
        {loading && (
          <div className="col-span-full text-center text-white text-xl">
            Loading courses...
          </div>
        )}

        {error && (
          <div className="col-span-full text-center text-red-500 text-xl">
            {error}
          </div>
        )}

        {!selectCourse &&
          !loading &&
          !error &&
          courses.map((course) => (
            <button
              onClick={() => setSelectedCourse(course)}
              key={course._id}
              className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-lg py-4 px-8 rounded-xl shadow-xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-500 focus:outline-none focus:ring-4 focus:ring-teal-300"
            >
              {course.title}
            </button>
          ))}
      </div>

      {/* Week selection */}
      {selectCourse && (
        <div className="w-full max-w-4xl mt-8  bg-white rounded-xl shadow-xl z-10">
          <div className="flex justify-between items-center bg-red-100 p-6 mb-6 align-items-center">
            <h2 className="text-2xl font-semibold  text-center text-gray-800">
              {selectCourse.title}
            </h2>
            <button
              onClick={() => setSelectedCourse(null)}
              className="btn text-2xl text-gray-500 hover:text-gray-800 transition duration-300"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 justify-center p-6">
            {selectCourse.content.map((week: any) => (
              <button
                key={week._id}
                onClick={() => {
                  setSelectedWeek(week.week);
                  setSelectedDay(week.dayWise[0].day);
                }}
                className={`${
                  selectWeek === week.week
                    ? "bg-blue-500 text-white shadow-xl "
                    : "border"
                } text-base py-2 px-4 rounded-xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none`}
              >
                Week {week.week}
              </button>
            ))}
          </div>

          {selectCourse.content
            .find((week: any) => week.week === selectWeek)
            ?.dayWise.map((day: any) => {
              if (day.day === selectDay) {
                return (
                  <div key={day._id}>
                    <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                      Day {day.day}: {day.title}
                    </h3>
                    {renderAgendaAndPractical(day)}
                  </div>
                );
              }
              return null;
            })}

          {/* Day navigation */}
          <div className="flex justify-between items-center mt-8 p-6">
            <button
              onClick={handlePrevDay}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 px-6"
            >
              Prev
            </button>
            <div className="text-lg font-semibold text-gray-800">
               {selectDay} / {selectCourse.days}
            </div>
            <button
              onClick={handleNextDay}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-6"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Back to courses button */}
      {selectCourse && !selectWeek && (
        <button
          onClick={() => {
            setSelectedCourse(null);
            setSelectedWeek(1);
            setSelectedDay(1);
          }}
          className="mt-8 bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 px-6 rounded-xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
        >
          Back to Courses
        </button>
      )}
    </div>
  );
}
