import { createDiaryAction } from '@/actions/createDiaryAction'
import React from 'react'

const CreateDiaryForm = ():React.ReactElement => {

  

  return (
    <form action={createDiaryAction} className='flex flex-col gap-4 max-w-xl mx-auto'>
    <textarea
    placeholder='isi diary kamu disini...'
    className='h-52 p-4 text-lg border border-accent'
    name='content'/>
    <button className=' btn btn-accent' type='submit'>Create Now</button>
</form>
  )
}

export default CreateDiaryForm