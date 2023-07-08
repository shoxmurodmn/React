import React from "react";
import datab from "./databez";

export default class State2 extends React.Component {
   constructor(p) {
      super(p)
      this.state = {
         ism : "",
         familya: "",
         sutdet : datab
      }
   }

   render() {

      const onChangeInfo = ({target}) => {
         this.setState({[target.name] : target.value})
      }
      const { sutdet } = this.state
      let onSurch = ({target:{value}}) => {
         let filti = datab.filter(s => s.name.toLowerCase().includes(value.toLowerCase()))
         this.setState({sutdet : filti})
      }
      return <div>
         <h2>ism : {this.state.ism}</h2>
         <h2>familya : {this.state.familya}</h2>
         <input type="text" name="ism" onChange={onChangeInfo}/>
         <input type="text" name="familya" onChange={onChangeInfo} />
         <br />
         <br />
         <br />
         <input type="text" placeholder="sarch" onChange={onSurch}/>
         {sutdet.map(vl => <h2>{vl.id}. {vl.name }</h2>)}
      </div>


   }
} 