import { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(process.env.REACT_APP_FIREBASE_DB_MEETUPS)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const formatedMeetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          formatedMeetups.push(meetup);
        }

        setMeetups(formatedMeetups);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList meetups={meetups} />
      </ul>
    </section>
  );
}
