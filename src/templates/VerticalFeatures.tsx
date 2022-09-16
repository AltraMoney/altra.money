import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    // title="AltraMoney"
    description="AltraMoney is a financial planning application that aims to sustainably help as many people as possible to have their money be directed intelligently to serve their values."
  >
    <VerticalFeatureRow
      title="Financial plan"
      description="Build out a financial plan that aligns with your personal values using the AltraBlueprint."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Suggested actions"
      description="Take action with a personalised list of actions to take ownership of your money."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Education"
      description="Educational content"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Advice"
      description="Get financial advice from professionals and a community forum"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Altruisum"
      description="Do good in the world by donating money in an effectively alruistic way."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
