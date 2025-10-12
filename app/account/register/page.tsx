export default function Register() {
  return (
    <>
      <form className="bg-stone-200 text-gray-700 flex p-2">
        <div className="">
          <img
            src="https://i.pinimg.com/736x/3c/2d/5b/3c2d5bacd062f5c8a4f44f7830538f53.jpg"
            alt="image"
            className="w-full shadow-2xl"
          />
        </div>
        <div className="p-5 w-2xl flex flex-col items-center justify-center shadow-xl">
          <h1 className="text-4xl mb-3">Create Account</h1>
          <div>
            <input
              type="firstName"
              name="name"
              placeholder="First Name"
              className="w-lg h-10 bg-white text-lg rounded-xl pl-4 mb-4"
            />
          </div>
          <div>
            <input
              type="LastName"
              name="name"
              placeholder="Last Name"
              className="w-lg h-10 bg-white text-lg rounded-xl pl-4 mb-4"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-lg h-10 bg-white text-lg rounded-xl pl-4 mb-4"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="Password"
              placeholder="Password"
              className="w-lg h-10 bg-white text-lg rounded-xl pl-4"
            />
          </div>
          <div className="mt-5 mb-3">
            <button className="border text-sm h-8 w-20 rounded-full cursor-pointer hover:bg-white">
              Register
            </button>
          </div>
          <div className="text-center text-sm text-gray-600  mb-10">
            <p>
              Already have an account?
              <a
                href="/account/register"
                className="underline underline-offset-4"
              >
                Sign In!
              </a>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
