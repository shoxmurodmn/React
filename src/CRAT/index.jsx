import React from "react";

import { Del, Search } from './style'
import BezInfo from './mock'
import "./style.css"

let data = BezInfo

export default class CRAt extends React.Component {
   constructor(p) {
      super(p)
      this.state = {
         info: data,
         typeSort: "id",
         newName: '',
         newsurName: "",
         slektidrsyude: "",
         setName: "",
         setSurName: "",
      }
   }
   render() {
      const { info, typeSort, newName, newsurName, slektidrsyude, setSurName , setName } = this.state

      const save = (id) => {
       
         data = data.map((vl) => {
            return vl.id === id ? { ...vl, name: setName, surName: setSurName, } : vl
         })
         this.setState({ info: data, slektidrsyude: null })

         console.log(info);
      }
      // ! delete
      const del = (id) => {
         data = data.filter((value) => value.id !== id)
         this.setState({ info: data })
      }

      // ! Read
      const search = (qiy) => {
         // let res = data.filter(vl => vl.name.toUpperCase().includes(qiy.toUpperCase()))
         let res = data.filter((vl) => {
            if (typeSort === "name") {
               return vl.name.toUpperCase().includes(qiy.toUpperCase())
            }
            else {
               return vl.surName.toUpperCase().includes(qiy.toUpperCase())
            }
         })

         this.setState({ info: res })

      }

      let sort = () => {
         // console.log(typeSort);
         let rest = data.sort((a, b) => {
            if (typeSort === "id") {
               return a.id - b.id
            } else if (typeSort === "name") {
               return a.name.localeCompare(b.name)
            }
            else if (typeSort === "surName") {
               return a.surName.localeCompare(b.surName)
            }
         }
         )

         this.setState({ info: rest })
      }

      function* generdid() {
         let leg = data.length
         while (true) {
            yield ++leg
         }
      }
      const setAdd = () => {

         data = [...data, { id: generdid().next().value, name: newName, surName: newsurName }]
         if (!(newName == "" && newName == " " && newsurName == " " && newsurName == " ")) {
            this.setState({ info: data })
         }
      }

      
      return (
         <div className="cantaner">
            <div className="Read"> <Search placeholder="Search" onChange={({ target: { value } }) => search(value)} />
               <Del color onClick={sort}> sort {"    "}
               </Del>
               <select onChange={({ target: { value } }) => this.setState({ typeSort: value })}>
                  <option value="id">id</option>
                  <option value="name">name</option>
                  <option value="surName">surname</option>
               </select>
            </div>
            <br />
            <div className="add">
               <input type="text" className="inp" placeholder="name" value={newName} onChange={({ target: { value } }) => (this.setState({ newName: value }))} /> {"  "}
               <input type="text" className="inp" placeholder="surname" value={newsurName} onChange={({ target: { value } }) => (this.setState({ newsurName: value }))} /> {"  "}

              
               <Del colors onClick={() => {
                  setAdd()
                  this.setState({ newName: "", newsurName: '' })
               }
               }> Add
               </Del>
            </div>

            <table>{info.map(({ id, name, surName }) =>
               <tr>
                <td> <span id="idadd">{id}</span></td>  
                  <td> {id === slektidrsyude ? <input type="text" onChange={({ target: { value } }) => this.setState({ setName: value })} defaultValue={name} /> : name} </td>
                  <td> {id === slektidrsyude ? <input type="text" onChange={({ target: { value } }) => this.setState({ setSurName: value })} defaultValue={surName} /> : surName}</td>
                  
                <td>  {" "}  <Del onClick={() => del(id)}> Del</Del> {" "}
                  {slektidrsyude === id ? <span>
                        <button className="Enit" onClick={()=> save(id)}>save</button>
                        <button className="Enit" onClick={() => this.setState({ slektidrsyude: null })}>Cancel</button>
                     </span> : (<button className="Enit" onClick={() => this.setState({ slektidrsyude: id, setName: name, setSurName: surName, })}> Enit</button>)}</td>
                  </tr>
              )}</table>
         </div>
      )
   }
}