
## Code Test

* `npm install` installs app
* `npm start` runs dev version
* `npm run build` builds production bundle.

Notes:

* I build this in React as requested, although the bulk of my experience has been in Angular. I found React fairly easy to learn, but I am sure I am not following best practices at this point. My goal was simply to produce a workable, extensible application that showcases organizational thinking and a fluency with javascript and CSS. 

* The image supplied in the PSD does not have a separate text layer, so it wasn't usable for a responsive mock up. Instead of that image, I grabbed three images from the web. These are not optimized for web, they are just three random images. Load times might be a little long because of this.

* The required 4:3 aspect ratio looks pretty good in most browsers but I've noticed it's a little large in landscape mode for some phones. I assumed this was still desired but wanted to note it.

* The supplied hero image itself does not have a ratio of 4:3. It wasn't specified how the carousel should deal with this issue when it is in 4:3 mode. I assumed that the carousel should be able to support images of different aspect ratios and therefore I'm setting background-size to 'cover' when we are in this aspect ratio, which leads to some clipping but generally shows the important parts of the image. I assumed this was preferrable to showing whitespace in the carousel.

* Rather than use an existing carousel library and try to modify the CSS to match the desired responsive behavior, I chose to write a small custom carousel. This way I could be sure that there were no CSS collisions and hopefully deliver the application in a timely manner. Hopefully I caught the bugs in this component. I did notice occasional flickering on mobile safari. :( It could use more refactoring to make it generally extensible, but there are plenty of custom carousels already.

* The test called for the items in the masonry grid to be arrange by date. It wasn't clear whether this should be ascending or descending, or horizontally or vertically prioritized. I chose to show the oldest items closer to the top of the page (assuming these articles are 'future events'). 
