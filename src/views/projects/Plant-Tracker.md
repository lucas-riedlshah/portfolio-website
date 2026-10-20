<route lang="yaml">
meta:
  title: Plant Tracker
  date: 2026
  tags: [Python, React, MongoDB, Plants]
  coverImage: /static/plant-tracker/review-chat.png
</route>

I am current working on a plant tracking app with AI integration to assist with keeping your plants happy and healthy. It's cross platform via Tauri and built with React and Fast API (Python). Big plans for this one.

<video autoplay loop muted controls playsinline preload="metadata">
  <source src="/static/plant-tracker/demo.mp4" type="video/mp4" />
  Your browser does not support embedded video. <a href="/static/plant-tracker/demo.mp4">Download the plant tracker demo</a>.
</video>

## Identification

The user can take pictures in the app, or upload their own, and then a backend workflow inspects the image and gives its best guess for what type of plant it is. From there, the user can add the plant to their shelf.

## Tips

Once a user has put a plant on their shelf, the app provides some tips including light and water requirements in an easily digestable manner. Eventually this will also lead into smart water tracking where plants are scheduled for watering in groups based on their requirements so that the user doesn't have to manually track watering schedules for each plant, and doesn't end up with an arbitrary set of plants they need to water on a given day.

## Journal & Reviews

The user may add care entries into their journal for a plant on their shelf. This is how they can track whats going on with their plant and add progress photos.

When the reviewer agent detects an entry pointing out a problem, it will leave a review on the note to help the user understand what they should do next. It can also create an issue which can then be tracked across later care entries until it is deemed resolved by either the user of the reviewer agent. 

The review also supports a chat functionality where the user may ask follow up questions.

::: full-width
<ImageGallery>
  <img src="/static/plant-tracker/tips.png" />
  <img src="/static/plant-tracker/review-chat.png" />
</ImageGallery>
:::