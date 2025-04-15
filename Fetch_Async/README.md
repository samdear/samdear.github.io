# Intro to `fetch`, `async`/`await`, and DOM updates

Today we’re building a site that pulls real movie data from the [public Studio Ghibli API](https://ghibliapi.vercel.app/#section/Studio-Ghibli-API).

**We’ll make it show a random film every time the page loads.**

While we do that, we’re going to learn three powerful things:

- How to talk to an API
- How to write asynchronous JavaScript
- How to change your webpage with JavaScript based on the data you get."

### HTML Setup

```html
<div id="card">
  <h1 id="title">Loading...</h1>
  <img id="image" src="" alt="Film poster" style="display: none" />
  <p id="description"></p>
</div>
```

This is just a container with a title, an image, and a description. Notice each element has an id — that’s important. It means we can easily find and update these parts of the page using JavaScript."

### CSS Styling

```css
body {
  font-family: sans-serif;
  background: #fefae0;
  text-align: center;
  padding: 2rem;
}
#card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
img {
  max-width: 100%;
  border-radius: 1rem;
  margin-bottom: 1rem;
}
```

The CSS is just for layout and nice fonts/colors.

## JavaScript Section: THE FUN PART

### Step 1: Writing an `async` function

```js
async function loadRandomFilm()
```

This is an `async` function — short for asynchronous. It means we can pause while we wait for things like network requests.

You’ll see that in action with `await` in a second.

### Step 2: Fetching the data

```js
const res = await fetch("https://ghibliapi.vercel.app/films");
const films = await res.json();
```

`fetch()` sends a request to the internet to get data.

`await` means “wait for this to finish before moving on.”

`.json()` turns the response into usable JavaScript objects.

We're grabbing data from the Ghibli API — it's basically a big list of movies. We await the `fetch()` call so we don't move forward until the data is ready.

### Step 3: Picking a random film

```js
const randomFilm = films[Math.floor(Math.random() * films.length)];
```

We now have an array of all the films.

This line picks one randomly using `Math.random()` and `Math.floor()`, how we have been implementing random selection."

### Step 4: Updating the DOM

```js
document.getElementById("title").textContent = randomFilm.title;
document.getElementById("description").textContent = randomFilm.description;
```

Now we’re updating the page.

We're changing the text inside the title and description tags with the film’s data. This is called `DOM manipulation` — we’re telling the browser to change what the user sees.

### Step 5: Conditional rendering

```js
if (randomFilm.image) {
  const img = document.getElementById("image");
  img.src = randomFilm.image;
  img.style.display = "block";
} else {
  document.getElementById("image").style.display = "none";
}
```

Not every film in the API has an image. So this is a conditional check — ‘if there’s an image, show it; if not, hide the image tag.’ This avoids showing a broken image box.

### Step 6: Run the function

```js
loadRandomFilm();
```

We define the function up above, but nothing will happen until we call it. So this line actually runs it when the page loads.

### In Class Exercise

Right now, we only see a new film if we refresh the page. Your challenge is to add a ‘Next Film’ button that re-runs the `loadRandomFilm()` function when clicked."

If you complete the above, add your own twist.

Examples:

- Show the film’s release year
- Style it in Ghibli vibes
- Add a button that filters only films made before 2000

<!-- ```html
<button id="nextBtn">Next Film</button>
```

```js
document.getElementById("nextBtn").addEventListener("click", loadRandomFilm);
``` -->

### [Resource for public APIs](https://github.com/public-apis/public-apis?tab=readme-ov-file)
