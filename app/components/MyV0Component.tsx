/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WkJaKP30vKr
 */
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section
      className="w-full h-full bg-center bg-cover"
      style={{
        backgroundImage: '"url("/tropical-bg.svg")"',
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-semibold text-green-800 text-center mb-8">Island Guestbook</h1>
        <form className="space-y-4">
          <Input
            className="w-full px-4 py-2 text-green-800 bg-white rounded-md border border-green-500"
            id="name"
            placeholder="Enter your name"
            type="text"
          />
          <Textarea
            className="w-full px-4 py-2 text-green-800 bg-white rounded-md border border-green-500"
            id="message"
            placeholder="Enter your message"
          />
          <Button className="w-full py-2 text-green-800 border-green-500" type="submit" variant="outline">
            Submit
          </Button>
        </form>
        <div className="mt-8 grid gap-4">
          <div className="p-4 flex items-start space-x-4 border border-yellow-300 bg-yellow-100 rounded-md hover:bg-yellow-200 transition-colors duration-200">
            <svg
              className=" text-green-500 w-8 h-8"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
              <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
              <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z" />
              <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
            </svg>
            <div>
              <h2 className="text-xl font-semibold text-green-800">Guest Name</h2>
              <p className="text-md text-green-700">Guest message...</p>
            </div>
          </div>
        </div>
        <footer
          className="mt-8 py-4 bg-center bg-cover"
          style={{
            backgroundImage: '"url("/beach-footer.svg")"',
          }}
        >
          <div className="text-center text-white">
            <p>© 2023 Island Guestbook</p>
          </div>
        </footer>
      </div>
    </section>
  )
}
