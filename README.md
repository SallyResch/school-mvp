A fullstack application containing:
Typescript
Tailwind css
Supabase database
Zod
Sonner
Tanstack
Hookform

Application contains users with roles of either "Teacher" och "Student"
and is there by redirected to each appropriate route.

This is what a user with role "Student" is able to do:
Account & Authentication
- Create a student account.
- Log in and log out.
- View personal profile information.
Courses
- View available courses.
- Open a course and read its description.
- See who created the course.
Assignments
- View available assignments.
- Open an assignment and read its instructions and description.
- See which course an assignment belongs to.
- See who created the assignment.
Comments & Communication
- Add comments to assignments.
- Read teachers' replies.

This is what a user with role "Teacher" is able to do:
Account & Authentication
- Log in and log out.
- View personal profile information.
Courses
- View available courses.
- Create new courses.
- Edit courses created by themselves.
- Delete courses created by themselves.
- Add course names, descriptions and image.
- See who created a course.
Assignments
- View available assignments.
- Create new assignments.
- Assign assignments to any available course, regardless of who created the course.
- Edit assignments created by themselves.
- Delete assignments created by themselves.
- Set assignment names, descriptions, course.
Comments & Communication
- View students' comments on assignments.
- Reply to students' questions.
