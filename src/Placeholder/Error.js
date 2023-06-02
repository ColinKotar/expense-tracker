import React from "react"
import { RefreshRounded } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"

const refreshPage = () => {
  window.location.reload()
}

const Error = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        flex: "1 0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h2">🤦‍♂️</Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Typography variant="h6">Oops,</Typography>

          <Typography variant="h6">something went wrong!</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Typography color="text.secondary">{title}</Typography>

        <IconButton onClick={refreshPage}>
          <RefreshRounded />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Error
