/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text } from "theme-ui";
import { rgba } from "polished";
import Image from "components/image";
import SubscriptionForm from "components/subscription-form";
import illustration from "../../public/logo.png";
import paypal from "assets/images/paypal.png";
import google from "assets/images/google.png";
import dropbox from "assets/images/dropbox.png";
import Logo from "components/logo";

const logos = [
  {
    name: "Paypal",
    src: paypal,
  },
  {
    name: "Google",
    src: google,
  },
  {
    name: "Dropbox",
    src: dropbox,
  },
];

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.background}>
      <Box sx={styles.section}>
        <Container>
          <Box sx={styles.contentWrapper}>
            <Box sx={styles.bannerContent}>
              <Heading as="h1">decentralised music streaming 🎧</Heading>
              <Text as="p">
                upload your tracks, turn them into fractional NFTs and the fans
                can have a piece of the track for their own.
              </Text>
              {/* <SubscriptionForm sx={styles.subscriptionForm} /> */}
              {/* <Flex sx={styles.sponsoredBy}>
                <Text as="span">Sponsored by:</Text>
                <Flex sx={styles.sponsor}>
                  {logos?.map((logo, index) => (
                    <Flex as="figure" key={index}>
                      <Image src={logo.src} alt={logo.name} />
                    </Flex>
                  ))}
                </Flex>
              </Flex> */}
            </Box>
            {/* <Flex as="figure" sx={styles.bannerImage}>
              <Image src={illustration} alt="illustration" />
            </Flex> */}

            {/* <Container>
              <Box sx={styles.bannerContent}>
              <iframe id="clip-1" width="200" height="480" src="https://i.giphy.com/81O6af6s908c4onyIZ.gif" frameborder="10" allowfullscreen></iframe>
              </Box>
            </Container> */}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;

const styles = {
  background: {
    /* backgroundColor: rgba("#e5b8f4", 0.5), */
    // backgroundImage: `url("https://i.imgur.com/tboddqD.gif")`,
    //backgroundImage: `url("https://i.giphy.com/tnG8Clzxv4ibvvvYRf.gif")`,
    backgroundImage: `url("https://i.giphy.com/81O6af6s908c4onyIZ.gif")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  },
  section: {
    backgroundColor: "transparent", //black --> #090b0c
    backdropFilter: "saturate(60%) blur(18px)",
    pt: [14, null, null, null, null, 0],
    pb: [6, null, null, 7, 11, 0],
  },
  contentWrapper: {
    justifyContent: "center",
    gap: ["50px 50px"],
    display: ["block", null, null, null, "flex"],
    gridTemplateColumns: [null, null, null, null, "1fr 1fr", "0.95fr 1.05fr"],
    alignItems: "center",
    minHeight: ["auto", null, null, null, "38vh", "100vh"],
    pt: [null, null, null, 8, 0, 9, null],
    "@media only screen and (min-width:1900px)": {
      pt: 10,
    },
  },
  bannerContent: {
    margin: [null, null, null, "0 auto", 0],
    maxWidth: [null, null, null, 600, "none"],
    textAlign: [null, null, null, "center", "center"],
    h1: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 45, null, 12, 14],
      lineHeight: [1.26, null, null, 1.5, 1.2, 1.26],
      letterSpacing: [0, null, null, null, "-1.5px"],
      color: "textSecondary",
      "@media screen and (min-width: 1441px) and (max-width:1600px)": {
        fontSize: 12,
        lineHeight: 1.5,
      },
    },
    p: {
      fontSize: [1, null, null, 2, 3],
      lineHeight: [1.5, null, null, 2, null, 2.33],
      color: "#858B91",
      maxWidth: [470],
      m: [null, null, null, "30px auto", "center"],
      mt: [3, null, null, null, 5],
    },
  },
  videoFrame: {

  },
  subscriptionForm: {
    maxWidth: [null, null, null, 470, "none"],
    m: [null, null, null, "30px auto", "30px 0 0"],
    mt: [6],
    input: {
      backgroundColor: "#FFFFFF",
      border: "0 none",
      fontFamily: "body",
      fontSize: [1, null, null, null, 2],
      px: [5],
      boxShadow: "0px 16px 40px rgba(72, 59, 26, 0.08)",
      minHeight: [40, 50, null, null, null, 60],
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      "::placeholder": {
        color: rgba("#02073E", 0.4),
        opacity: 1 /* Firefox */,
      },
    },
    button: {
      fontSize: [0, 1, null, null, 2],
      minHeight: [40, 50, null, null, null, 60],
    },
  },
  sponsoredBy: {
    alignItems: "center",
    maxWidth: [null, null, null, 470, "none"],
    m: [null, null, null, "30px auto", "30px 0 0"],
    mt: [6],
    span: {
      fontSize: ["13px", null, null, null, 2],
      lineHeight: 2.62,
      color: rgba("#566272", 0.6),
    },
  },
  sponsor: {
    alignItems: "center",
    figure: {
      ml: [2, null, null, null, 4, 5],
      img: {
        maxWidth: ["60px", null, null, null, "80px", "100%"],
      },
    },
  },
  bannerImage: {
    alignItems: "center",
    mt: [9, null, null, null, 0],
    img: {
      maxWidth: [null, null, null, "80%", "100%"],
      m: [null, null, null, "0 auto", 0],
    },
  },
};
