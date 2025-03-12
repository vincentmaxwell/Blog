import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const WelcomePage = () => {
  const navBarLink =
    'bg-green-400 text-white p-2 px-4 rounded-md font-bold hover:bg-green-500'

  return (
    <>
      <Metadata title="Welcome" description="The first page of the app" />

      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <div className="flex justify-between bg-gray-100 p-4">
          {/* Title */}
          <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-4xl font-black text-transparent">
            Maxwell&apos;s World
          </h1>

          {/* Navbar */}
          <div className="flex justify-end gap-2">
            <Link className={navBarLink} to={routes.welcome()}>
              Welcome
            </Link>
            <Link className={navBarLink} to={routes.about()}>
              About
            </Link>
            <Link className={navBarLink} to={routes.blog()}>
              Blog
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-grow p-4">
          <div className="flex flex-col gap-4">
            <h1>
              Welcome to my website! I will post updates about my projects and
              thoughts here.
            </h1>
            <p>Here are some of my projects:</p>
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
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center bg-gray-100 p-4 text-gray-400">
          © {new Date().getFullYear()} - Mr. Maxwell
        </div>
      </div>
    </>
  )
}

export default WelcomePage
