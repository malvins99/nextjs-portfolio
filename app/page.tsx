import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
  Our Portfolio, <span className="text-blue-600">Malvins and Dityaaf</span>
</h1>

<h2 className="text-xl font-semibold mt-4">Team 2:</h2>
<div className="mt-2 space-y-1">
  <p className="text-gray-700 italic">— Mohamad Alfin R</p>
  <p className="text-gray-700 italic">— Fathan Aditya F</p>
</div>


      <div className="mb-6">
        <img
          src="/cat1.png"    
          alt="cat1"
          className="rounded-2xl shadow-lg w-full max-w-2xl mx-auto"
        />
      </div>

      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
