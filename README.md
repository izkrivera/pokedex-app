# pokedex-app

I developed this application on a Nextjs scaffold using the latest React, Redux (RTK) and Typescript versions. I used Next's optional Tailwind configuration to style in CSS.

I included the Pokemon API types published by Gabriel "Gabb-c" in [pokenode-ts](https://github.com/Gabb-c/pokenode-ts) under the MIT license.

I created a lazy Pokemon service api using RTK. Any Pokemon in the Pokemon API can be searched for by name or id.

RTK was also used to create a search history slice and store which is displayed on the sidebar and has unlimited cache. This history is implemented as a stack-set and clicking on any one entry will move it to the top making it the most recent entry, without duplicates.

The Pokemon content area displays a selection of the available data for the most recent history entry as well as empty, loading and error states as appropriate. These included some of the bonus point requirements like abilities and sprites as well as a retro pokedex-inspired ui.

If I was going to spend more time with the developing this app, I would work further on:

## UI

- Handle the history overflow at the bottom of the left sidebar, which is currently hidden.
- Although the app is responsive, right now it won't fit in mobile screens, I would finish this aspect by hiding the history in a drop menu or similar.
- Auto complete of the search to help the user enter searches, as right now you have to know the name and spell it correctly.

## State

- Right now the history entries are stored as the whole Pokemon API response. These are large. In a production app I would only store the resulting Pokemon's name and taking advantage of Redux api's cache, withdraw the result from there.

- On a production app, I would make sure to gracefully handle rate limits on Pokemon API requests.

- On a production app, I may consider removing the api service from the client in RTK and implement it as SSR.

- I would have more test coverage. Right now ony a base app and components render test is done. Testing hooks and RTK is necessary but requires more time than allotted for this challenge.

# Running pokedex-app

1. Clone the repository:

```bash
git clone https://github.com/izkrivera/pokedex-app.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the dev server:

```bash
npm run dev
```

4. Open it in browser: http://localhost:3000

OR!

5. Build the production app:

```bash
npm run build
```

6. Start it:

```bash
npm run start
```

7. Open it in browser: http://localhost:3000
