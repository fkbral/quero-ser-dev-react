import { useState } from 'react'
import './styles.css'
import { v4 as uuid } from 'uuid'

export function ControleDePresenca() {
  const [studentToAdd, setStudentToAdd] = useState('')
  const [studentAttendanceList, setStudentAttendanceList] = 
    useState<string[]>([])
    // useState([] as string[])

  // function handleInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setStudentToAdd(event.target.value)
  // }

  console.log(studentAttendanceList)

  function handleRegisterStudentAttendance(event: React.FormEvent<HTMLFormElement>) { 
    event.preventDefault()

    setStudentAttendanceList(previousState => {
      return [...previousState, studentToAdd]
    })
  }

  return(
    <>
      <form onSubmit={handleRegisterStudentAttendance}>
        <label htmlFor="add-student-to-list">
          Nome do Aluno para adicionar na lista
        </label>
        <input
         type="text" 
         id="add-student-to-list"
         value={studentToAdd}
         onChange={(event) => setStudentToAdd(event.target.value)}
        //  onChange={handleInputOnChange}
        />
        <button type='submit'>Adicionar à lista</button>
      </form>

      <h1>Lista de presenca</h1>

      <ol>
        {studentAttendanceList.map((studentName) => {
          return <li key={uuid()}>{studentName}</li>
          // 1) John Doe
          // 2) Fulano da Silva
        })}
      </ol>
    </>
  )
}