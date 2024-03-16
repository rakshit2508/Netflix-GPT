export const LOGO =
"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = 
"https://media.licdn.com/dms/image/D5603AQFFyemcsTaTVw/profile-displayphoto-shrink_100_100/0/1702938579875?e=1710979200&v=beta&t=8nDLz8WUnDXbP5yt7P5_u2snGWEfTDmx82ICPDWu2t4";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY,
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

  export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"

  export const SUPPORTED_LANGUAGES = [
    {identifier:"en", name:"English"},
    {identifier:"hindi", name:"Hindi"},
    {identifier:"spanish", name:"Spanish"},
  ];

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
 