import { BrowserRouter, Routes, Route } from "react-router-dom"
import Characters from "./pages/auth/Characters"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App