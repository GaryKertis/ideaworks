import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';
import utils from './utils';
var randomWords = require('random-words');

class HeroItem {
    constructor(image, title1, title2, subTitle, content) {
        this.image = image;
        this.title1 = title1;
        this.title2 = title2;
        this.subTitle = subTitle;
        this.content = content;
    }
    image = null;
    title1 = null;
    title2 = null;
    subTitle = null;
    content = null;
}

class HeroContent {
    constructor() {
        for (var i = 0; i < 3; i++) {
            var title1 = utils.capitalizeFirstLetter(randomWords(1).join(" ") + ":");
            var title2 = utils.capitalizeFirstLetter(randomWords({ min: 3, max: 5 }).join(" ") + ".");
            var content = utils.capitalizeFirstLetter(randomWords({ min: 15, max: 20 }).join(" ") + ".");
            var date = utils.randomDate(new Date(2017, 0, 1), new Date(2017, 12, 31));
            this.items.push(new HeroItem(this.images[i], title1, title2, date, content));
        }
    }
    items = [];
    images = [hero1, hero2, hero3];

}

export default HeroContent;