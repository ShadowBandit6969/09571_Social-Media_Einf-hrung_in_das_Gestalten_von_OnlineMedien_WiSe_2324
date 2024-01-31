function highlightCurrentCourse() {
  const today = new Date();
  const currentTime = today.getHours() * 100 + today.getMinutes();

  const courses = document.querySelectorAll(".course");

  courses.forEach((course) => {
    const courseTime = getCourseTime(course);
    if (courseTime) {
      const [start, end] = courseTime
        .split("-")
        .map((time) => parseInt(time.replace(":", ""), 10));

      if (currentTime >= start && currentTime <= end) {
        course.classList.add("highlighted");
      } else {
        course.classList.remove("highlighted"); 
      }
    }
  });
}


highlightCurrentCourse();
setInterval(highlightCurrentCourse, 6000); 


function getCourseTime(courseElement) {
  const timeElement = courseElement.querySelector("p:nth-child(3)");
  return timeElement ? timeElement.textContent.trim() : null;
}

highlightCurrentCourse();

function showDetails(courseTitle) {
  const courseDetails = document.getElementById("courseDetails");
  const courseTitleElement = document.getElementById("courseTitle");
  const courseDateElement = document.getElementById("courseDate");
  const courseTimeElement = document.getElementById("courseTime");
  const courseLocationElement = document.getElementById("courseLocation");

  const details = getCourseDetails(courseTitle);

  courseTitleElement.textContent = details.title;
  courseDateElement.textContent = details.date;
  courseTimeElement.textContent = details.time;
  courseLocationElement.textContent = details.location;

  courseDetails.classList.remove("hidden");
}

function getCourseDetails(courseTitle) {
  const dynamicData = getDynamicDataForCourse(courseTitle);

  return {
    title: courseTitle,
    date: dynamicData.date,
    time: dynamicData.time,
    location: dynamicData.location,
  };
}

