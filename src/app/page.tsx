export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-green-400">MARIC</span> Digital Vault
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg">
            Digital products, AI tools, and systems built for silent winners.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <a
              href="#products"
              className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition"
            >
              Enter the Vault
            </a>

            <a
              href="#products"
              className="px-6 py-3 border border-gray-700 rounded-lg hover:border-green-400 transition"
            >
              View Products
            </a>
          </div>
        </div>
      </section>

      {/* ================= EMAIL CAPTURE ================= */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Join the Inner Circle
          </h2>

          <p className="mt-4 text-gray-400">
            Get early access to AI tools, digital products, and private drops.
            No noise. No spam.
          </p>

          <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition"
            >
              Get Early Access
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-500">
            Free forever. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section
        id="products"
        className="px-6 py-20 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Digital Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* PRODUCT 1 */}
          <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition">
            <h3 className="text-xl font-semibold">AI Income Starter Kit</h3>
            <p className="mt-3 text-gray-400 text-sm">
              Ebook, prompts, and templates to start earning with AI.
            </p>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-green-400 font-bold">$9</span>
              <a
                href="https://paypal.me/matriacy@proton.me/9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm border border-gray-700 rounded hover:border-green-400"
              >
                Buy
              </a>
            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition">
            <h3 className="text-xl font-semibold">Canva Business Templates</h3>
            <p className="mt-3 text-gray-400 text-sm">
              High-converting designs for creators and freelancers.
            </p>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-green-400 font-bold">$12</span>
              <a
                href="https://paypal.me/matriacy@proton.me/12"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm border border-gray-700 rounded hover:border-green-400"
              >
                Buy
              </a>
            </div>
          </div>

          {/* PRODUCT 3 */}
          <div className="border border-gray-800 rounded-xl p-6 hover:border-green-400 transition">
            <h3 className="text-xl font-semibold">Automation Playbook</h3>
            <p className="mt-3 text-gray-400 text-sm">
              Step-by-step systems to automate online income.
            </p>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-green-400 font-bold">$15</span>
              <a
                href="https://paypal.me/matriacy@proton.me/15"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm border border-gray-700 rounded hover:border-green-400"
              >
                Buy
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} MARIC Digital Vault. All rights reserved.
      </footer>

    </main>
  );
}
