import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";

export default function DailyMenuCard({
  data,
  setOpen,
  setCurrItem,
  deleteItem,
  setIsUpdate,
}) {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151, maxHeight: 151 }}
        image={data?.imgUrl}
        alt="Loading..."
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {data?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{
              maxHeight: 100,
              overflowY: "scroll",
            }}
          >
            {data?.desc}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            pl: 1,
            pr: 1,
            pb: 1,
            width: "100%",
          }}
        >
          <IconButton
            aria-label="previous"
            onClick={() => {
              setOpen(true);
              setCurrItem(data);
            }}
          >
            <RemoveRedEyeRoundedIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
