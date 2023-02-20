# Tournament App

This is an interview project, imagining the front-end of a system that
allows people to sign up for a tournament. There is a home page, which
shows recent winners of the tournament and allows people to sign up;
a matches page, which shows the current state of the tournament;
and an admin page, which is password protected and allows creating and
editing of the details of the tournament. (The password for the admin
page is "hunter2".)

The whole system is built using React and TypeScript. State is maintained
using `useState` hooks and passed down through components; the app is
not complex enough to warrant a more complex system like Redux.
Forms are implemented using [React Hook Form](https://react-hook-form.com).
Very basic styling is implemented using [Tailwind](https://tailwindcss.com).
