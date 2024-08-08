export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_URL}`,
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";


  export const SUPPORTED_LANGUAGES = [
    {identifiers: "en", name: "English"},
    {identifiers: "hindi", name: "Hindi"}
  ]


  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_URL;
