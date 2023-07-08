import React from "react";
import './stayle.css';

export default class GetCalc extends React.Component {
   constructor(p) {
      super(p);
      this.state = {
         cound: 1,
         str: "",
         til: "uz",
         isDark: false,
      }
   }

   render(){

      const minus = () => {
         this.setState({ cound: this.state.cound - 1 })
      }
      const plas = () => {
         this.setState({ cound: this.state.cound + 1 })
      }



      const inp = ({ target: { value } }) => {
         this.setState({ str: value })
      }



      const onselectChang = ({ target: { value } }) => {
         this.setState({ til: value })
         console.log(this);
      }
      const seHello = (leg) => {
         switch (leg) {
            case "uz": return "Asalomu allaykom";
            case "ru": return "pevet";
            case "en": return "Hello";
         }
      }

      let onchackbox = () => {
         this.setState({ isDark: !this.state.isDark })
      }

         return <div className="container">
            <div className="box">
               <span> {this.state.cound} </span>
               <div className="minus" onClick={minus}>-</div>
               <div className="plas" onClick={plas}>+</div>
              
            </div>
            <div>
               <h2>{this.state.str}</h2>
               <input type="text" placeholder="isim" onChange={inp} />
               <br /><br />
               <h2>{seHello(this.state.til)}</h2>
               <select name="" id="" onChange={onselectChang}>
                  <option value="uz">salom </option>
                  <option value="en">hello</option>
                  <option value="ru">prvet</option>
               </select>


               <br /> <br /> <br />

               <input type="checkbox" name="" id="" onChange={onchackbox} />
               <span>{this.state.isDark ? "tungi rejim" : "kunduzgi rejim"} </span>
            </div>
         </div>
      }

   }
