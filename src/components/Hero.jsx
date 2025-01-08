const Hero = ({ titleHero = 'Your Job Board', subtitleHero = 'Browse our Right jobs and start your career today..' }) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {titleHero}
          </h1>
          <p className="my-4 text-xl text-white">
            {subtitleHero}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
