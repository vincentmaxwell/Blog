import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const navBarLink =
    'bg-green-400 text-white p-2 px-4 rounded-md font-bold hover:bg-green-500'

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="flex justify-between bg-gray-100 p-4">
        {/* Title */}
        <h1
          className="animate-text bg-gradient-to-r from-teal-500 via-purple-500
        to-orange-500 bg-clip-text text-4xl font-black text-transparent"
        >
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
      <div className="flex-grow p-4">{children}</div>

      {/* Footer */}
      <div className="flex items-center justify-center bg-gray-100 p-4 text-gray-400">
        © {new Date().getFullYear()} - Mr. Maxwell
      </div>
    </div>
  )
}
export default MainLayout
