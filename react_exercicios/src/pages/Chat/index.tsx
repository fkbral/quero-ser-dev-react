import { ChatBaloon } from "../../components/ChatBaloon";

export function Chat() {
  return(
    <>
      <ChatBaloon type='sender' text='Olá Maria'/>
      <ChatBaloon type='receiver' text='Olá Mel'/>
      <ChatBaloon 
        type='receiver'
        text='Veja essa linda cidade'
        imageUrl='https://source.unsplash.com/random/?city,night'
      />
    </>
  )
}