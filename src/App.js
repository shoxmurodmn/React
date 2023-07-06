import React from "react";


class Card extends React.Component{
  render() {

    const { data: { src, name }}= this.props
    return <div className="list__item">
      <img src={src} alt="" width={200} />
      <h3>{name}</h3>
    </div>
  }
}

export default Card;




