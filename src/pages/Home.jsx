import CustomNav from '../components/CustomNav';
import '../scss/custom.scss';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion';

function Home() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
      <CustomNav />
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: '30px' }}>
              Let me show you scroll animation 😀
            </span>
          </Animator>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: '30px' }}>
              Let me show you scroll animation 😀
            </span>
          </Animator>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: '30px' }}>
              Let me show you scroll animation 😀
            </span>
          </Animator>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: '30px' }}>
              Let me show you scroll animation 😀
            </span>
          </Animator>
        </ScrollPage>

        {/* <HelloSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection /> */}
      </ScrollContainer>
    </>
  );
}
export default Home;
