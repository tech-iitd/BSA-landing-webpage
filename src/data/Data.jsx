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
import userReviews from './userReviews.json';
import events from './events.json'


//Hostel Sports Secretaries Images
import jwalamukhi_secretary from '../assets/secretaries/jwalamukhi.png';
import girnar_secretary from '../assets/secretaries/girnar.png';
import aravali_secretary from '../assets/secretaries/aravali.png';
import kailash_secretary from '../assets/secretaries/kailash.png';
import satpura_secretary from '../assets/secretaries/satpura.png';
import shivalik_secretary from '../assets/secretaries/shivalik.png';
import udaigiri_secretary from '../assets/secretaries/udaigiri.png';
import zanskar_secretary from '../assets/secretaries/zanskar.png';
import kumaon_secretary from '../assets/secretaries/kumaon.png';
import nalanda_secretary from '../assets/secretaries/nalanda.png';
import sahyadri_secretary from '../assets/secretaries/sahyadri.png';
import dronagiri_secretary from '../assets/secretaries/dronagiri.png';
import saptagiri_secretary from '../assets/secretaries/saptagiri.png';
// import nilgiri_secretary from '../assets/secretaries/nilgiri.png';
import vindhyachal_secretary from '../assets/secretaries/vindhyachal.png';
// import kara_secretary from '../assets/secretaries/kara.png';
// import himadri_secretary from '../assets/secretaries/himadri.png';





//Team Members Images
//Athletics
import sanha from '../assets/teams/athletics/sanha_sigger.png';
import metla from '../assets/teams/athletics/metla_reshma.png';
import puneet from '../assets/teams/athletics/puneet.png';
import anjit from '../assets/teams/athletics/anjit_basumatary.png';
  //members
  import Robinson_Karangala from '../assets/teams/athletics/Robinson Karangala.png';
  import Sanjay_Lohar from '../assets/teams/athletics/Sanjay Lohar.png';
  import Aashutosh from '../assets/teams/athletics/Aashutosh.png';
  import Kavya_Kumar from '../assets/teams/athletics/Kavya Kumar.png';
  import Ravi_Charan from '../assets/teams/athletics/Ravi Charan.png';


//Aquatics
import saksham from '../assets/teams/aquatics/saksham_paliwal.png';
import suchir from '../assets/teams/aquatics/suchir_kohli.png';
import rutuja from '../assets/teams/aquatics/rutuja_shelke.png';
import isha from '../assets/teams/aquatics/isha_agrawal.png';

//Football
import sneha from '../assets/teams/football/sneha_dhaka.png';
import shweta from '../assets/teams/football/shweta_tiwari.png'
import mayank from '../assets/teams/football/mayank_arya.png';
import krish from '../assets/teams/football/krish_goswami.png';

//Hokey
import bhavesh from '../assets/teams/hockey/bhavesh_bhojwal.png';
import khemraj from '../assets/teams/hockey/khemraj_newar.png';
  //members
import devansh_pratap_singh from '../assets/teams/hockey/Devansh pratap singh.png';
import Gajendra_Meena from '../assets/teams/hockey/Gajendra Meena.png';
import Harshit_Chaudhary from '../assets/teams/hockey/Harshit Chaudhary.png';
import Manish_Kumar from '../assets/teams/hockey/Manish Kumar.png';
import Narendra_Nath_Sharma from '../assets/teams/hockey/Narendra Nath Sharma.png';
import Srijan_Gupta from '../assets/teams/hockey/Srijan Gupta.png';

//Squash
import piyush from '../assets/teams/squash/piyush_dahiya.png';
import anishka from '../assets/teams/squash/anishka_prajapati.png';
import pranjal from '../assets/teams/squash/pranjal_awasthi.png';
import ayush from '../assets/teams/squash/ayush_yadav.png';
  //members
  import Sarthak_singh from '../assets/teams/squash/Sarthak Singh.png';
  import Antriksh_Saran from '../assets/teams/squash/Antriksh Saran.png';
  import Ananya_Singh from '../assets/teams/squash/Ananya Singh.png';
  import Urvi from '../assets/teams/squash/Urvi.png';

