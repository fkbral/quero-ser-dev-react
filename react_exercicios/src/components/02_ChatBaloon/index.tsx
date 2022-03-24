import './styles.css'

type ChatBaloonProps = {
	type: 'sender' | 'receiver',
	imageUrl?: string
	text?: string
}

export function ChatBaloon(props: ChatBaloonProps) {
  const { text, imageUrl } = props
  return (
    <div className='chat-box'>
      <div className={`chat-baloon ${props.type}`}>
        <h2>{text}</h2>
        {imageUrl && <img src={imageUrl} width={100} />}
      </div>
    </div>
  )
}