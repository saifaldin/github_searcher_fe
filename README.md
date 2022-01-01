## Github Searcher FE
### Available Scripts

In the project directory, you can run:

#### `npm start`
#### `npm run build`

## My solution

- Added a ratelimit counter to Github's ratelimit, due to how small it is. It resets every 60 seconds, and so does the counter.
- Due to the time constraint, I wasn't able to complete the following:
  - Style the dropdown list correctly.
  - A button for clearing cache.
  - Pagination.
  - A user details button that retrieves and shows user's followers, public repo's number, and location.
    It had to be done that way because these data aren't sent in search request of Github's API, and need a separate call with its own ratelimiting.
  - Refactor unclean parts of the frontend app.