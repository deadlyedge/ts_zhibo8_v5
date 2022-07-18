import { Key } from "react"
import { IGameList, IGameInfo } from "../types"
import GameItem from "./GameItem"

const GameList = (results: IGameList) => {
  return (
    <div>
      <div className='grid grid-cols-10 font-medium text-white p-2'>
        <div className='col-span-2 mx-auto'>TIME</div>
        <div className='col-span-5 mx-auto'>GAME</div>
        <div className='col-span-3 mx-auto'>BROADCAST</div>
      </div>
      <div>
        {results.gameList.map((gameItem: IGameInfo, index: Key) => {
          return <GameItem key={index} gameItem={gameItem} />
        })}
      </div>
    </div>
  )
}

export default GameList
