import React from 'react'

const ChatSelectMessage = () => {
  return (
    <div className='items-center hidden md:block '>
      <span className='text-black font-bold text-4xl'>Select a message</span>
      <p>Choose from your existing conversations, start a <br/>new one, or just keep swimming.</p>
      <div className="rounded-full bg-blue-400 w-40 h-12 mt-2 items-center justify-center hidden md:flex">
          <span className="text-xl text-white font-medium">New Messages</span>
        </div>
    </div>
  )
}

export default ChatSelectMessage