//Basketball
import tannu from '../assets/teams/basketball/tannu_shree.png';
import satwik from '../assets/teams/basketball/satwik_kumar.png';
import riddhi from '../assets/teams/basketball/riddhi_agrawal.png';
  //members
  import Armaan_vaid from '../assets/teams/basketball/Armaan Vaid.png';
  import Dharana_Sehgal from '../assets/teams/basketball/Dharana Sehgal.png';
  import Harsh_Agarwal from '../assets/teams/basketball/Harsh Agarwal.png';
  import Kashvi from '../assets/teams/basketball/Kashvi.png';
  import Pinaki from '../assets/teams/basketball/Pinaki.png';
  import Prashanthi_Jothi from '../assets/teams/basketball/Prashanthi Jothi.png';
  import Aditya_Bansal from '../assets/teams/basketball/Aditya Bansal.png';
  import Smriti_Sehrawat from '../assets/teams/basketball/Smriti Sehrawat.png';
  import Tatsam_Ranjan_Sharma from '../assets/teams/basketball/Tatsam Ranjan Sharma.png';
  import Vartika from '../assets/teams/basketball/Vartika.png';

//Chess
import shourya from '../assets/teams/chess/shourya_vir_jain.png';
import shoan from '../assets/teams/chess/shoan_raj.png';
  //members
  import soham_sameer_palkar from '../assets/teams/chess/Soham Sameer Palkar.png';
  import Shamil_Mohammed from '../assets/teams/chess/Shamil Mohammed.png';
  import Raghav_Singla from '../assets/teams/chess/Raghav Singla.png';

//Cricket
import talin from '../assets/teams/cricket/talin_sharma.png';
import aniket from '../assets/teams/cricket/aniket_tripathi.png';
  //members
  import Rishit_Ojha from '../assets/teams/cricket/Rishit Ojha.png';
  import Lavkush_Verma from '../assets/teams/cricket/Lavkush Verma.png';
  import Madhav_Biyani from '../assets/teams/cricket/Madhav Biyani.png';
  import Nishant_Kumar_Meena from '../assets/teams/cricket/Nishant Kumar Meena.png';
  import Harsh_Jain from '../assets/teams/cricket/Harsh Jain.png';

//Table Tennis
import vaishali from '../assets/teams/table_tennis/vaishali_anand.png';
import dhruv from '../assets/teams/table_tennis/dhruv_jain.png';
import ayush_dudawat from '../assets/teams/table_tennis/ayush_dudawat.png';
  //members
  import Akash from '../assets/teams/table_tennis/Akash.png';
  import Danish_Jhanji from '../assets/teams/table_tennis/Danish Jhanji.png';
  import Arnav_Garg from '../assets/teams/table_tennis/Arnav Garg.png';
  import Divija_Motwani from '../assets/teams/table_tennis/Divija Motwani.png';
  import Sidh_Bansal from '../assets/teams/table_tennis/Sidh Bansal.png';

//Tennis 
import shreyash from '../assets/teams/tennis/shreyash_kumar.png';
import namish from '../assets/teams/tennis/namish_mittal.png';
  //members
  import Chappa_Sri_Vinay from '../assets/teams/tennis/Chappa Sri Vinay.png';
  import Faiq_Ahmed from '../assets/teams/tennis/Faiq Ahmed.png';
  import Smart_Yadav from '../assets/teams/tennis/Smart Yadav.png';
  import Vaibhav_krishna_sriram from '../assets/teams/tennis/Vaibhav Krishna Sriram.png';
  import Tushita from '../assets/teams/tennis/Tushita.png'

