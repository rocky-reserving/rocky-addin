const buttonData = [
  {
    title: 'Docs',
    description: 'Find in-depth information about Next.js features and API.',
    link: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
  },
  {
    title: 'Learn',
    description: 'Learn about Next.js in an interactive course with quizzes!',
    link: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
  },
  {
    title: 'Examples',
    description: 'Discover and deploy boilerplate example Next.js projects.',
    link: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
  },
  {
    title: 'Deploy',
    description:
      'Instantly deploy your Next.js site to a public URL with Vercel.',
    link: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
  },
];

const BottomButton = ({ title, description, link }) => {
  return (
    <a
      href={link}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
    </a>
  );
};

const BottomButtons = () => {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      {buttonData.map((button, index) => (
        <BottomButton
          key={index}
          title={button.title}
          description={button.description}
          link={button.link}
        />
      ))}
    </div>
  );
};

export default BottomButtons;
