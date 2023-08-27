import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";

const GeneralInfo = () => {
  const [generalInfo, setGeneralInfo] = React.useState({
    for_invoice: {
      distributorName: "Good Home Pickles",
      distributorDetails: "9833244723, Mumbai",
      companyBankDetails: {
        bankName: "HDFC Bank",
        acNo: "1211423446546",
        BranchIFSCode: "HDFC0012",
      },
    },
    for_landing_page: {
      contactPage: {
        whatsappBusinessLink: "",
        phoneNo: "9833244723",
        instagramLink:
          "https://instagram.com/vandana_jerajani?igshid=MzRlODBiNWFlZA==",
        gpayQRImgURL: "https://picsum.photos/200/300",
      },
    },
  });
  const [loading, setLoading] = React.useState(false);

  const generalInfoCollectionRef = collection(db, "generalInfo");
  const getGeneralInfo = async () => {
    try {
      const data = await getDocs(generalInfoCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setGeneralInfo(filteredData[0]);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getGeneralInfo();
  }, []);

  return (
    <>
      <div
        style={{
          padding: "0 1rem",
        }}
      >
        <h2>Contact Us</h2>

        {/* <pre>{JSON.stringify(generalInfo, null, 2)}</pre> */}
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
              <Grid item xs={12} md={5}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="div"
                    // image={data?.imgUrl}
                    alt="Loading..."
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "DeepPink",
                        width: "8rem",
                        height: "8rem",
                        padding: "1rem",
                        // background: "green",
                      }}
                    >
                      <BsInstagram
                        style={{
                          fontSize: "3rem",
                        }}
                      />
                    </Box>
                  </CardMedia>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Instagram
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
                        <a
                          target="__blank"
                          href={
                            generalInfo?.for_landing_page?.contactPage
                              ?.instagramLink
                          }
                          style={{
                            color: "#808080",
                          }}
                        >
                          Visit Our Instagram Page
                        </a>
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={5}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="div"
                    // image={data?.imgUrl}
                    alt="Loading..."
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "cyan",
                        width: "8rem",
                        height: "8rem",
                        padding: "1rem",
                        // background: "green",
                      }}
                    >
                      <AiOutlineWhatsApp
                        style={{
                          fontSize: "3rem",
                        }}
                      />
                    </Box>
                  </CardMedia>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        WhatsApp
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
                        <a
                          target="__blank"
                          href={
                            generalInfo?.for_landing_page?.contactPage
                              ?.whatsappBusinessLink
                          }
                          style={{
                            color: "#808080",
                          }}
                        >
                          Store on WhatsApp
                        </a>
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>

              <Grid item xs={12} md={5}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="div"
                    // image={data?.imgUrl}
                    alt="Loading..."
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "lightblue",
                        width: "8rem",
                        height: "8rem",
                        padding: "1rem",

                        // background: "green",
                      }}
                    >
                      <BiSolidPhoneCall
                        style={{
                          fontSize: "3rem",
                        }}
                      />
                    </Box>
                  </CardMedia>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Phone
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
                        Call us @
                        {generalInfo?.for_landing_page?.contactPage?.phoneNo}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </>
  );
};

export default GeneralInfo;
