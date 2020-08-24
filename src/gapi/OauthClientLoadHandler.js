import { gapi } from "gapi-script";
const OauthClientLoadHandler = () => {
  gapi.load("client:auth2", () => {
    gapi.auth2
      .init({ client_id: process.env.REACT_APP_CLIENT_ID })
      .then(() => {
        // gapi.auth2.getAuthInstance().isSignedIn.listen();
        gapi.auth2.getAuthInstance().isSignedIn.get();
      })
      .then(() => {
        gapi.client.init({
          apiKey: process.env.REACT_APP_API_KEY,
          clientId: process.env.REACT_APP_CLIENT_ID,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
          scope: "https://www.googleapis.com/auth/calendar.events",
        });
      })
      .catch((err) => console.log(err));
  });
};

export default OauthClientLoadHandler;
