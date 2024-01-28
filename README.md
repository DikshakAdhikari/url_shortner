
# URL Shortner

**Introduction**  

This advanced URL shortener is built using TypeScript, Next.js, Tailwind CSS, Node.js, MongoDB, and Redis. The purpose behind developing this application is to condense lengthy URLs into their shortest possible form while also offering supplementary analytical functionalities.

**Features**  

This application provides users with the following features  

- Implemented **Rate Limitor** to protect server from being overwhelmed by too many requests in a short amount of time by the clients.
- Authentication using **JWT Tokens**  
- Implemented **Authorization**, based on roles assigned to the user. 
- A **Global Shortner** that can be used to shorten url of any length.
- Providing feature to track the **analytics** based on counts of visit on particular Url.