import { useState, useEffect } from "react"
import { IGameInfo } from '../types'
import getAxios from '../utils/getAxios'

export const useGetGameList = (teams: string): IGameInfo[] => {
  const [data, setData] = useState<IGameInfo[]>([])

  const getData = async (teams: string) => {
    const results = await getAxios<IGameInfo>("/?teams=" + teams)
    setData((results))
  }

  useEffect(() => {
    getData(teams)
  }, [teams])

  return data
}

export const useGetTeamList = (): string[] => {
  const [data, setData] = useState<string[]>([])

  const getData = async () => {
    const results = await getAxios<string>("/teamList/")
    setData(results)
  }

  useEffect(() => {
    getData()
  }, [])

  return data
}