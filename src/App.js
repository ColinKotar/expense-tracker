import { Container, CssBaseline, ThemeProvider } from "@mui/material"
import { FirestoreProvider, useFirebaseApp } from "reactfire"
import { getFirestore } from "firebase/firestore"
import { ExpenseList } from "./Expense"
import { Navbar } from "./Navigation"
import { theme } from "./theme"

const App = () => {
  const firestoreInstance = getFirestore(useFirebaseApp())

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Navbar />

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1 0 auto",
          }}
        >
          <ExpenseList />
        </Container>
      </ThemeProvider>
    </FirestoreProvider>
  )
}

export default App
