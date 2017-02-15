import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
var randomWords = require('random-words');
import utils from './utils';

class GridContentItem {
    constructor(image, title, subTitle, date) {
        this.image = image;
        this.title = title;
        this.subTitle = subTitle;
        this.date = date;
    }
    image = null;
    title = null;
    subTitle = null;
    date = null;
}

class GridContent {
    constructor() {

        for (var i = 0; i < 6; i++) {
            var title = utils.capitalizeFirstLetter(randomWords({ min: 5, max: 8 }).join(" ") + ".");
            var date = utils.randomDate(new Date(2017, 0, 1), new Date(2017, 12, 31));
            this.items.push(new GridContentItem(this.images[i], title, "Lorem Ipsum", date));
        }

        this.items = this.items.sort((a, b) => {
            return a.date - b.date;
        })

    }
    items = [];
    images = [img1, img2, img3, img4, img5, img6];

}

export default GridContent;