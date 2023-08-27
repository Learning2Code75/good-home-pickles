import {
  Button,
  CircularProgress,
  Dialog,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import FixMenuCard from "./FixMenuCard";
import { RxCrossCircled } from "react-icons/rx";
import { v4 as uuidv4 } from "uuid";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

const FixMenus = () => {
  const [segment, setSegment] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [fixMenuData, setFixMenuData] = React.useState([
    // {
    //   id: uuidv4(),
    //   title: "Chunda",
    //   desc: "Chunda Pickle lorem10  Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 Chunda Pickle lorem10 ",
    //   imgUrl: "https://picsum.photos/300/200",
    // },
    // {
    //   id: uuidv4(),
    //   title: "Godkeri",
    //   desc: "Godkeri Pickle",
    //   imgUrl: "https://picsum.photos/300/200",
    // },
    // {
    //   id: uuidv4(),
    //   title: "Muraba",
    //   desc: "Muraba Pickle",
    //   imgUrl: "https://picsum.photos/300/200",
    // },
    // {
    //   id: uuidv4(),
    //   title: "Methia Keri",
    //   desc: "Methia Keri Pickle",
    //   imgUrl: "https://picsum.photos/300/200",
    // },
  ]);
  const [loading, setLoading] = React.useState(false);
  const [fmdId, setFmdId] = React.useState("");
  const [currItem, setCurrItem] = React.useState({
    id: uuidv4(),
    title: "",
    desc: "",
    imgUrl: "",
  });
  const [isUpdate, setIsUpdate] = React.useState(false);

  const fixmenuCompCollectionRef = collection(db, "fixmenuComponent");
  const getFixmenuComp = async () => {
    try {
      const data = await getDocs(fixmenuCompCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFmdId(filteredData[0]?.id);
      setFixMenuData(filteredData[0]?.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    getFixmenuComp();
  }, []);

  return (
    <>
      <Dialog
        variant="outlined"
        fullWidth={true}
        fullScreen={true}
        open={open}
        onClose={(e, r) => {
          if (r === "backdropClick") {
            setOpen(!open);
          } else {
            setOpen(!open);
          }
        }}
        scroll={"body"}
      >
        <div
          style={{
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <div onClick={() => setOpen(false)}>
              <RxCrossCircled
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          <div
            style={{
              width: "100%",
              // background: `url(${currItem?.imgUrl})`,
              backgroundSize: "cover",
              borderRadius: "1rem",
            }}
          >
            <Typography component="div" variant="h5">
              {currItem?.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                maxHeight: 300,
                overflowY: "scroll",
              }}
            >
              {currItem?.desc}
            </Typography>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <img
                src={currItem?.imgUrl}
                alt={currItem?.imgUrl}
                style={{
                  width: "40%",
                  background: `url(${currItem?.imgUrl})`,
                  backgroundSize: "cover",
                  borderRadius: "1rem",
                }}
              />
            </div>
          </div>
        </div>
      </Dialog>
      <div
        style={{
          padding: "0 1rem",
        }}
      >
        <h2>Fix Menus</h2>

        {loading ? (
          <div
            style={{
              width: "95vw",
              height: "40vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <div>
            <Grid
              container
              gap={2}
              style={{
                padding: "1rem .5rem",
                justifyContent: "center",
                alignItems: "center",
                width: "91vw",
              }}
            >
              {fixMenuData
                // ?.filter((b) => b.segment === "fix-menus-updates")
                // ?.filter((b) => b.subSegment === segment || segment === "")
                ?.map((fms) => (
                  <Grid item xs={12} md={5}>
                    <FixMenuCard
                      data={fms}
                      key={fms?.id}
                      setOpen={setOpen}
                      setCurrItem={setCurrItem}
                      setIsUpdate={setIsUpdate}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
        )}
      </div>
    </>
  );
};

export default FixMenus;