//Volleyball
import rajveer from '../assets/teams/volleyball/rajveer_saini.png';
import vivek from '../assets/teams/volleyball/vivek_mori.png';
 
  //members
  import shyamali from '../assets/teams/volleyball/Shyamali.png';
  import Pallavi from '../assets/teams/volleyball/Pallavi.png';
  import Bhavana from '../assets/teams/volleyball/Bhavana.png';
  import Gurseerat from '../assets/teams/volleyball/Gurseerat.png';
  import Lovey from '../assets/teams/volleyball/Lovey.png';
  import Alka from '../assets/teams/volleyball/Alka.png';
  import Priti from '../assets/teams/volleyball/Priti.png';
  import Priya from '../assets/teams/volleyball/Priya.png';


//Weightlifting
import bhanu from '../assets/teams/weightlifting/bhanu_pratap_singh.png';
import Abhinav_Pal from '../assets/teams/weightlifting/Abhinav Pal.png';
import Haneesh_Bhagat from '../assets/teams/weightlifting/Haneesh Bhagat.png';
import Yuvraj_Dawar from '../assets/teams/weightlifting/Yuvraj Dawar.png';
import Hari_Om from '../assets/teams/weightlifting/Hari Om.png'


//badminton
import meghana from '../assets/teams/badminton/meghana_halder.png';
  //members
  import Prakkhyaat_Prajaapat from '../assets/teams/badminton/Prakkhyaat Prajaapat.png';
  import Ruchika from '../assets/teams/badminton/Ruchika.png';
  import Krithik_Eeswar from '../assets/teams/badminton/Krithik Eeswar.png';
  import Vinayak from '../assets/teams/badminton/Vinayak.png';
  import Saumya_Tayal from '../assets/teams/badminton/Saumya Tayal.png';
  import Aditya_Yadav from '../assets/teams/badminton/Aditya Yadav.png';

