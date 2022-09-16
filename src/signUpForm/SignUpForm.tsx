import Iframe from 'react-iframe';

const SignUpForm = () => {
  return (
    <div className="flex justify-center">
      {/* put this in an environment variable */}
      <Iframe
        url="https://cdn.forms-content.sg-form.com/db797d8d-359a-11ed-ad83-b279b549d82d"
        width="700px"
        height="600px"
        id="signUpForm"
        className="signUpForm"
        display="block"
        position="relative"
      />
    </div>
  );
};

export { SignUpForm };
