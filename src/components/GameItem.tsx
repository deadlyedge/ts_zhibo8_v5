const GameItem = ({ gameItem }) => {
  // console.log(gameItem)
  const splitBroadCast = (array: string[]) => {
    return array.map((item, index) => (
      <span
        key={index}
        className=' bg-orange-200 font-mono text-xs text-slate-800 whitespace-nowrap px-2 m-1 rounded-full'>
        {item}
      </span>
    ))
  }

  const fixLabels = gameItem.Labels.filter(
    (item: string[]) => ![gameItem.Team1, gameItem.Team2].includes(item)
  ).slice(-2)

  return (
    <div className='transition duration-200 grid grid-cols-10 font-medium text-white bg-white bg-opacity-0 rounded-md p-2 hover:bg-opacity-30 hover:md:scale-110 hover:shadow'>
      <div className='col-span-2'>
        <div className='text-sm ml-1'>{gameItem.showTime[0]}</div>
        <div className='text-xl text-right mr-7 drop-shadow-[0_0px_3px_rgba(255,255,255,0.75)] '>
          {gameItem.showTime[1]}
        </div>
      </div>
      <div className='col-span-5 self-center'>
        <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block drop-shadow-md'>
          <span className='relative text-white'>{gameItem.Team1}</span>
        </span>
        <span className='before:block before:absolute before:inset-1 before:skew-y-3 before:bg-amber-400 relative inline-block'>
          <span className='relative text-slate-600 text-xs mx-2'>VS</span>
        </span>
        <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-lime-500 relative inline-block drop-shadow-md'>
          <span className='relative text-white'>{gameItem.Team2}</span>
        </span>
        <span className='bg-slate-600 text-xs text-slate-100 whitespace-nowrap px-2 m-2 rounded-full'>
          {fixLabels}
        </span>
      </div>
      <div className='col-span-3 self-center'>
        {splitBroadCast(gameItem.Broadcast)}
      </div>
    </div>
  )
}

export default GameItem
