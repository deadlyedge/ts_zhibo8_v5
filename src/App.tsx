import { useGetGameList, useGetTeamList } from "./Hooks/useQueries"
import Select from "react-select"
import { useCookies } from "react-cookie"
import customStyles from "./utils/customSelectStyle"
import GameList from "./components/GameList"
import Logo from "./components/Logo"
import { ISelectObj } from "./types"

function App() {
  // init Cookies
  const [cookies, setCookie] = useCookies(["userTeams"])
  if (!cookies.userTeams) {
    setCookie("userTeams", "勇士总冠军！")
  }

  // react-select ask for this, type exchange.
  const intoObj = (list: string[]) =>
    list.map((team) => {
      return { value: team, label: team }
    })

  // get Team list
  const teamList = intoObj(
    useGetTeamList().sort(
      (p1: string, p2: string) => p1.localeCompare(p2, "zh") // sort team name in chinese)
    )
  )

  // transfer cookies into forms "Select defaultValue" needed.
  const selectedTeamsList = intoObj(cookies.userTeams.split(","))

  // depends on cookies, read gameList
  const gameList = useGetGameList(cookies.userTeams)

  // on Select changes, write value to cookies.
  const handleChange = (selectedOptions: ISelectObj[] | null) => {
    setCookie(
      "userTeams",
      selectedOptions.map((data) => data.value).join(","),
      {
        path: "/",
        maxAge: 1e8, // =100000000
      }
    )
  }

  return (
    <div className='App max-w-2xl mx-auto bg-white bg-opacity-20 p-2 shadow-md rounded-md'>
      <div className='mt-2 mx-8'>
        <Select
          options={teamList}
          defaultValue={selectedTeamsList}
          onChange={handleChange}
          placeholder='选择喜爱的球队...'
          styles={customStyles}
          // minMenuHeight={500}
          closeMenuOnSelect={false}
          isMulti
          // classNamePrefix={'Select'}
        />
      </div>
      <GameList gameList={gameList} />
      <Logo />
    </div>
  )
}

export default App
