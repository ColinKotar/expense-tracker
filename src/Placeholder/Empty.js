import React from "react"
import { Box, Typography } from "@mui/material"

const Empty = ({ title }) => {
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
        <Typography variant="h2">🙅‍♂️</Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Typography variant="h6">Oh,</Typography>

          <Typography variant="h6">there's nothing here!</Typography>
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
      </Box>
    </Box>
  )
}

export default Empty
