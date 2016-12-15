# YuxiProject

Angular 2 Final Project for Yuxi Pacific.

## Architecture / Thought Process
I documented my solution in [Architecture.md](Architecture.md)

## Requirements

#### Home View
- [x] When the user opens the application it will show the home screen by default
- [x] From there, the user can access the courses module and the teachers module

#### Courses
- [x] The user can see all the courses available:
	- [x] Order them by name, duration or start date
	- [x] The list should provide visual cues to identify the status of the course in relation to the current date:
		- [x] **Future courses (green):** Courses that will start after 30 days
		- [x] **Upcoming courses (yellow):** Courses that will start within the next 30 days
		- [x] **Expired courses (red):** Courses that already happened
- [x] The user can click in any course and update it:
	- [x] The information will only be saved once the user clicks the **Save** button
	- [x] Visual cues will also apply when the users updates the course date
- [x] The user can also add new courses

#### Teachers
- [x] The user can see all the teachers available:
	- [x] The user can order them by name or last name
	- [x] The user can click in any teacher and update it:
		- [x] The information will only be saved once the user clicks the **Save** button
	- [x] The user can also add new teachers
