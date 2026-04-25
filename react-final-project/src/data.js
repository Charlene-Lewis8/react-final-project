//OMDb API DATA  https://www.omdbapi.com/?s=harry-potter&apikey=2c2682af

import gryffindorImg from './assets/gryffindor.jpg';
import hufflepuffImg from './assets/hufflepuff.jpg';
import ravenclawImg from './assets/ravenclaw.jpg';
import slytherinImg from './assets/slytherin.jpg';


 const houseData =  [
    {
        id:'gryffindor',
        name: 'Gryffindor',
        values: 'Bravery, Helping, Chivalry',
        description: 'Founded by Godric Gryffindor, this house prizes courage and determination. Its emblematic animal is the lion, and its colors are scarlet and gold.',
        icon: gryffindorImg
    },
    {
        id: 'hufflepuff',
        name: 'Hufflepuff',
        values: 'Hard work, Patience, Loyalty',
        description: 'Founded by Helga Hufflepuff, this house is known for being inclusive and valuing fair play. Its emblematic animal is the badger, and its colors are yellow and black.',
        icon: hufflepuffImg
    },
    {
        id: 'ravenclaw',
        name: 'Ravenclaw',
        values: 'Intelligence, Knowledge, Wit',
        description: 'Founded by Rowena Ravenclaw, this house values intelligence, learning, and wisdom. Its emblematic animal is the eagle, and its colors are blue and bronze.',
        icon: ravenclawImg
    },
    {
        id: 'slytherin',
        name: 'Slytherin',
        values: 'Ambition, Cunning, Useful',
        description: 'Founded by Salazar Slytherin, this house values leadership and achievement. Its emblematic animal is the serpent, and its colors are green and silver.',
        icon: slytherinImg
    }
];

 const movieData = [
    {
        title: "Harry Potter and the Deathly Hallows: Part 2",
        year: "2011",
        id: "tt1201607",
        Type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        year: "2001",
        id: "tt0241527",
        Type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        year: "2004",
        id: "tt0304141",
        Type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"
        },
        {
        title: "Harry Potter and the Chamber of Secrets",
        year: "2002",
        id: "tt0295297",
        Type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BNGJhM2M2MWYtZjIzMC00MDZmLThkY2EtOWViMDhhYjRhMzk4XkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
        title: "Harry Potter and the Goblet of Fire",
        year: "2005",
        id: "tt0330373",
        Type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BMTIzNzUzOTk2NV5BMl5BanBnXkFtZTYwNTI4MDg2._V1_SX300.jpg"
        },
        {
        title: "Harry Potter and the Order of the Phoenix",
        year: "2007",
        id: "tt0373889",
        Type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BYWJmM2M1YzItMjY1Ni00YzRmLTg5YWYtNDFmNTJjNzQ0ODkyXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
        title: "Harry Potter and the Deathly Hallows: Part 1",
        year: "2010",
        id: "tt0926084",
        Type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
        },
        {
        title: "Harry Potter and the Half-Blood Prince",
        year: "2009",
        id: "tt0417741",
        Type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"
        },
        {
        title: "Harry Potter 20th Anniversary: Return to Hogwarts",
        year: "2022",
        id: "tt16116174",
        Type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BZTNhNjg1NWItZThkNC00N2JiLTkzOTgtNzZjYzAyYTQ4OTEwXkEyXkFqcGc@._V1_SX300.jpg"
        },
        ];

        export { houseData, movieData };