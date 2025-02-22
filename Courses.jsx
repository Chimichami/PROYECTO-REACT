import React, { useState, useEffect } from "react";
import { useAuth }  from "../AuthContext";
import { listCourses } from "../api";

const Courses = () =>{
    const [courses, setCourses] = useState([]);
    const { token } = useAuth();

    useEffect(() => {
        const fetchCourses = async () => {
            try{
                const coursesData = await listCourses(token);
                setCourses(coursesData);
            } catch (error) {
                console.error("Failed to fetch courses", error);
            }
        };
        if (token) {
            fetchCourses();
        }
    }, [token]);

    return(
        <div>
            <h2>Courses with Vacancies</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul>
        
        </div>
    );
};

export default Courses;