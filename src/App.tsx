// App.tsx sets up the main application structure, including routing.
// It applies background styling and defines routes for the application.

import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import HomepageView from "./views/HomepageView"

function App() {
  return (
    <Box
      style={{
        background: "#64bce8",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<HomepageView />} />
      </Routes>
    </Box>
  )
}

export default App
