/** @jsx jsx */
import { jsx, Box, Container, Flex, Button } from "theme-ui";
import { rgba } from "polished";
import SectionHeading from "components/section-heading";
import SubscriptionForm from "components/subscription-form";

const Subscribe = () => {
  const path = () => {
    window.open("https://shadylabs.xyz");
  };

  return (
    <Box sx={styles.background}>
      <Box as="section" sx={styles.section}>
        <Container>
          <SectionHeading
            sx={styles.heading}
            title="Sign up as an artist"
            description="and start uploading your music for the world to hear."
          />
          {/* <SubscriptionForm sx={styles.subscriptionForm} /> */}
          <Flex sx={styles.buttonGroup}>
            <Button variant="text" sx={styles.getStarted} onClick={path}>
              Launch
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Subscribe;

const styles = {
  background: {
    /* backgroundColor: rgba("#e5b8f4", 0.5), */
    //backgroundImage: `url("https://i.imgur.com/tboddqD.gif")`,
     backgroundImage: `url("https://i.giphy.com/tnG8Clzxv4ibvvvYRf.gif")`,
    // backgroundImage: `url("https://i.giphy.com/81O6af6s908c4onyIZ.gif")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  },
  section: {
    backgroundColor: "transparent",
    backdropFilter: "saturate(0%) blur(100px)",
    pt: [9, null, null, null, 10, 13, null],
    pb: [9, null, null, null, 11, 14, null],
  },
  heading: {
    mb: [7, null, null, 8, 9, 8],
    h2: {
      color: "white",
      fontSize: [6, null, null, 8],
    },
    p: {
      color: "#858B91",
      fontSize: [2, null, null, 3],
      m: ["15px auto 0", null, null, "10px auto 0"],
    },
  },
  subscriptionForm: {
    m: ["30px auto 0"],
    maxWidth: [555],
    flexDirection: ["column", null, null, "row"],
    input: {
      backgroundColor: rgba("white", 0.08),
      border: "0 none",
      color: rgba("white", 0.8),
      fontFamily: "body",
      px: [5],
      minHeight: [50, null, null, null, 60],
      boxShadow: "0px 16px 40px rgba(72, 59, 26, 0.08)",
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      "::placeholder": {
        color: rgba("white", 0.8),
        opacity: 1 /* Firefox */,
      },
    },
    button: {
      fontSize: [1, null, null, 2],
      minHeight: [50, null, null, null, 60],
      ml: [0, null, null, 3],
      mt: [4, null, null, 0],
    },
  },
  getStarted: {
    backgroundColor: "transparent",
    border: "2px solid white",
    color: "white",
    p: ["0 16px"],
    minHeight: 45,
    ml: [6],
    display: ["none", null, null, null, "flex"],
  },
  buttonGroup: {
    justifyContent: "center",
  },
};
