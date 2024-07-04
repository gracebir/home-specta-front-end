/** @format */
import friend from "../assets/friend.png";
import green from "../assets/green.png";
import throne from "../assets/thone.png";
import shrelock from "../assets/sherlock.png";
import house from "../assets/house.png";
import behind from "../assets/behind.png";
import scrubs from "../assets/scrubs.png";
import brassic from "../assets/brassic.png";

// continues
import sexy from "../assets/continues/sex.png";
import you from "../assets/continues/you.png";

// collections
import night from "../assets/collections/night.png";
import avatar from "../assets/collections/picture.png";

//genres
import drama from "../assets/genres/drama.png";
import base from "../assets/genres/base.png";
import scifi from "../assets/genres/scifi.png";
import thriller from "../assets/genres/genre1.png";
import standup from "../assets/genres/genre2.png";
import fanta from "../assets/genres/fanta.png";
import crime from "../assets/genres/crime.png";
import site from "../assets/genres/sitcon.png";

export const navItems = [
    { id: 1, text: "TV Shows", href: "/" },
    { id: 2, text: "Discover", href: "/discover" },
];

export const bannerItems = [
    {
        id: 1,
        title: "Fleabag",
        description:
            "Series adapted from the award-winning play about a young woman trying to cope with life in London whilst coming to terms with a recent tragedy.",
        backgroundUrl:
            "https://res.cloudinary.com/dnzidlufh/image/upload/v1720024869/banner-1_dwvmec.png",
    },
    {
        id: 2,
        title: "Girls",
        description:
            "A comedy about the experiences of a group of girls in their early 20s",
        backgroundUrl:
            "https://res.cloudinary.com/dnzidlufh/image/upload/v1720024869/banner-2_a7igyr.png",
    },
    {
        id: 1,
        title: "Killing Eve",
        description:
            "After a series of events, the lives of a security operative and an assassin become inextricably linked.",
        backgroundUrl:
            "https://res.cloudinary.com/dnzidlufh/image/upload/v1720024868/banner-3_vvvlib.png",
    },
];

export const shows = [
    {
        id: 1,
        starsNumber: 5,
        title: "Friends",
        category: "Sitcom",
        episode: "267 Ep",
        imageURL: friend,
    },
    {
        id: 2,
        starsNumber: 5,
        title: "The Green Planet",
        category: "Documentary",
        episode: "6 Ep",
        imageURL: green,
    },
    {
        id: 3,
        starsNumber: 5,
        title: "Games of Thrones",
        category: "Fantasy",
        episode: "120 Ep",
        imageURL: throne,
    },
    {
        id: 4,
        starsNumber: 5,
        title: "Sherlock",
        category: "Thriller",
        episode: "80 Ep",
        imageURL: shrelock,
    },
    {
        id: 5,
        starsNumber: 5,
        title: "House M.D.",
        category: "Drama, Detective",
        episode: "80 Ep",
        imageURL: house,
    },
    {
        id: 6,
        starsNumber: 5,
        title: "Behind Her Eyes",
        category: "Thriller",
        episode: "6 Ep",
        imageURL: behind,
    },
    {
        id: 7,
        starsNumber: 5,
        title: "Scrubs",
        category: "Comedy",
        episode: "76 Ep",
        imageURL: scrubs,
    },
    {
        id: 8,
        starsNumber: 5,
        title: "Brassic",
        category: "Comedy, Crime",
        episode: "30 Ep",
        imageURL: brassic,
    },
];

export const continues = [
    {
        id: 1,
        title: "Sex in the City",
        episode: "1 Episode left",
        imageURL: sexy,
        progress: 0.8,
    },
    {
        id: 2,
        title: "You",
        episode: "5 Episode left",
        imageURL: you,
        progress: 0.6,
    },
];

export const collections = [
    {
        id: 1,
        title: "Girl’s Night In",
        imageURL: night,
    },
    {
        id: 2,
        title: "Award winning",
        imageURL: avatar,
    },
];

export const genres = [
    {
        id: 1,
        title: "Drama",
        imageURL: drama,
    },
    {
        id: 2,
        title: "Psychological Thriller",
        imageURL: thriller,
    },
    {
        id: 3,
        title: "True Crime",
        imageURL: crime,
    },
    {
        id: 4,
        title: "Fantasy",
        imageURL: fanta,
    },
    {
        id: 5,
        title: "Sitcom",
        imageURL: site,
    },
    {
        id: 6,
        title: "Sci Fi",
        imageURL: scifi,
    },
    {
        id: 7,
        title: "Stand-up",
        imageURL: standup,
    },
    {
        id: 8,
        title: "Based True on story",
        imageURL: base,
    },
];

export const categories = [
    "Movie",
    "TV Show",
    "Anime",
    "Cartoon",
    "Latest",
    "Action",
    "Drama",
    "Crime",
    "Art Haus",
    "Comedy",
    "War",
    "Fantasy",
    "Horror",
    "Stand Up",
    "Travel",
    "Biography",
    "Musical",
    "Sci Fi",
    "True Crime",
    "Detective",
];
