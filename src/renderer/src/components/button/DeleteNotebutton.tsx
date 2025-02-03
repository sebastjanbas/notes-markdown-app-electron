import { FaRegTrashAlt } from 'react-icons/fa'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <FaRegTrashAlt className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
