import React, {useState} from "react"

const Practice = (props) => {
const [name, setName] = useState('')

const handleChange =(event)=>{
    setName(event.target.value)
}
const handleSubmit = (event)=>{
    event.preventDefault()
    props.onGetNameData(name)
    setName('')
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="Full Name" onChange={handleChange} /> <br />
        <button type="submit">Submit</button>
    </form>
  )
}
export default Practice