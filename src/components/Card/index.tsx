import React from "react";
import { Container } from "./styles";

const Card = (props: Post) => {
  //   const classes = useStyles();
  return (
    <Container>
      <div className="header">
        <div>
          <img className="img" src={props.imageUrl} />
        </div>
        <div className="info">
          <p className="title">{props.title}</p>
          <div className="subtitle">
            <text>{props.author}</text>
            <text>{props.date}</text>
            <text>{props.time}</text>
          </div>
        </div>
      </div>
      <div className="content">
        <p>{props.content}</p>
        <a className="button" href={props.readMoreUrl}>
          Saiba mais
        </a>
      </div>
    </Container>
  );
};

export default Card;
