import { BrowserRouter, Routes, Route } from "react-router-dom"
import Characters from "./pages/auth/Characters"
import NotFound from "./pages/NotFound"
import CreateCharacter from "./pages/auth/CreateCharacter"
import { SidebarProvider } from "./components/ui/sidebar"

const App = () => {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/criar-personagem" element={<CreateCharacter />} />
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  )
}

export default App