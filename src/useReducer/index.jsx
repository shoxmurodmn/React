import React, {useState, useReducer} from "react";
import reduser from "./reducer"
import { Container, Form, Inp, Sum, Tr, Ishnomi, Btn, List } from "./style"

const UseReducer = () => {
   const [inpValue, setInpValue] = useState("")
   const [dateValue, setDateValue] = useState("12:00")
   const [state, dispatch] = useReducer(reduser, [])
   const generetTask = (name, vaqt) => {
      return { id: Date.now(), name: name, vaqt: vaqt, checked: false }
   }

   console.log(state);
   return <Container>

   
      <Form action="" onSubmit={(e) =>{
         e.preventDefault()
         dispatch({ type: "add", newTask: generetTask(inpValue, dateValue )})
         setInpValue("")
         setDateValue("12:00")

      }} >
         

         <label htmlFor="REJA"> Rejalashtirilayotga ish</label>
         <Inp placeholder="reja" id="REJA" value={inpValue} onChange={({ target: { value } }) => setInpValue(value)} type="text" /> 


         <label htmlFor="vaqti">Bajarish vaqti</label>
         <Inp placeholder="08:00" type="tex" id="vaqti" value={dateValue} onChange={({ target: { value } }) => setDateValue(value) } />
         {/* <input type="date" name="" id="" /> */}

         <Sum type="submit" value="submit" />
      </Form>

      <List >
         
         {state.map((t) => <Tr style={{ background: t.checked ?"#00fcf4": "#ffc7c7"   }} key={t.id}>
            <Ishnomi> {t.name}{" "}{" "} {t.vaqt}</Ishnomi>
            <td> <Btn  onClick={() => dispatch({ type: "chack", id: t.id })}> {t.checked ? "Unchack": "check" } </Btn> </td>
            <td> <Btn red onClick={()=>dispatch({type: "delete" , id: t.id})}>Delete  </Btn> </td>

         </Tr>)}
      </List>
      
   </Container>
}

export default UseReducer