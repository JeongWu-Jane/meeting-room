import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "dayjs/locale/ko";

export function Sidebar() {
  return (
    <Grid item xs={2}>
      {/* Navigation 메뉴 */}
      <Box
        sx={{
          bgcolor: "ghostwhite",
          height: "100vh",
          p: 2,
          mt: 2,
          mb: 2,
        }}
      >
        {/* 상단 캘린더 영역 */}
        <Button variant="contained" fullWidth sx={{ mb: 2 }}>
          회의실 예약
        </Button>
        <Box
          sx={{
            bgcolor: "#fff",
            width: "100%",
            height: "400px",
            position: "relative",
            mb: 2,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
              <DateCalendar />
            </LocalizationProvider>
          </Box>
        </Box>
        {/* 세로로 긴 직사각형 영역 */}
        <Box sx={{ bgcolor: "gray", width: "100%", height: "300px", mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography variant="h6">빠른예약</Typography>
          </Box>
        </Box>
        {/* Navigation 메뉴 */}
      </Box>
    </Grid>
  );
}
