import React from 'react'

function Loading() {
  return (
    <div>
      <div className="w-[300px] bg-zinc-200 rounded-xl shadow-md animate-pulse">
      <div className="h-[300px] w-full bg-zinc-300"></div>
      <div className="p-4 space-y-2">
        <div className="h-4 bg-zinc-300 rounded w-3/4"></div>
        <div className="h-4 bg-zinc-300 rounded w-1/2"></div>
      </div>
    </div>
    </div>
  )
}

export default Loading
