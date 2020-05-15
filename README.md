# UBC Student Dashboard

[![Netlify Status](https://api.netlify.com/api/v1/badges/8f39ded9-dda6-4340-ae7d-9ba1cc5ca2e7/deploy-status)](https://app.netlify.com/sites/bryans-student-dashboard/deploys)

I'm mostly done with this project at the moment. I might style it to make it look a little nicer, but the core functionalities have all been implemented. It does look quite sparse, as none of my courses provide me with much discussion data to work with.

The most interesting part of this project has to be translating the entirety of the express backend into individual `.js` files so they work with Netlify Functions (my de-facto backend), and changing the frontend `fetch()` calls accordingly. This part wasn't covered in the tutorial and I enjoyed figuring it out by myself. Apparently I could have just used [serverless-http](https://github.com/dougmoscrop/serverless-http) to wrap my entire express backend for use with Netlify Functions (AWS Lambda), but I think writing the function files individually has allowed me to better understand how it all works together.

---
Due to new regulations and guidelines arising from efforts against the COVID-19 pandemic, the [UBC Learning Analytics Spring Hackathon](https://github.com/UBC-LA-Hackathon/student-dashboard) will be rescheduled to a later date. 

This is my attempt to work through the project prepared by the hackathon organizers, which is a simple web-app that takes course discussion data from Canvas, and provides visualizations on the distribution of times at which discussions occur. 

The original README file for the project can be found [here](./README_original.md).
