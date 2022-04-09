# front-end-meeting-room
deployed live app 
https://astonishing-lolly-b64196.netlify.app

# back-end github repo
https://github.com/TamzeedRahman/Meeting-room-api

# Meeting Room Booking System
## Full Stack Booking App

- Built back-end with `express` and `pg-promise`, where it uses a `postgres` database
- Built front-end with `create-react-app` 
- The app is deployed on heroku and can be accessed from React front-end app and Postman

## Users stories

Users are able to:

#### Room management:

- View all meeting rooms
- Create a meeting room
- View room bookings

#### Booking management:

- View all bookings
- Book a meeting room
- Cancel booking

### API/App Pages/Views

#### Home `/`

Displays a nav bar or navigation menu that would take the user to **Meeting Rooms**, **Bookings** and **New Room** pages. This navbar should be visible on all pages/views.

Below the navbar display a list of all meeting rooms.

When you click in one of the meeting rooms of the list it takes the user to the meeting room page.

#### Single Meeting Room `/meetingrooms/:id`

Displays the details of the meeting room and below it all its bookings.

Display a form to book the meeting room. The form must include Meeting Name, Start Date, End Date and Attendees input fields and a Submit button. The Attendees input should be optional and all others required. Show a success message upon successful booking creation and an error message otherwise.

Should also display a list of all existing bookings and when you click in one of the bookings of the list it should take the user to that booking's page/view.

#### New Meeting Room `/meetingrooms/new`

Display a form where a user (admin) can create a meeting room. The form must include Name, Capacity and Floor input fields and Submit button. All inputs are required. Show a success message upon successful meeting room creation and an error message otherwise.

#### Bookings `/bookings`

Displays a list of all bookings for all meeting rooms and when you click in one of the bookings of the list it should take the user to that booking's page/view.

#### Single Booking `/bookings/:id`

Displays the details of the booking and a button to cancel it. Clicking Cancel should prompt user to confirm that they want to cancel booking. If they choose Yes it should cancel booking and if they choose No it should do nothing. Show a success message upon successful booking cancelation and an error message otherwise.
