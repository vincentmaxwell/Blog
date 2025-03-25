// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="About page" />

      <h1>AboutPage</h1>
      <p>
        Let me change something real quick on a new computer!
      </p>
      {/*
          My default route is named `about`, link to me with:
          `<Link to={routes.about()}>About</Link>`
      */}
    </>
  )
}

export default AboutPage
