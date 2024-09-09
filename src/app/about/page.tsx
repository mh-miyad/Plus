const About = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>About</div>;
};

export default About;
