import React from "react"
import { Box, Skeleton } from "@mui/material"

const LoadingListItem = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Skeleton variant="circular" width={28} height={26} />

      <Skeleton variant="text" width="100%" height={30} />
    </Box>
  )
}

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        flex: "1 0 auto",
      }}
    >
      {Array(10)
        .fill(true)
        .map((_, i) => (
          <LoadingListItem key={i} />
        ))}
    </Box>
  )
}

export default Loading
