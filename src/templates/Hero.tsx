import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-white">
    <Section yPadding="py-6">
      {/* <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Sign up</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns> */}
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton description="Your personal money operating system" />
    </Section>
  </Background>
);

export { Hero };
