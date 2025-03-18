import { Metadata } from '@redwoodjs/web'

const WelcomePage = () => {
  return (
    <>
      <Metadata title="Welcome" description="The first page of the app" />

      <div className="flex flex-col gap-4">
        <h1>
          Welcome to my website! I will post updates about my projects and
          thoughts here.
        </h1>
        <p>Here are some of my projects:</p>
      </div>
      <ul className="flex w-fit flex-col gap-y-2 rounded-md bg-gray-100 p-4">
        <li className="rounded-md bg-gray-200 p-2 hover:bg-gray-300">
          <a href="https://github.com/maxwell-mario">
            A computer game like Mario. ROFL.
          </a>
        </li>
        <li className="rounded-md bg-gray-200 p-2 hover:bg-gray-300">
          <a href="https://github.com/maxwell-ai">
            A website for my AI projects. cursor.
          </a>
        </li>
      </ul>
    </>
  )
}

export default WelcomePage