import { image } from 'framer-motion/client';

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

  // const userReviews = [
  //     {
  //       name: 'Jon Snow',
  //       designation: 'King in the North',
  //       review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
  //       social :{
  //           twitter: 'https://twitter.com',
  //           facebook: 'https://facebook.com',
  //           linkedin: 'https://linkedin.com'
  //       },
  //       rating: 2
  //   },
  //   {
  //       name: 'Daenerys Targaryen',
  //       designation: 'Mother of Dragons',
  //       review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
  //       social :{
  //         twitter: 'https://twitter.com',
  //         facebook: 'https://facebook.com',
  //         linkedin: 'https://linkedin.com'
  //     },
  //       rating: 3
  //   },
  //   {
  //       name: 'Tyrion Lannister',
  //       designation: 'Hand of the King',
  //       review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
  //       social :{
  //         twitter: 'https://twitter.com',
  //         facebook: 'https://facebook.com',
  //         linkedin: 'https://linkedin.com'
  //     },
  //       rating: 4
  //   },
  //   {
  //       name: 'Cersei Lannister',
  //       designation: 'Queen of the Seven Kingdoms',
  //       review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit fuga ea veritatis, quos consequuntur nisi vitae perspiciatis iusto commodi ab sequi assumenda praesentium cum reiciendis cupiditate dolorem omnis adipisci!',
  //       social :{
  //         twitter: 'https://twitter.com',
  //         facebook: 'https://facebook.com',
  //         linkedin: 'https://linkedin.com'
  //     },
  //       rating: 5
  //   },
  // ];

  const sportsData = {
    basketball: {
      name: "Basketball",
      description: "Basketball is a popular sport played on a rectangular court where two teams of five players each try to score by shooting a ball through the opposing team’s hoop.",
      team: {
        men: {
          leaders: [
            { name: "Stawik Kumar",
              post : "Captain",
              image: satwik,
             },
            { name: "Atharva Revankar",
              post: "Vice Captain",
              image: image,

             },
          ],
          members: [
            { name: "Armaan Vaid",
              image: Armaan_vaid
             },
             { name: "Harsh Agarwal", image: Harsh_Agarwal },
             { name: "Pinaki", image: Pinaki },
             { name: "Aditya Bansal", image: Aditya_Bansal },
             { name: "Tatsam Ranjan Sharma", image: Tatsam_Ranjan_Sharma },
          ]
        },
        women: {
          leaders: [
            { name: "Riddhi Agrawal",
              post: "Captain",
              image: riddhi,
             },
            { name: "Tannu Shree",
              post: "Vice Captain",
              image: tannu,
             },
          ],
          members: [
            { name: "Dharana Sehgal",
              image: Dharana_Sehgal,
             },
             { name: "Kashvi", image: Kashvi },
            { name: "Vartika", image: Vartika },
            { name: "Smriti Sehrawat", image: Smriti_Sehrawat },
            { name: "Prashanthi Jothi", image: Prashanthi_Jothi },
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
            { name: "LeBron James",
              post: "Captain",
              image: aniket,
             },
            { name: "Talin Sharma",
              post: "Vice Captain",
              image: talin,
             },
          ],
          members: [
            { name: "Rishit Ojha",
              image: Rishit_Ojha,
             },
             { name: "Lavkush Verma", image: Lavkush_Verma },
            { name: "Madhav Biyani", image: Madhav_Biyani },
            { name: "Nishant Kumar Meena", image: Nishant_Kumar_Meena },
            { name: "Harsh Jain", image: Harsh_Jain }
           
          ]
        },
        women: {
          leaders: [
            { name: "Lin Dan" },
            { name: "Lee Chong Wei" },
          ],
          members: [
  
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
            { name: "Mayank Arya",
              post: "Captain",
              image: mayank,
             },
            { name: "Krish Goswami",
              post: "Vice Captain",
              image: krish,
             },
          ],
          members: [
        
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
            { name: "Sneha Dhaka",
              post: "Captain",
              image: sneha,
             },
            { name: "Shweta Tiwari",
              post: "Vice Captain",
              image: shweta,
             },
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
            { name: "Vivek Mori",
              post: "Captain",
              image: vivek,
             },
            { name: "Rajveer Saini",
              post: "Vice Captain",
              image: rajveer,
             },
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
            { name: "Shyamali",
              image: shyamali,
            },
            { name: "Pallavi",
              image: Pallavi,
             },
             { name: "Bhavana", image: Bhavana },
             { name: "Gurseerat", image: Gurseerat },
             { name: "Lovey", image: Lovey },
             { name: "Alka", image: Alka },
             { name: "Priti", image: Priti },
             { name: "Priya", image: Priya }
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
            { name: "Namish Mittal",
              post : "Captain",
              image: namish,
             },
            { name: "Shreyash Kumar",
              post: "Vice Captain",
              image: shreyash,
             },
          ],
          members: [
            { name: "Chappa Sri Vinay", image: Chappa_Sri_Vinay },
            { name: "Faiq Ahmed", image: Faiq_Ahmed },
            { name: "Smart Yadav", image: Smart_Yadav },
            { name: "Vaibhav Krishna Sriram", image: Vaibhav_krishna_sriram },
          ]
        },
        women: {
          leaders: [
            { name: "Lin Dan" },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Tushita", image: Tushita },
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
            { name: "LeBron James"},
            { name: "Stephen Curry" },
          ],
          members: [
            { name: "Prakkhyaat Prajaapat",
              image: Prakkhyaat_Prajaapat,
             },
            { name: "Krithik Eeswar", image: Krithik_Eeswar },
            { name: "Vinayak", image: Vinayak },
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
            { name: "Meghana Halder",
              post: "Captain",
              image: meghana,
             },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Ruchika", image: Ruchika },
            { name: "Saumya Tayal", image: Saumya_Tayal },
            { name: "Aditya Yadav", image: Aditya_Yadav },
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
            { name: "Ayush Dudawat",
              post: "Captain",
              image: ayush_dudawat,
             },
            { name: "Dhruv Jain",
              post: "Vice Captain",
              image: dhruv,
             },
          ],
          members: [
            { name: "Akash", image: Akash },
            { name: "Danish Jhanji", image: Danish_Jhanji },
            { name: "Arnav Garg", image: Arnav_Garg },
            { name: "Sidh Bansal", image: Sidh_Bansal },
            { name: "Tomokazu Harimoto" },
          ]
        },
        women: {
          leaders: [
            { name: "Vaishali Anand",
              post: "Captain",
              image: vaishali,
             },
            { name: "Lee Chong Wei" },
          ],
          members: [
            { name: "Divija Motwani", image: Divija_Motwani },
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
            { name: "Shourya Vir Jain",
              post : "Captain",
              image: shourya
             },
            { name: "Shoan Raj",
              post: "Vice Captain",
              image: shoan
             },
          ],
          members: [
            { name: "Soham Sameer Palkar",
              image: soham_sameer_palkar
             },
             { name: "Shamil Mohammed", image: Shamil_Mohammed },
            { name: "Raghav Singla", image: Raghav_Singla },
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
            { name: "Puneet",
              post: "Captain",
              image: puneet,
             },
            { name: "Anjit Basumatary",
              post: "Vice Captain",
              image : anjit
             },
          ],
          members: [
            { name: "Robinson Karangala",
              image: Robinson_Karangala,
             },
             { name: "Sanjay Lohar", image: Sanjay_Lohar },
            { name: "Aashutosh", image: Aashutosh },
            { name: "Kavya Kumar", image: Kavya_Kumar },
            { name: "Ravi Charan", image: Ravi_Charan },

          ]
        },
        women: {
          leaders: [
            { name: "Sanha Sigger",
              post: "Captain",
              image: sanha,
            },
            { name: "Metla Reshma",
              post: "Vice Captain",
              image: metla,
            },
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
          { name: "Bhavesh Bhojwal",
            post: "Captain",
            image: bhavesh,
           },
          { name: "Khemraj Newar",
            post: "Vice Captain",
            image: khemraj,
           },
        ],
        members: [
          { name: "Devansh Pratap Singh",
            image: devansh_pratap_singh,
           },
           { name: "Gajendra Meena", image: Gajendra_Meena },
           { name: "Harshit Chaudhary", image: Harshit_Chaudhary },
           { name: "Manish Kumar", image: Manish_Kumar },
           { name: "Narendra Nath Sharma", image: Narendra_Nath_Sharma },
           { name: "Srijan Gupta", image: Srijan_Gupta }
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
          { name: "Ayush Yadav",
            post : "Captain",
            image: ayush
           },
          { name: "Piyush Dahiya",
            post: "Vice Captain",
            image: piyush
           },
        ],
        members: [
          { name: "Sarthak Singh",
            image: Sarthak_singh,
           },
          { name: "Antriksh Saran",
            image: Antriksh_Saran,
           },
          { name: "Ali Farag" },
          { name: "Mohamed ElShorbagy" },
          { name: "Paul Coll" },
          { name: "Tarek Momen" },
          { name: "Karim Abdel Gawad" },
        ]
      },
      women: {
        leaders: [
          { name: "Pranjal Awasthi",
            post: "Captain",
            image: pranjal
           },
           { name: "Anishka Prajapati",
            post: "Vice Captain",
            image: anishka
           },
        ],
        members: [
          { name: "Urvi",
            image: Urvi,
           },
          { name: "Ananya Singh",
            image: Ananya_Singh,
           },
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
          { name: "Saksham Paliwal",
            post: "Captain",
            image: saksham,
           },
          { name: "Suchir Kohli",
            post: "Vice Captain",
            image: suchir,
           },
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
          { name: "Isha Agrawal",
            post: "Captain",
            image: isha,
           },
          { name: "Rutuja Shelke",
            post: "Vice Captain",
            image: rutuja,
           },
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
          { name: "Bhanu Pratap Singh",
            post: "Captain",
            image: bhanu,
           },
          { name: "Stephen Curry" },
        ],
        members: [
          { name: "Abhinav Pal", image: Abhinav_Pal },
          { name: "Haneesh Bhagat", image: Haneesh_Bhagat },
          { name: "Yuvraj Dawar", image: Yuvraj_Dawar },
          {name: "Hari Om", image: Hari_Om},
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
    { name: "Rohit Raj Mourya", post: "Jwalamukhi", image: jwalamukhi_secretary },
    { name: "Nitesh Dohre ", post: "Dronagiri", image: dronagiri_secretary },
    { name: "Tatsam Ranjan", post: "Zanskar", image: zanskar_secretary },
    { name: "Manish Patel", post: "Satpura", image: satpura_secretary },
    { name: "Ishant Singh", post: "Saptagiri", image: saptagiri_secretary },
    {name: "Abhishek Singh", post: "Vindhyachal", image: vindhyachal_secretary },
    { name: "Aishwary Sharma", post: "Aravali", image: aravali_secretary },
    { name: "Ananya khandelwal ", post: "Kailash", image: kailash_secretary },
    { name: "krish shah", post: "Shivalik", image: shivalik_secretary },
    { name: "Vaibhav Ahuja", post: "Udaigiri", image: udaigiri_secretary },
    { name: "Harshvardhan Singh ", post: "Kumaon", image: kumaon_secretary },
    { name: "Bharavi Yadav", post: "Nalanda", image: nalanda_secretary },
    { name: "Sita Bissu ", post: "Sahyadri", image: sahyadri_secretary },
    
    { name: "Kinshuk Goswami ", post: "Girnar", image: girnar_secretary },

    // { name: "Madhav Biyani", post: "Nilgiri", image: nilgiri_secretary },

  ]

  const highlights = [
    {
      date: '19-01-2025',
      won: 'Manchester United',
      lost: 'Manchester City, Chelsea, Arsenal',
      result: 'Manchester United dominated the league.',
      images:[
        {src: "https://source.unsplash.com/1600x900/?football", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?soccer", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?premierleague", alt: "img"},
      ]
    },
    {
      date: '19-01-2025',
      won: 'Golden State Warriors',
      lost: 'Los Angeles Lakers, Miami Heat, Chicago Bulls',
      result: 'Golden State Warriors claimed a decisive victory.',
      images:[
        {src: "https://source.unsplash.com/1600x900/?football", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?soccer", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?premierleague", alt: "img"},
      ]
    },
    {
      date: '19-01-2025',
      won: 'India',
      lost: 'Australia, England, South Africa',
      result: 'India triumphed in the cricket series.',
      images:[
        {src: "https://source.unsplash.com/1600x900/?football", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?soccer", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?premierleague", alt: "img"},
      ]
    },
    {
      date: '19-01-2025',
      won: 'Lewis Hamilton',
      lost: 'Max Verstappen, Sergio Pérez, Charles Leclerc',
      result: 'Lewis Hamilton secured the F1 championship.',
      images:[
        {src: "https://source.unsplash.com/1600x900/?football", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?soccer", alt: "img"},
        {src: "https://source.unsplash.com/1600x900/?premierleague", alt: "img"},
      ]
    }
    
    ];

  // const events = [
  //   { date: '2024-12-30', title: 'Team Meeting', description: 'Discuss project updates' },
  //   { date: '2025-01-21', title: 'Conference', description: 'Attend the annual conference' },
  //   { date: '2025-01-02', title: 'Christmas Party', description: 'Holiday celebration with friends' },
  //   { date: '2025-01-05', title: 'Christmas Party', description: 'Holiday celebration with friendsHoliday' },
  // ];

  return (
    <dataContext.Provider value={{ sports, userReviews, sportsData, team_members, highlights, events }}>
      {children}
    </dataContext.Provider>
  );
};

export default Data;
