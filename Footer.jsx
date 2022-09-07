import React from "react";
import styled from "styled-components";

import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div style={{
          marginLeft: "4.5rem",
        }} className="brand container">
          <p><big style={{
            color: "#EA4141",
            fontWeight: "700",
            fontSize: "2rem",
            fontFamily: "'Anton', sans-serif",
          }}>AWESOME CODING</big></p>
          <p style={{
            color: "whitesmoke",
            fontSize: "25px",
            fontWeight: "700",
          }}>
           About Us
          </p>
          <p style={{
            color: "whitesmoke",
            fontSize: "25px",
            fontWeight: "700",
          }}>Carear And Culture</p>
          <p style={{
            color: "whitesmoke",
            fontSize: "25px",
            fontWeight: "700",
          }}>Blog</p>
          <ul>
            <li style={{
              
            }}>
              <a href="https://www.youtube.com/channel/UCpg125L2evExZ5WDCtXZkbQ"><img style={{
              height: "30px",
              width: "40px",
            }} src="https://foodhutz.co.uk/public/assets/images/tiktok.png" alt="" /></a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCpg125L2evExZ5WDCtXZkbQ"><img style={{
              height: "30px",
              width: "40px",
            }} src="https://foodhutz.co.uk/public/assets/images/facebook.png" alt="" /></a>
            </li>
            <li>
              <img style={{
              height: "30px",
              width: "40px",
            }} src="https://foodhutz.co.uk/public/assets/images/instagram.png" alt="" />
            </li>
            <li>
              <img style={{
              height: "30px",
              width: "40px",
            }} src="https://foodhutz.co.uk/public/assets/images/linkedin.png" alt="" />
            </li>
          </ul>
        </div>
        <div style={{
          marginRight: "4.5rem",
        }} className="about container">
          <div className="title">
            <h3><big style={{
            color: "#EA4141",
            fontWeight: "800",
            fontSize: "2rem",
            fontFamily: "'Anton', sans-serif",
          }}>LEGAL</big></h3>
          </div>
          <p style={{
            color: "whitesmoke",
            fontSize: "25px",
            fontWeight: "700",
          }}>Return Policy</p>
          <p style={{
            color: "whitesmoke",
            fontSize: "25px",
            fontWeight: "700",
          }}>Privacy Policy</p>
          <p style={{
            color: "whitesmoke",
            fontSize: "25px",
            fontWeight: "700",
          }}>Terms And Conditions</p>
        </div>

        <div style={{
          marginRight: "15rem",
        }} className="contact container">
          <div className="title">
          <p style={{
            color: "#EA4141",
            fontWeight: "800",
            fontSize: "25px",
            fontFamily: "'Anton', sans-serif",
          }}>LIKE AND SUBSCRIBE</p>
          <p style={{
            color: "#EA4141",
            fontWeight: "800",
            fontSize: "25px",
            fontFamily: "'Anton', sans-serif",
          }}>FOR MORE</p>
          </div>
          <button style={{
               
              }}>
               <a href="https://www.youtube.com/channel/UCpg125L2evExZ5WDCtXZkbQ" ><img src="https://static.vecteezy.com/system/resources/thumbnails/004/785/431/small/subscribe-button-icon-vector.jpg" alt="" /></a></button>
          <button style={{
               
              }}>
              <a href="https://www.youtube.com/channel/UCpg125L2evExZ5WDCtXZkbQ" > <img src="https://cdn.pixabay.com/photo/2021/07/17/09/33/subscribe-6472631_960_720.png" alt="" /></a></button>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2 style={{
          fontSize: "25px",
        }}>
          Copyright @ 2022 <span>Awesome Coding</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

const Section = styled.footer`
  margin-top: 10rem;
  margin-bottom: 10rem;
  background: linear-gradient(to right, #282727, #282727);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 1vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 2;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      
      
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    height: 70px;
    width: 200px;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;