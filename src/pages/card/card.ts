import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-card',
    templateUrl: 'card.html',
})
export class CardPage {

    cards = [
        {
            imgPath: "anime.jpg",
            title: "My first Anime",
            desc: "This was the first anime I watched",
            favorite: false,
            share: false
        },
        {
            imgPath: "anime1.jpg",
            title: "My second Anime",
            desc: "This was the second Anime I watched",
            favorite: false,
            share: false
        },
        {
            imgPath: "anime1.jpg",
            title: "My third Anime",
            desc: "This was the third Anime I watched",
            favorite: false,
            share: false
        },
        {
            imgPath: "anime1.jpg",
            title: "My fourth Anime",
            desc: "This was the fourth Anime I watched",
            favorite: false,
            share: false
        },
        {
            imgPath: "anime1.jpg",
            title: "My fifth Anime",
            desc: "This was the fifth Anime I watched",
            favorite: false,
            share: false
        },
        {
            imgPath: "anime1.jpg",
            title: "My sixth Anime",
            desc: "This was the sixth Anime I watched",
            favorite: false,
            share: false
        },
        {
            imgPath: "anime1.jpg",
            title: "My seventh Anime",
            desc: "This was the seventh Anime I watched",
            favorite: false,
            share: false
        },
        {
            imgPath: "anime1.jpg",
            title: "My eight Anime",
            desc: "This was the eight Anime I watched",
            favorite: false,
            share: false
        },
        {
            imgPath: "anime1.jpg",
            title: "My ninth Anime",
            desc: "This was the ninth Anime I watched",
            favorite: false,
            share: false
        },
        {
            imgPath: "anime1.jpg",
            title: "My tenth Anime",
            desc: "This was the tenth Anime I watched",
            favorite: false,
            share: false
        }

    ];


    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CardPage');
        this.arrayCount();
    }

    deleteCard(card) {
        let index = this.cards.indexOf(card);
        this.cards.splice(index, 1);
        this.arrayCount();
    }


    clickShare(card) {
        let index = this.cards.indexOf(card);

        if (index > -1) {
            if (card.favorite) {
                this.cards[index].favorite = false;
            } else {
                this.cards[index].favorite = true;
            }
        }

    }

    clickFaveorite(card) {
        let index = this.cards.indexOf(card);

        if (index > -1) {
            if (card.share) {
                this.cards[index].share = false;
            } else {
                this.cards[index].share = true;
            }
        }
    }

    arrayCount() {
        var arrayCount = document.getElementById('arrayCount');
        arrayCount.innerHTML = "My array has this many cards " + this.cards.length
    }


}
