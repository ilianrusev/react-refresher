import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      process.env.REACT_APP_FIREBASE_DB_MEETUPS, // add your db here
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
