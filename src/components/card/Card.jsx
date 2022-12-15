import React, { useEffect, useState } from "react";
import dateformat from "dateformat";
import shareIcon from "../../assets/share.png"
import {
  CardContainer,
  CardUserIcon,
  CardUserInfo,
  CardUserContent,
  CardUserInfoName,
  CardUserInfoDate,
  CardUserImage,
  CardUserTextContent,
  CardUserInfoContainer,
  CardUserInfoP,
} from "./Card.styled";

const Card = () => {
  const [userName, setUserName] = useState("Aline");
  const [date, setDate] = useState("12/14/2022");

  return (
    <CardContainer>
      <CardUserImage>
        <img src="https://picsum.photos/id/237/200/300" />
      </CardUserImage>

      <CardUserTextContent>
        <h2> Origin and history of dogs </h2>
        <p>
          Paleontologists and archaeologists have determined that about 60
          million years ago a small mammal, rather like a weasel, lived in the
          environs of what are now parts of Asia. It is called Miacis, the genus
          that became the ancestor of the animals known today as canids: dogs,
          jackals, wolves, and foxes.
        </p>

        <CardUserInfoContainer>
        <CardUserInfoP>
          <CardUserIcon
            id="CardUserIcon"
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            }
          ></CardUserIcon>
          <ul>
            <li>
              <CardUserInfoName>{userName}</CardUserInfoName>
            </li>
            <li>
              <CardUserInfoDate>
                {dateformat(new Date(date), "mmm dd, yyyy")}
              </CardUserInfoDate>
            </li>
          </ul>
        </CardUserInfoP>
        <button> <img src={shareIcon} width="30px"/> </button>
      </CardUserInfoContainer>

      </CardUserTextContent>

      
    </CardContainer>
  );
};
export default Card;

{
  /* <CardUserIcon
          id="CardUserIcon"
          src={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
          }
        ></CardUserIcon>
        <CardUserContent id="CardUserContent">
          <CardUserInfo id="CardUserInfo">
            <CardUserInfoName>{userName}</CardUserInfoName>
            <CardUserInfoDate>
              {dateformat(new Date(date), "mmm dd, yyyy")}
            </CardUserInfoDate>
          </CardUserInfo>
        </CardUserContent> */
}
