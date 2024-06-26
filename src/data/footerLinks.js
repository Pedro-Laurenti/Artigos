import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram
} from "react-icons/ai";

import {
  FaTiktok,
} from "react-icons/fa";


const footerLinks = {
  
    legal: [
      {
        name: "Política de privacidade",
        url: "/institucional/politica-de-privacidade",
      },
      {
        name: "Termos e condições",
        url: "/institucional/termos-e-condicoes",
      },
    ],
  
  
    quick: [
      {
        name: "Therapies Love Kids",
        url: "https://www.therapieslovekids.com/",
      },
      {
        name: "Sobre",
        url: "/sobre",
      },
      {
        name: "Contato",
        url: "/contato",
      },
      
    ],
    socialMedia:[
      
      {
        name:"Youtube",
        url:"https://www.youtube.com/@therapieslovekids",
        icons:<AiFillYoutube/>
      },
      {
        name:"Twitter",
        url:"https://twitter.com/therapieslovekd",
        icons:<AiOutlineTwitter/>

      },
      {
        name:"TikTok",
        url:"https://www.tiktok.com/@therapieslovekids",
        icons:<FaTiktok/>
      },
      {
        name:"Instagram",
        url:"https://www.instagram.com/therapieslovekids/",
        icons:<AiFillInstagram/>
      },
    ]
  
};


export default footerLinks