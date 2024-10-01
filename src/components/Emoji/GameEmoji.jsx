import { useGameEmoji } from '../../hooks/useGameEmoji'

export default function GameEmoji () {
  const { actualFace, animation } = useGameEmoji()

  return (
    <div id='gameEmoji'>
      <span className="emoji" data-animation={animation}>
        {actualFace}
      </span>
    </div>
  )
}
