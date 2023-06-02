import { AttachMoneyRounded } from "@mui/icons-material"
import { Box, Container, Typography } from "@mui/material"
import React from "react"

const Navbar = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.75rem 1rem",
        }}
      >
        <AttachMoneyRounded sx={{ fontSize: "1.75rem" }} />

        <Typography variant="h5">Expense Tracker</Typography>
      </Box>
    </Container>
  )
}

export default Navbar
