
## Code Test

* `npm install` installs app
* `npm start` runs dev version
* `npm run build` builds production bundle.

Notes:

* The image supplied in the PSD does not have a separate text layer, so it wasn't usable for a responsive mock up. Instead of that image, I grabbed three images from the web. These are not optimized for web, they are just three random images. Load times might be a little long because of this.

* The required 4:3 aspect ratio looks pretty good in most browsers but I've noticed it's a little large in landscape mode for some phones. I assumed this was still desired but wanted to note it.

* The supplied hero image itself does not have a ratio of 4:3. It wasn't specified how the carousel should deal with this issue when it is in 4:3 mode. I assumed that the carousel should be able to support images of different aspect ratios and therefore I'm setting background-size to 'cover' when we are in this aspect ratio, which leads to some clipping but generally shows the important parts of the image. I assumed this was preferrable to showing whitespace in the carousel.

* Rather than use an existing carousel library and try to modify the CSS to match the desired responsive behavior, I chose to write a small custom carousel. This way I could be sure that there were no CSS collisions and hopefully deliver the application in a timely manner. One consequence of this is that I've currently got a bug in mobile Safari wherein using the translate transform leads to a flicker upon carousel reset. At the moment I don't have a fix, but perhaps if we get to the next step of the interview process we can debug this together. In a real world scenario I would test this carousel much more rigorously.

