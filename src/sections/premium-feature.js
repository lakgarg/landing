/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import Logo from 'assets/images/logo.png';
import emoji from 'assets/images/icons/emoji-2.png';

const data = [
  {
    title: 'Organize your project content',
    contents: (
      <div>
        Get your blood tests delivered at let collect sample from the victory of
        the managements that supplies best design system guidelines ever.
      </div>
    ),
  },
  {
    title: 'Collaborate your documents easily',
    contents: (
      <div>
        Get your blood tests delivered at let collect sample from the victory of
        the managements that supplies best design system guidelines ever.
      </div>
    ),
  },
  {
    title: `Build your team's knowledge base`,
    contents: (
      <div>
        Get your blood tests delivered at let collect sample from the victory of
        the managements that supplies best design system guidelines ever.
      </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <Box sx={styles.background}>
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image src={Logo} alt="logo" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              /* emoji={emoji} */
              sx={styles.heading}
              title="Free for you, freedom for artists"
              description="Shady is a new free music streaming platform that addresses the broken economics of streaming. We're building a fresh take on how music streaming should be — built by artists, for fans that want artists to earn more for their work."
            />
            {/* <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box> */}
          </Box>
        </Grid>
      </Container>
    </section>
    </Box>
  );
};

export default PremiumFeature;

const styles = {
  background: {
    /* backgroundColor: rgba("#e5b8f4", 0.5), */
    // backgroundImage: `url("https://i.imgur.com/tboddqD.gif")`,
    backgroundImage: `url("https://i.giphy.com/tnG8Clzxv4ibvvvYRf.gif")`,
    //backgroundImage: `url("https://i.giphy.com/81O6af6s908c4onyIZ.gif")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    /* width: "100vw",
    height: "100vh", */
  },
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
    backgroundColor: 'transparent',
    backdropFilter: "saturate(100%) blur(18px)",
  },
  grid: {
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      '1fr 431px',
      '1fr 530px',
      '1fr 550px',
    ],
  },
  heading: {
    textAlign: ['left', null, null, 'center', 'left'],
    ml: [null, null, null, 'auto'],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      color: 'textSecondary',
      fontSize: [null, null, null, 10, 8, 10, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, '100%'],
        top: ['4px', '8px', null, null, '4px', '8px'],
      },
    },
    p: {
      color: '#858B91',
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
};
