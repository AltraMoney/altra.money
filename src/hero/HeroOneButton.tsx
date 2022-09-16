import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title?: ReactNode;
  description: string;
  button?: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <img src={`/assets/images/AltraMoney-logo.svg`} alt="AltraMoney logo" />
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16">{props.description}</div>

    {props.button && props.button}
  </header>
);

export { HeroOneButton };
