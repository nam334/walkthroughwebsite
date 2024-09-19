import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import logoname from "./logoname.png";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Box, ThemeProvider, Typography, colors } from "@mui/material";
import TabUnselectedIcon from "@mui/icons-material/TabUnselected";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import "@fontsource/roboto/400.css";
import GridViewIcon from "@mui/icons-material/GridView";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import CropIcon from "@mui/icons-material/Crop";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { Grid, InputAdornment, TextField } from "@mui/material";
import LuggageIcon from "@mui/icons-material/Luggage";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Search from "@mui/icons-material/Search";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import Joyride, { ACTIONS, EVENTS } from "react-joyride";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const u1Data = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const p1Data = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 0, 2000, 2181, 2500, 2100];
const x1Labels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: "Jan",
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: "Feb",
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: "Mar",
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: "Apr",
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: "May",
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: "June",
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: "July",
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: "Aug",
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: "Sept",
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: "Oct",
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: "Nov",
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: "Dec",
  },
];
const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],

  height: 370,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

const valueFormatter = (value) => `${value}mm`;

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [run, setRun] = useState(false);
  const steps = [
    {
      content: <h2>Let's begin our journey!</h2>,
      locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
      placement: "center",
      target: "body",
    },

    {
      target: ".my-first-step",
      locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
      content:
        "Charts in analytics dashboards enable clear, quick, and insightful data interpretation.",
    },
    {
      target: ".my-second-step",
      locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
      content:
        "Line charts in dashboards show trends, patterns, and changes over time.",
    },
    {
      target: ".my-third-step",
      locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
      content: "The latest notifications can be accessed here.",
    },
    {
      target: ".search-step",
      locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
      content: "Admin can search through all charts and data.",
    },
    {
      target: ".my-fourth-step",
      locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
      content: "Other properties can be accessed here.",
    },
    {
      target: "body",
      content: "That all, hope you enjoyed!",
    },
  ];

  const handleClickStart = () => {
    setRun(true);
  };
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const drawer = (
    <div>
      <List>
        <ListItemText
          disableTypography
          sx={{
            fontSize: "1.5rem",
            marginLeft: "2rem",
            color: "purple",
            fontWeight: "bold",
            marginTop: "1rem",
            marginBottom: "1.5rem",
            "&:hover": {
              color: "#A020F0",
            },
          }}
        >
          <img src={logoname} width="150" height={50} alt="brand name" />
        </ListItemText>
        {[
          "Dashboard",
          "Authentication",
          "Typography",
          "Color",
          "Highlight",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "#E6E6FA",
                  borderRadius: "10px",
                  color: "#A020F0",
                },
              }}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <GridViewIcon
                    fontSize="xs"
                    sx={{
                      "&:hover": {
                        color: "#A020F0",
                      },
                    }}
                  />
                ) : index === 1 ? (
                  <LockOpenIcon
                    fontSize="xs"
                    sx={{
                      "&:hover": {
                        color: "#A020F0",
                      },
                    }}
                  />
                ) : index === 2 ? (
                  <TextFormatIcon
                    fontSize="xs"
                    sx={{
                      "&:hover": {
                        color: "#A020F0",
                      },
                    }}
                  />
                ) : index === 3 ? (
                  <FormatColorFillIcon
                    fontSize="xs"
                    sx={{
                      "&:hover": {
                        color: "#A020F0",
                      },
                    }}
                  />
                ) : (
                  <HighlightAltIcon
                    fontSize="xs"
                    sx={{
                      "&:hover": {
                        color: "#A020F0",
                      },
                    }}
                  />
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                disableTypography
                sx={{
                  fontSize: "0.875rem",
                  "&:hover": {
                    color: "#A020F0",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className="my-fourth-step">
        {["Zoom In", "Zoom Out", "Magnify", "Crop", "Resize"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#E6E6FA",
                    borderRadius: "10px",
                    color: "#A020F0",
                  },
                }}
              >
                <ListItemIcon>
                  {index === 0 ? (
                    <ZoomInIcon fontSize="xs" />
                  ) : index === 1 ? (
                    <ZoomOutIcon fontSize="xs" />
                  ) : index === 2 ? (
                    <ManageSearchIcon fontSize="xs" />
                  ) : index === 3 ? (
                    <CropIcon fontSize="xs" />
                  ) : (
                    <AspectRatioIcon fontSize="xs" />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  disableTypography
                  sx={{
                    fontSize: "0.875rem",
                    "&:hover": {
                      color: "#A020F0",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex", zIndex: "99" }}>
        <Joyride
          steps={steps}
          continuous={true}
          showProgress={true}
          spotlightClicks={true}
          showSkipButton={true}
          styles={{
            options: {
              primaryColor: "#000",
              textColor: "#000",
              zIndex: 9999,
            },
          }}
        />
        <button onClick={handleClickStart}>Start</button>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: "#fff",
            border: "none",
            boxShadow: "none",
            paddingTop: "0.4rem",

            paddingBottom: "0.4rem",
          }}
        >
          <Toolbar sx={{}}>
            <IconButton
              color="blue"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" component="div" bgcolor={"transparent"}>
            Responsive drawer
          </Typography> */}
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              id="filled-basic"
              value="Search"
              variant="outlined"
              className="search-step"
              sx={{
                width: 500,
                backgroundColor: "#F8FAFC",
                borderRadius: "15px",
                border: "none",
              }}
            />
            <CircleNotificationsIcon
              style={{
                fill: "purple",
                marginLeft: "auto",
                fontSize: "2rem",
              }}
              className="my-third-step"
            />
            <AccountCircleIcon
              style={{
                fill: "#F1C83A",
                fontSize: "2rem",
              }}
            />
            {/* <SettingsIcon
            style={{
              fill: "#0066CC",
              fontSize: "2rem",
            }}
          /> */}
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: "#EDF2F3",
              borderRadius: "10px",
              padding: "1rem",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={11} md={6}>
                    <ThemeProvider
                      theme={{
                        palette: {
                          primary: {
                            main: "#007FFF",
                            dark: "#0066CC",
                          },
                          secondary: {
                            main: "#6C0BA9",
                            dark: "#51087E",
                          },
                        },
                      }}
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="start"
                        padding={2}
                        sx={{
                          borderRadius: "20px",
                          bgcolor: "primary.main",
                          "&:hover": {
                            bgcolor: "primary.dark",
                          },
                        }}
                      >
                        <LuggageIcon
                          style={{
                            fill: "#fff",
                            backgroundColor: "#0066CC",
                            padding: "0.25rem",
                            borderRadius: "10px",
                          }}
                        />
                        <h2
                          variant="h1"
                          style={{
                            color: "#fff",
                            fontFamily: "roboto",
                            fontSize: "2rem",
                          }}
                          disableTypography
                        >
                          $1200.00
                        </h2>
                        <p1
                          variant="h1"
                          style={{ color: "#8AC7DB", fontFamily: "roboto" }}
                        >
                          Total Orders
                        </p1>
                      </Box>
                    </ThemeProvider>
                  </Grid>

                  <Grid item xs={11} md={6} className="my-other-step">
                    <ThemeProvider
                      theme={{
                        palette: {
                          primary: {
                            main: "#5E35B1",
                            dark: "#51087E",
                          },
                        },
                      }}
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="start"
                        padding={2}
                        sx={{
                          borderRadius: "20px",
                          bgcolor: "primary.main",
                          "&:hover": {
                            bgcolor: "primary.dark",
                          },
                        }}
                      >
                        <TabUnselectedIcon
                          style={{
                            fill: "#fff",
                            backgroundColor: "#51087E",
                            padding: "0.25rem",
                            borderRadius: "10px",
                          }}
                        />
                        <h2
                          variant="h1"
                          style={{
                            color: "#fff",
                            fontFamily: "roboto",
                            fontSize: "2rem",
                          }}
                          disableTypography
                        >
                          $500.00
                        </h2>
                        <p1
                          variant="h1"
                          style={{ color: "#C576F6", fontFamily: "roboto" }}
                        >
                          Total Earning
                        </p1>
                      </Box>
                    </ThemeProvider>
                  </Grid>
                </Grid>

                {/* <Grid item xs={6} md={4}>
                <ThemeProvider
                  theme={{
                    palette: {
                      primary: {
                        main: "#6C0BA9",
                        dark: "#51087E",
                      },
                    },
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    padding={2}
                    sx={{
                      borderRadius: "20px",
                      bgcolor: "primary.main",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    }}
                  >
                    <TabUnselectedIcon style={{ fill: "#fff" }} />
                    <h1
                      variant="h1"
                      style={{ color: "#fff" }}
                      disableTypography
                    >
                      $500.00
                    </h1>
                    <p1 variant="h1" style={{ color: "#fff" }}>
                      Total Earning
                    </p1>
                  </Box>
                </ThemeProvider>
              </Grid> */}

                {/* bar chart */}
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    marginTop: "2rem",
                  }}
                  className="my-first-step"
                >
                  <BarChart
                    dataset={dataset}
                    sx={{ fontSize: "10px" }}
                    xAxis={[{ scaleType: "band", dataKey: "month" }]}
                    series={[
                      { dataKey: "london", label: "London", valueFormatter },
                      { dataKey: "paris", label: "Paris", valueFormatter },
                      { dataKey: "newYork", label: "New York", valueFormatter },
                      { dataKey: "seoul", label: "Seoul", valueFormatter },
                    ]}
                    {...chartSetting}
                  />
                </Box>

                {/* bar chart ends */}
              </Grid>
              <Grid item xs={11} md={4}>
                <ThemeProvider
                  theme={{
                    palette: {
                      primary: {
                        main: "#007FFF",
                        dark: "#0066CC",
                      },
                      secondary: {
                        main: "#6C0BA9",
                        dark: "#51087E",
                      },
                    },
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="start"
                    gap={2}
                    padding={2}
                    sx={{
                      borderRadius: "20px",
                      bgcolor: "primary.main",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    }}
                  >
                    <CurrencyExchangeIcon
                      style={{
                        fill: "#fff",
                        backgroundColor: "#0066CC",
                        padding: "0.5rem",
                        borderRadius: "10px",
                      }}
                    />
                    <Box display="flex" flexDirection="column">
                      <h2
                        variant="h1"
                        style={{
                          color: "#fff",
                          fontFamily: "roboto",
                          fontSize: "0.5rem",
                        }}
                        disableTypography
                      >
                        $203k
                      </h2>
                      <p1
                        variant="h1"
                        style={{
                          color: "#eeeeee",
                          fontFamily: "roboto",
                          fontSize: "0.5rem",
                        }}
                      >
                        Total Income
                      </p1>
                    </Box>
                  </Box>
                </ThemeProvider>

                <ThemeProvider
                  theme={{
                    palette: {
                      primary: {
                        main: "#fff",
                        dark: "#eeeeee",
                      },
                      secondary: {
                        main: "#6C0BA9",
                        dark: "#51087E",
                      },
                    },
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="start"
                    gap={2}
                    padding={2}
                    sx={{
                      borderRadius: "20px",
                      marginTop: "1rem",
                      bgcolor: "primary.main",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    }}
                  >
                    <CurrencyExchangeIcon
                      style={{
                        fill: "yellow",
                        backgroundColor: "#FFFDD0",
                        padding: "0.5rem",
                        borderRadius: "10px",
                      }}
                    />
                    <Box display="flex" flexDirection="column">
                      <h2
                        variant="h1"
                        style={{
                          color: "#000",
                          fontFamily: "roboto",
                          fontSize: "0.5rem",
                          fontWeight: "bold",
                        }}
                        disableTypography
                      >
                        $203k
                      </h2>
                      <p1
                        variant="h1"
                        style={{
                          color: "#000",
                          fontFamily: "roboto",
                          fontSize: "0.5rem",
                        }}
                      >
                        Total Income
                      </p1>
                    </Box>
                  </Box>
                </ThemeProvider>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    marginTop: "1rem",
                  }}
                >
                  <LineChart
                    width={300}
                    height={200}
                    series={[
                      { data: pData, label: "pv" },
                      { data: uData, label: "uv" },
                    ]}
                    xAxis={[{ scaleType: "point", data: xLabels }]}
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    marginTop: "1rem",
                  }}
                  className="my-second-step"
                >
                  <LineChart
                    width={300}
                    height={200}
                    series={[
                      {
                        data: u1Data,
                        label: "uv",
                        area: true,
                        stack: "total",
                        showMark: false,
                      },
                      {
                        data: p1Data,
                        label: "pv",
                        area: true,
                        stack: "total",
                        showMark: false,
                      },
                      {
                        data: amtData,
                        label: "amt",
                        area: true,
                        stack: "total",
                        showMark: false,
                      },
                    ]}
                    xAxis={[{ scaleType: "point", data: x1Labels }]}
                    sx={{
                      [`& .${lineElementClasses.root}`]: {
                        display: "none",
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
