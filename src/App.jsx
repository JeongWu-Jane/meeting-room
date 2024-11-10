import { Box, Grid } from "@mui/material";
import React from "react";
import { CalendarView } from "./CalendarView";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Sidebar />
        <CalendarView />
      </Grid>
    </Box>
  );
}

export default App;
