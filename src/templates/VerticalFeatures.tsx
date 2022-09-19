import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    // title="AltraMoney"
    description="Run your entire money life though the AltraMoney operating system with principles-based education and on-demand financial advice. See your money system clearly, get the facts, and speak to the experts."
  >
    <VerticalFeatureRow
      title="Financial plan"
      description="Build out a financial plan that aligns with your personal values using the AltraBlueprint."
      image="/assets/images/blue_splash.svg"
      imageAlt="Financial plan"
    />
    <VerticalFeatureRow
      title="Suggested actions"
      description="A personalised list of actions to take ownership of your money."
      image="/assets/images/red_splash.svg"
      imageAlt="Suggested actions"
      reverse
    />
    <VerticalFeatureRow
      title="Education"
      description="Cut the noise and build your plan on a bedrock of fundamental principles."
      image="/assets/images/pink_splash.svg"
      imageAlt="Education"
    />
    <VerticalFeatureRow
      title="Advice"
      description="Get financial advice from professionals or through a community forum."
      image="/assets/images/yellow_splash.svg"
      imageAlt="Advice"
      reverse
    />
    <VerticalFeatureRow
      title="Altruisum"
      description="Do good in the world by donating money in an effectively alruistic way."
      image="/assets/images/turquoise_splash.svg"
      imageAlt="Altruism"
    />
  </Section>
);

export { VerticalFeatures };
