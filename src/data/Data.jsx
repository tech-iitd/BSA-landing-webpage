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
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
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
  ]

  return (
    <dataContext.Provider value={{ sports, userReviews }}>
      {children}
    </dataContext.Provider>
  );
};

export default Data;
