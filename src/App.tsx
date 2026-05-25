const restaurants = [
  {
    name: "Burger King",
    type: "Burger",
    rating: "4.8",
    time: "25-35 min",
    img: "https://readdy.ai/api/search-image?query=Premium%20dark%20burger%20restaurant%20food%20photography%2C%20juicy%20gourmet%20burger%20with%20dramatic%20lighting%2C%20black%20background%2C%20neon%20purple%20accent%20lights&width=600&height=400&seq=1&orientation=landscape",
  },
  {
    name: "Pizza Hut",
    type: "Pizza",
    rating: "4.6",
    time: "30-40 min",
    img: "https://readdy.ai/api/search-image?query=Artisan%20pizza%20photography%20on%20dark%20background%2C%20freshly%20baked%20pizza%20with%20melted%20cheese%20and%20pepperoni%2C%20neon%20purple%20glow&width=600&height=400&seq=2&orientation=landscape",
  },
  {
    name: "Shawarma Al-Sham",
    type: "Shawarma",
    rating: "4.9",
    time: "20-30 min",
    img: "https://readdy.ai/api/search-image?query=Premium%20shawarma%20platter%20photography%2C%20sliced%20grilled%20meat%20with%20fresh%20vegetables%2C%20dark%20background%2C%20purple%20lighting&width=600&height=400&seq=3&orientation=landscape",
  },
  {
    name: "Sushi Master",
    type: "Sushi",
    rating: "4.7",
    time: "35-45 min",
    img: "https://readdy.ai/api/search-image?query=Premium%20sushi%20platter%20photography%20on%20black%20background%2C%20neon%20purple%20glow&width=600&height=400&seq=4&orientation=landscape",
  },
  {
    name: "Cafe Latte",
    type: "Cafe",
    rating: "4.5",
    time: "15-25 min",
    img: "https://readdy.ai/api/search-image?query=Premium%20cafe%20food%20photography%2C%20latte%20art%2C%20croissant%2C%20dark%20background%2C%20purple%20ambient%20lighting&width=600&height=400&seq=5&orientation=landscape",
  },
  {
    name: "Mashawi Al-Sultan",
    type: "Grill",
    rating: "4.8",
    time: "30-40 min",
    img: "https://readdy.ai/api/search-image?query=Premium%20grilled%20meat%20platter%20photography%2C%20mixed%20grill%2C%20smoke%2C%20dark%20background%2C%20purple%20accent%20lights&width=600&height=400&seq=6&orientation=landscape",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 border-b border-white/[0.06]">
        <div className="px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#9d7bff]/20 border border-[#9d7bff]/30 flex items-center justify-center shadow-[0_0_20px_rgba(157,123,255,0.25)]">
              <i className="ri-restaurant-2-line text-[#b79fff] text-xl"></i>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none">Foodi</h1>
              <p className="text-gray-500 text-xs mt-1">Fast food delivery system</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm hover:border-[#9d7bff]/40 transition">
              <i className="ri-global-line text-[#9d7bff] mr-1"></i> EN
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm hover:border-[#9d7bff]/40 transition">
              <i className="ri-map-pin-line text-[#9d7bff] mr-1"></i> Track Order
            </button>
          </div>
        </div>
      </header>

      <section className="relative pt-40 pb-24 text-center px-5">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#9d7bff]/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9d7bff]/10 border border-[#9d7bff]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#b79fff] animate-pulse"></span>
            <span className="text-[#c4aaff] text-sm">Fast & Reliable Delivery</span>
          </div>

          <h2 className="max-w-4xl mx-auto text-4xl md:text-7xl font-black leading-tight tracking-tight">
            Order food with a clean modern experience.
          </h2>

          <p className="max-w-2xl mx-auto mt-7 text-gray-400 text-lg">
            Choose your favorite restaurant, add items to your cart, and track your order in real-time until it reaches your door.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#restaurants" className="px-8 py-4 rounded-xl bg-[#9d7bff] font-semibold shadow-[0_0_30px_rgba(157,123,255,0.35)] hover:bg-[#8c68ff] transition">
              <i className="ri-restaurant-2-line mr-2"></i>
              Explore Restaurants
            </a>

            <button className="px-8 py-4 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#9d7bff]/40 transition">
              <i className="ri-search-line text-[#9d7bff] mr-2"></i>
              Track Your Order
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 mb-16">
        <div className="max-w-3xl mx-auto relative">
          <input
            className="w-full px-5 py-5 rounded-2xl bg-[#12121a] border border-white/[0.08] outline-none text-white placeholder:text-gray-500 focus:border-[#9d7bff]/50 focus:shadow-[0_0_25px_rgba(157,123,255,0.15)]"
            placeholder="Search for a restaurant..."
          />
          <i className="ri-search-line absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"></i>
        </div>
      </section>

      <section id="restaurants" className="px-5 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">
                <i className="ri-store-2-line text-[#9d7bff] mr-2"></i>
                Featured Restaurants
              </h2>
              <p className="text-gray-500 mt-1">Discover the best restaurants in your area</p>
            </div>
            <p className="hidden md:block text-gray-500 text-sm">6 restaurants</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {restaurants.map((item) => (
              <div key={item.name} className="group bg-[#12121a] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#9d7bff]/35 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(157,123,255,0.13)] transition-all duration-500">
                <div className="relative h-52 overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-transparent to-transparent"></div>

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#9d7bff]/20 border border-[#9d7bff]/30 text-[#c4aaff] text-xs">
                    <i className="ri-checkbox-circle-line mr-1"></i> Open
                  </span>

                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/50 border border-white/10 text-xs">
                    {item.type}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-xl group-hover:text-[#c4aaff] transition">{item.name}</h3>

                  <div className="flex justify-between items-center my-4 text-sm">
                    <span>
                      <i className="ri-star-fill text-yellow-400 mr-1"></i>
                      {item.rating}
                      <span className="text-gray-500 ml-1">Rating</span>
                    </span>

                    <span className="text-gray-400">
                      <i className="ri-time-line text-[#9d7bff] mr-1"></i>
                      {item.time}
                    </span>
                  </div>

                  <button className="w-full py-3 rounded-xl bg-[#9d7bff]/10 border border-[#9d7bff]/20 text-[#c4aaff] hover:bg-[#9d7bff] hover:text-white transition">
                    <i className="ri-menu-search-line mr-2"></i>
                    View Menu
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-gray-500 text-sm">
          <div className="flex items-center gap-3 text-white font-bold">
            <div className="w-9 h-9 rounded-lg bg-[#9d7bff]/20 border border-[#9d7bff]/30 flex items-center justify-center">
              <i className="ri-restaurant-2-line text-[#9d7bff]"></i>
            </div>
            Foodi
          </div>
          <p>support@foodi.com</p>
          <p>All rights reserved © Foodi 2026</p>
        </div>
      </footer>
    </main>
  );
}