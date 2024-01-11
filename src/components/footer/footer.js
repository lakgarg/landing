/** @jsx jsx */
import { jsx, Flex, Box, Text, Container, Button } from "theme-ui";
import { rgba } from "polished";
import { Link } from "components/link";
import Logo from "components/logo";
import SectionHeading from "components/section-heading";

const menuItems = [
  {
    path: "#home",
    label: "Home",
  },
  {
    path: "#advertise",
    label: "Advertise",
  },
  {
    path: "#supports",
    label: "Supports",
  },
  {
    path: "#marketing",
    label: "Marketing",
  },
  {
    path: "#faq",
    label: "FAQ",
  },
];

const path = () => {
  window.open("https://shadylabs.xyz");
};

export default function Footer() {
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
              Sign up
            </Button>
          </Flex>
        </Container>

        <Box as="footer" sx={styles.footer}>
          <Container>
            <Flex sx={styles.footerInner}>
              <Flex sx={styles.copyright}>
                <Logo isWhite />
                <Text as="span">
                  &copy; Copyright by {new Date().getFullYear()} Shady Labs
                </Text>
              </Flex>
              <Flex as="ul" sx={styles.footerNav}>
                {menuItems?.map((item, index) => (
                  <li key={index}>
                    <Link path={item?.path}>{item?.label}</Link>
                  </li>
                ))}
              </Flex>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  background: {
    /* backgroundColor: rgba("#e5b8f4", 0.5), */
    //backgroundImage: `url("https://i.imgur.com/tboddqD.gif")`,
    backgroundImage: `url("https://i.giphy.com/tnG8Clzxv4ibvvvYRf.gif")`,
    //backgroundImage: `url("https://i.giphy.com/81O6af6s908c4onyIZ.gif")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  },
  footer: {
    backgroundColor: "transparent",
    backdropFilter: "saturate(0%) blur(100px)",
    pt: [6],
    pb: [6],
  },
  footerInner: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, null, "row"],
  },
  copyright: {
    alignItems: "center",
    flexDirection: ["column", null, null, null, "row"],
    span: {
      color: rgba("white", 0.7),
      fontSize: 1,
      lineHeight: "18px",
      ml: [null, null, null, null, 3],
      mt: [3, null, null, null, 0],
    },
  },
  footerNav: {
    listStyle: "none",
    // flexDirection: ['column', null, null, null, 'row'],
    m: ["25px 0 0", null, null, null, 0],
    p: 0,
    li: {
      "+ li": {
        ml: [3, null, null, null, 4],
      },
      a: {
        color: "white",
        cursor: "pointer",
        textDecoration: "none",
        fontSize: [1, null, null, 2],
      },
    },
  },
  section: {
    backgroundColor: "transparent",
    backdropFilter: "saturate(0%) blur(100px)",
    pt: [9, null, null, null, 10, 13, null],
    // pb: [9, null, null, null, 11, 14, null],
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
