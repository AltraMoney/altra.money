import { Meta } from '../layout/Meta';
import { SignUpForm } from '../signUpForm/SignUpForm';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <SignUpForm />
    <Footer />
  </div>
);

export { Base };
