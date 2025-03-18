import { Metadata } from '@redwoodjs/web'

const BlogPage = () => {
  return (
    <>
      <Metadata title="Welcome" description="The first page of the app" />

      <div className="flex flex-col gap-4">
        <h1>Welcome to my website! Here you can find my blog posts.</h1>
      </div>
    </>
  )
}

export default BlogPage
