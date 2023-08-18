import React from "react";
import "./work.css";
import cookingBlog from "../asset/cookingBlog.png";
import dailyBlog from "../asset/DailyBlogJournal.png";
import todlist from "../asset/todoList.png";
import weather from "../asset/Weather.png";
import Quiz from "../asset/quizWebsite.png";
import stopWatch from "../asset/stopwatch.png";
import "./work.css";

import WorkCard from "./WorkCard";
function Work() {
  return (
    <>
      <div className="work-parent-container">
        <WorkCard
          src={cookingBlog}
          detail="  Dynamic Cooking Blog website. Implemented various recipe types, each
            with its own page and detailed descriptions, providing users with
            comprehensive culinary insights. Designed and developed a dynamic Daily Journal Blog website users can post blogs from the Compose section and see them instantly on the Home section."
          viewLink="https://cookingblogsiddhant.onrender.com/"
          sourceLink="https://github.com/siddhantkankaria123/CookingBlog"
        ></WorkCard>
        <WorkCard
          src={dailyBlog}
          detail=" Designed and developed a dynamic Daily Journal Blog website users can post blogs from the Compose section and see them instantly on the Home section."
          viewLink="https://dailyjournal-blog-siddhant.onrender.com/"
          sourceLink="https://github.com/siddhantkankaria123/blog_website"
        ></WorkCard>
        <WorkCard
          src={todlist}
          detail="  Created a Todo List application with the ability to add and manage tasks. Utilized Express.js routing parameters to implement custom lists, allowing users to create multiple lists with distinct tasks."
          viewLink="https://to-do-list-siddhant.onrender.com/"
          sourceLink="https://github.com/siddhantkankaria123/to_do_list"
        ></WorkCard>
        <WorkCard
          src={weather}
          detail="  Developed a responsive weather application. Integrated a weather API to fetch real-time weather data for any city entered by the user, providing accurate and upto date weather information."
          viewLink="https://siddhantkankaria123.github.io/QuizWebsite/"
          sourceLink="https://github.com/siddhantkankaria123/to_do_list"
        ></WorkCard>
        <WorkCard
          src={Quiz}
          detail="Developed a Responsive Quiz Website.Intialize a Five minute timer utilizing JavaScript to restrict users and add a time-bound challenge. Random question generation using JavaScript's Random Number functionality "
          viewLink="https://to-do-list-siddhant.onrender.com/"
          sourceLink="https://github.com/siddhantkankaria123/QuizWebsite"
        ></WorkCard>
        <WorkCard
          src={stopWatch}
          detail=" Designed and developed a responsive stopwatch application using HTML, CSS, and JavaScript, Implemented start and stop functionality with accurate time tracking and display. "
          viewLink="https://siddhantkankaria123.github.io/Stopwatch/"
          sourceLink="https://github.com/siddhantkankaria123/Stopwatch"
        ></WorkCard>
      </div>
    </>
  );
}

export default Work;
