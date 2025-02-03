import { ComponentProps } from 'react'
import { DeleteNoteButton } from './DeleteNotebutton'
import { NewNoteButton } from './NewNoteButton'

export const ActionButtonsRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
