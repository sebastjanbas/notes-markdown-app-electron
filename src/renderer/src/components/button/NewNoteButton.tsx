import { VscNewFile } from 'react-icons/vsc'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <VscNewFile className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
