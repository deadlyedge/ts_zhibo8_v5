export type IGameInfo = {
  ID: string,
  Labels: string[],
  Time: string[],
  Team1: string,
  Team2: string,
  Broadcast: string[],
  showTime: string[]
}

export type ISelectObj = {
  value: string,
  label: string,
}

// export type APIResponse = {
//   results: IGameInfo[]
// }

export type IGameList = {
  gameList: IGameInfo[]
}
