import React, { createContext } from 'react';
import cricket from '../assets/cricket.svg';
import football from '../assets/football.svg';
import basketball from '../assets/basketball.svg';
import volleyball from '../assets/volleyball.svg';
import lawnTennis from '../assets/lawn_tennis.svg';
import badminton from '../assets/badminton.svg';
import tableTennis from '../assets/table_tennis.svg';
import chess from '../assets/chess.svg';
import athletics from '../assets/athletics.svg';
import hockey from '../assets/hockey.svg';
import squash from '../assets/squash.svg';
import aquatics from '../assets/aquatics.svg';
import weightlifting from '../assets/weightlifting.svg';

export const dataContext = createContext();

const Data = ({ children }) => {
  const sports = {
    cricket: { img: cricket, name: 'Cricket' },
    football: { img: football, name: 'Football' },
    basketball: { img: basketball, name: 'Basketball' },
    volleyball: { img: volleyball, name: 'Volleyball' },
    lawnTennis: { img: lawnTennis, name: 'Lawn Tennis' },
    badminton: { img: badminton, name: 'Badminton' },
    tableTennis: { img: tableTennis, name: 'Table Tennis' },
    chess: { img: chess, name: 'Chess' },
    athletics: { img: athletics, name: 'Athletics' },
    hockey: { img: hockey, name: 'Hockey' },
    squash: { img: squash, name: 'Squash' },
    aquatics: { img: aquatics, name: 'Aquatics' },
    weightlifting: { img: weightlifting, name: 'Weightlifting' },
  };

  const userReviews = [
    {
        name: 'Lucky Bhuskute',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
        rating: 4
    },
    {
        name: 'walter white',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
        rating: 5
    },
    {
      name: 'walter jr.',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
      rating: 2
  },
  {
      name: 'skyler white',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
      rating: 3
  }
  ];

  const sportsData = {
    basketball: {
      name: "Basketball",
      description: "Basketball is a popular sport played on a rectangular court where two teams of five players each try to score by shooting a ball through the opposing team’s hoop.",
      team: [
        { name: "LeBron James" },
        { name: "Stephen Curry" },
        { name: "Kevin Durant" },
        { name: "Giannis Antetokounmpo" },
      ],
    },
    cricket: {
      name: "Cricket",
      description: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the center of which is a 22-yard pitch.",
      team: [
        { name: "Virat Kohli" },
        { name: "Steve Smith" },
        { name: "Ben Stokes" },
        { name: "AB de Villiers" },
      ],
    },
    football: {
      name: "Football",
      description: "Football is a team sport played between two teams of eleven players with a spherical ball. It is the most popular sport in the world.",
      team: [
        { name: "Lionel Messi" },
        { name: "Cristiano Ronaldo" },
        { name: "Neymar Jr." },
        { name: "Kylian Mbappé" },
      ],
    
    },
    volleyball: {
      name: "Volleyball",
      description: "Volleyball is a team sport in which two teams of six players are separated by a net. The objective is to score points by grounding the ball on the other team's court.",
      team: [
        { name: "Kerri Walsh Jennings" },
        { name: "Misty May-Treanor" },
        { name: "Wilfredo León" },
        { name: "Giba" },
      ],
      
    },
    lawnTennis: {
      name: "Lawn Tennis",
      description: "Lawn tennis is a racket sport that can be played individually or in doubles on a grass or hard court, aiming to hit the ball over a net.",
      team: [
        { name: "Roger Federer" },
        { name: "Rafael Nadal" },
        { name: "Serena Williams" },
        { name: "Novak Djokovic" },
      ],
    },
    badminton: {
      name: "Badminton",
      description: "Badminton is a racquet sport played using shuttlecocks, where players or teams try to score points by hitting the shuttlecock over a net.",
      team: [
        { name: "Lin Dan" },
        { name: "Lee Chong Wei" },
        { name: "Carolina Marin" },
        { name: "P.V. Sindhu" },
      ],
    },
    tableTennis: {
      name: "Table Tennis",
      description: "Table tennis is a sport where two or four players hit a lightweight ball back and forth across a table using small rackets.",
      team: [
          {name: "Ma Long" },
          { name: "Zhang Jike" },
          { name: "Ding Ning" },
          { name: "Mima Ito" },
      ],
    },
    chess: {
      name: "Chess",
      description: "Chess is a two-player strategy game played on a checkered board, where each player moves their pieces to capture the opponent's king.",
      team: [
        { name: "Magnus Carlsen" },
        { name: "Viswanathan Anand" },
        { name: "Bobby Fischer" },
        { name: "Garry Kasparov" },
      ],
      
    },
    athletics: {
      name: "Athletics",
      description: "Athletics is a collection of sports that involve competitive running, jumping, throwing, and walking.",
      team: [
        { name: "Usain Bolt" },
        { name: "Michael Johnson" },
        { name: "Florence Griffith-Joyner" },
        { name: "Allyson Felix" },
      ],
    },
    hockey: {
      name: "Hockey",
      description: "Hockey is a team sport where players use a stick to hit a ball or puck to score goals against the opposing team.",
      team: [
        { name: "Wayne Gretzky" },
        { name: "Sidney Crosby" },
        { name: "Alex Ovechkin" },
        { name: "Mario Lemieux" },
      ],
     
    },
    squash: {
      name: "Squash",
      description: "Squash is a fast-paced indoor racket sport where players take turns hitting a ball against a front wall.",
      team: [
        { name: "Nicol David" },
        { name: "Mohamed ElShorbagy" },
        { name: "Raneem El Weleily" },
        { name: "Gregory Gaultier" },
      ],
    },
    aquatics: {
      name: "Aquatics",
      description: "Aquatics is a sports category involving water-based activities such as swimming, diving, and synchronized swimming.",
      team: [
        { name: "Michael Phelps" },
        { name: "Katie Ledecky" },
        { name: "Caeleb Dressel" },
        { name: "Kristin Otto" },
      ],
    },
    weightlifting: {
      name: "Weightlifting",
      description: "Weightlifting is a sport that involves lifting a loaded barbell in a competition to lift the heaviest weight possible in two specific lifts: the snatch and the clean and jerk.",
      team: [
        { name: "Lasha Talakhadze" },
        { name: "Ilya Ilyin" },
        { name: "Tatiana Kashirina" },
        { name: "Nadezhda Evstyukhina" },
      ],
    },
  };

  const team_members = [
    { name: "Virat Kohli" },
    { name: "LeBron James" },
    { name: "Stephen Curry" },
    { name: "Kevin Durant" },
    { name: "Steve Smith" },
    { name: "Ben Stokes" },
    { name: "AB de Villiers" },
  ]

  return (
    <dataContext.Provider value={{ sports, userReviews, sportsData, team_members }}>
      {children}
    </dataContext.Provider>
  );
};

export default Data;
