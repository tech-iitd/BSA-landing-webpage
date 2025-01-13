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
        designation: 'Software Engineer',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
        rating: 4
    },
    {
        name: 'walter white',
        designation: 'Chemist',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
        rating: 5
    },
    {
      name: 'walter jr.',
      designation: 'Student',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
      rating: 2
  },
  {
      name: 'skyler white',
      designation: 'Housewife',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
      rating: 3
  }
  ];

  const sportsData = {
    basketball: {
      name: "Basketball",
      description: "Basketball is a popular sport played on a rectangular court where two teams of five players each try to score by shooting a ball through the opposing team’s hoop.",
      team: {
        men: {
          leaders: [
            { name: "LeBron James" },
            { name: "Stephen Curry" },
          ],
          members: [
            { name: "Kevin Durant" },
            { name: "Steve Smith" },
            { name: "James Harden" },
            { name: "Kobe Bryant" },
            { name: "Michael Jordan" },
            { name: "Shaquille O'Neal" },
            { name: "Tim Duncan" },
          ]
        },
        women: {
          leaders: [
            { name: "Lin Dan" },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Carolina Marin" },
            { name: "P.V. Sindhu" },
            { name: "Sue Bird" },
            { name: "Diana Taurasi" },
            { name: "Candace Parker" },
            { name: "Maya Moore" },
            { name: "Elena Delle Donne" },
          ]
        }
      }
    },
    cricket: {
      name: "Cricket",
      description: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the center of which is a 22-yard pitch.",
      team: {
        men: {
          leaders: [
            { name: "LeBron James" },
            { name: "Stephen Curry" },
          ],
          members: [
            { name: "Kevin Durant" },
            { name: "Steve Smith" },
            { name: "Virat Kohli" },
            { name: "Rohit Sharma" },
            { name: "Kane Williamson" },
            { name: "Joe Root" },
            { name: "Babar Azam" },
          ]
        },
        women: {
          leaders: [
            { name: "Lin Dan" },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Carolina Marin" },
            { name: "P.V. Sindhu" },
            { name: "Mithali Raj" },
            { name: "Ellyse Perry" },
            { name: "Meg Lanning" },
            { name: "Smriti Mandhana" },
            { name: "Sophie Devine" },
          ]
        }
      }
    },
    football: {
      name: "Football",
      description: "Football is a team sport played between two teams of eleven players with a spherical ball. It is the most popular sport in the world.",
      team: {
        men: {
          leaders: [
            { name: "LeBron James" },
            { name: "Stephen Curry" },
          ],
          members: [
            { name: "Kevin Durant" },
            { name: "Steve Smith" },
            { name: "Lionel Messi" },
            { name: "Cristiano Ronaldo" },
            { name: "Neymar" },
            { name: "Kylian Mbappé" },
            { name: "Luka Modrić" },
          ]
        },
        women: {
          leaders: [
            { name: "Lin Dan" },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Carolina Marin" },
            { name: "P.V. Sindhu" },
            { name: "Megan Rapinoe" },
            { name: "Alex Morgan" },
            { name: "Sam Kerr" },
            { name: "Christine Sinclair" },
            { name: "Lucy Bronze" },
          ]
        }
      }
    },
    volleyball: {
      name: "Volleyball",
      description: "Volleyball is a team sport in which two teams of six players are separated by a net. The objective is to score points by grounding the ball on the other team's court.",
      team: {
        men: {
          leaders: [
            { name: "LeBron James" },
            { name: "Stephen Curry" },
          ],
          members: [
            { name: "Kevin Durant" },
            { name: "Steve Smith" },
            { name: "Maxwell Holt" },
            { name: "Matt Anderson" },
            { name: "Taylor Sander" },
            { name: "Aaron Russell" },
            { name: "Micah Christenson" },
          ]
        },
        women: {
          leaders: [
            { name: "Lin Dan" },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Carolina Marin" },
            { name: "P.V. Sindhu" },
            { name: "Jordan Larson" },
            { name: "Kim Yeon-koung" },
            { name: "Zhu Ting" },
            { name: "Paola Egonu" },
            { name: "Tijana Bošković" },
          ]
        }
      }
    },
    lawnTennis: {
      name: "Lawn Tennis",
      description: "Lawn tennis is a racket sport that can be played individually or in doubles on a grass or hard court, aiming to hit the ball over a net.",
      team: {
        men: {
          leaders: [
            { name: "LeBron James" },
            { name: "Stephen Curry" },
          ],
          members: [
            { name: "Kevin Durant" },
            { name: "Steve Smith" },
            { name: "Roger Federer" },
            { name: "Rafael Nadal" },
            { name: "Novak Djokovic" },
            { name: "Andy Murray" },
            { name: "Dominic Thiem" },
          ]
        },
        women: {
          leaders: [
            { name: "Lin Dan" },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Carolina Marin" },
            { name: "P.V. Sindhu" },
            { name: "Serena Williams" },
            { name: "Naomi Osaka" },
            { name: "Simona Halep" },
            { name: "Ashleigh Barty" },
            { name: "Venus Williams" },
          ]
        }
      }
    },
    badminton: {
      name: "Badminton",
      description: "Badminton is a racquet sport played using shuttlecocks, where players or teams try to score points by hitting the shuttlecock over a net.",
      team: {
        men: {
          leaders: [
            { name: "LeBron James" },
            { name: "Stephen Curry" },
          ],
          members: [
            { name: "Kevin Durant" },
            { name: "Steve Smith" },
            { name: "Chen Long" },
            { name: "Viktor Axelsen" },
            { name: "Kento Momota" },
            { name: "Peter Gade" },
            { name: "Taufik Hidayat" },
          ]
        },
        women: {
          leaders: [
            { name: "Lin Dan" },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Carolina Marin" },
            { name: "P.V. Sindhu" },
            { name: "Tai Tzu-ying" },
            { name: "Ratchanok Intanon" },
            { name: "Nozomi Okuhara" },
            { name: "Akane Yamaguchi" },
            { name: "Saina Nehwal" },
          ]
        }
      }
    },
    tableTennis: {
      name: "Table Tennis",
      description: "Table tennis is a sport where two or four players hit a lightweight ball back and forth across a table using small rackets.",
      team: {
        men: {
          leaders: [
            { name: "LeBron James" },
            { name: "Stephen Curry" },
          ],
          members: [
            { name: "Kevin Durant" },
            { name: "Steve Smith" },
            { name: "Ma Long" },
            { name: "Fan Zhendong" },
            { name: "Xu Xin" },
            { name: "Zhang Jike" },
            { name: "Tomokazu Harimoto" },
          ]
        },
        women: {
          leaders: [
            { name: "Lin Dan" },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Carolina Marin" },
            { name: "P.V. Sindhu" },
            { name: "Chen Meng" },
            { name: "Sun Yingsha" },
            { name: "Liu Shiwen" },
            { name: "Mima Ito" },
            { name: "Ding Ning" },
          ]
        }
      }
    },
    chess: {
      name: "Chess",
      description: "Chess is a two-player strategy game played on a checkered board, where each player moves their pieces to capture the opponent's king.",
      team: {
        men: {
          leaders: [
            { name: "LeBron James" },
            { name: "Stephen Curry" },
          ],
          members: [
            { name: "Kevin Durant" },
            { name: "Steve Smith" },
            { name: "Magnus Carlsen" },
            { name: "Vishwanathan Anand" },
            { name: "Ian Nepomniachtchi" },
            { name: "Fabiano Caruana" },
            { name: "Hikaru Nakamura" },
          ]
        },
        women: {
          leaders: [
            { name: "Lin Dan" },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Carolina Marin" },
            { name: "P.V. Sindhu" },
            { name: "Judith Polgar" },
            { name: "Hou Yifan" },
            { name: "Koneru Humpy" },
            { name: "Alexandra Kosteniuk" },
            { name: "Harika Dronavalli" },
          ]
        }
      }
    },
    athletics: {
      name: "Athletics",
      description: "Athletics is a collection of sports that involve competitive running, jumping, throwing, and walking.",
      team: {
        men: {
          leaders: [
            { name: "LeBron James" },
            { name: "Stephen Curry" },
          ],
          members: [
            { name: "Kevin Durant" },
            { name: "Steve Smith" },
            { name: "Usain Bolt" },
            { name: "Mo Farah" },
            { name: "Eliud Kipchoge" },
            { name: "Ashton Eaton" },
            { name: "Yohan Blake" },
          ]
        },
        women: {
          leaders: [
            { name: "Lin Dan" },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Carolina Marin" },
            { name: "P.V. Sindhu" },
            { name: "Allyson Felix" },
            { name: "Shelly-Ann Fraser-Pryce" },
            { name: "Caterine Ibargüen" },
            { name: "Hima Das" },
            { name: "Tori Bowie" },
          ]
        }
      }
    },
  hockey: {
    name: "Hockey",
    description: "Hockey is a team sport where players use a stick to hit a ball or puck to score goals against the opposing team.",
    team: {
      men: {
        leaders: [
          { name: "LeBron James" },
          { name: "Stephen Curry" },
        ],
        members: [
          { name: "Kevin Durant" },
          { name: "Steve Smith" },
          { name: "Manpreet Singh" },
          { name: "PR Sreejesh" },
          { name: "Lucas Vila" },
          { name: "Alexander Hendrickx" },
          { name: "Arthur Van Doren" },
        ]
      },
      women: {
        leaders: [
          { name: "Lin Dan" },
          { name: "Lee Chong Wei" },
        ],
        members: [
          { name: "Carolina Marin" },
          { name: "P.V. Sindhu" },
          { name: "Rani Rampal" },
          { name: "Eva de Goede" },
          { name: "Maddie Hinch" },
          { name: "Maria Granatto" },
          { name: "Agustina Gorzelany" },
        ]
      }
    }
  },
  squash: {
    name: "Squash",
    description: "Squash is a fast-paced indoor racket sport where players take turns hitting a ball against a front wall.",
    team: {
      men: {
        leaders: [
          { name: "LeBron James" },
          { name: "Stephen Curry" },
        ],
        members: [
          { name: "Kevin Durant" },
          { name: "Steve Smith" },
          { name: "Ali Farag" },
          { name: "Mohamed ElShorbagy" },
          { name: "Paul Coll" },
          { name: "Tarek Momen" },
          { name: "Karim Abdel Gawad" },
        ]
      },
      women: {
        leaders: [
          { name: "Lin Dan" },
          { name: "Lee Chong Wei" },
        ],
        members: [
          { name: "Carolina Marin" },
          { name: "P.V. Sindhu" },
          { name: "Nour El Sherbini" },
          { name: "Nouran Gohar" },
          { name: "Hania El Hammamy" },
          { name: "Amanda Sobhy" },
          { name: "Camille Serme" },
        ]
      }
    }
  },
  aquatics: {
    name: "Aquatics",
    description: "Aquatics is a sports category involving water-based activities such as swimming, diving, and synchronized swimming.",
    team: {
      men: {
        leaders: [
          { name: "LeBron James" },
          { name: "Stephen Curry" },
        ],
        members: [
          { name: "Kevin Durant" },
          { name: "Steve Smith" },
          { name: "Michael Phelps" },
          { name: "Caeleb Dressel" },
          { name: "Ryan Lochte" },
          { name: "Adam Peaty" },
          { name: "Sun Yang" },
        ]
      },
      women: {
        leaders: [
          { name: "Lin Dan" },
          { name: "Lee Chong Wei" },
        ],
        members: [
          { name: "Carolina Marin" },
          { name: "P.V. Sindhu" },
          { name: "Katie Ledecky" },
          { name: "Simone Manuel" },
          { name: "Sarah Sjöström" },
          { name: "Yulia Efimova" },
          { name: "Katinka Hosszú" },
        ]
      }
    }
  },
  weightlifting: {
    name: "Weightlifting",
    description: "Weightlifting is a sport that involves lifting a loaded barbell in a competition to lift the heaviest weight possible in two specific lifts: the snatch and the clean and jerk.",
    team: {
      men: {
        leaders: [
          { name: "LeBron James" },
          { name: "Stephen Curry" },
        ],
        members: [
          { name: "Kevin Durant" },
          { name: "Steve Smith" },
          { name: "Lasha Talakhadze" },
          { name: "Shi Zhiyong" },
          { name: "Ilya Ilyin" },
          { name: "Lu Xiaojun" },
          { name: "Saeid Alihosseini" },
        ]
      },
      women: {
        leaders: [
          { name: "Lin Dan" },
          { name: "Lee Chong Wei" },
        ],
        members: [
          { name: "Carolina Marin" },
          { name: "P.V. Sindhu" },
          { name: "Hidilyn Diaz" },
          { name: "Sarah Robles" },
          { name: "Tatiana Kashirina" },
          { name: "Jiang Huihua" },
          { name: "Loredana Toma" },
        ]
      }
    }
  }  
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

  const highlights = [
    {
      date: '19-01-2025',
      won: 'Manchester United',
      lost: 'Manchester City, Chelsea, Arsenal',
      result: 'Manchester United dominated the league.',
    },
    {
      date: '19-01-2025',
      won: 'Golden State Warriors',
      lost: 'Los Angeles Lakers, Miami Heat, Chicago Bulls',
      result: 'Golden State Warriors claimed a decisive victory.',
    },
    {
      date: '19-01-2025',
      won: 'India',
      lost: 'Australia, England, South Africa',
      result: 'India triumphed in the cricket series.',
    },
    {
      date: '19-01-2025',
      won: 'Lewis Hamilton',
      lost: 'Max Verstappen, Sergio Pérez, Charles Leclerc',
      result: 'Lewis Hamilton secured the F1 championship.',
    }
    
    ];

  return (
    <dataContext.Provider value={{ sports, userReviews, sportsData, team_members, highlights }}>
      {children}
    </dataContext.Provider>
  );
};

export default Data;
