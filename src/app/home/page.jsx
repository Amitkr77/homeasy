import React from "react";
import {
  ArrowRight,
  AudioLinesIcon,
  Cctv,
  Lightbulb,
  Mail,
  Settings2,
  Speaker,
  Star,
  Thermometer,
  Zap,
  HouseWifi,
  CirclePlay,
  Globe,
  Share2,
  Facebook
} from "lucide-react";

const products = [
  {
    icon: "lightbulb",
    title: "Smart Lighting",
    desc: "Set the mood instantly",
    img: "lighting",
  },
  {
    icon: "videocam",
    title: "Security",
    desc: "Protect what matters",
    img: "security",
  },
  {
    icon: "thermostat",
    title: "Climate Control",
    desc: "Perfect temperature",
    img: "climate",
  },
  {
    icon: "speaker",
    title: "Entertainment",
    desc: "Immersive sound",
    img: "entertainment",
  },
];

export default function page() {
  return (
    <section className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display antialiased transition-colors duration-200">
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#243b47] bg-surface-light/90 dark:bg-[#111c22]/90 backdrop-blur-md px-6 py-3 lg:px-10">
        <div className="flex items-center gap-4 text-text-light dark:text-white">
          <div className="size-8 text-primary flex items-center justify-center">
            <HouseWifi className="material-symbols-outlined text-3xl" />
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
            Homeasy
          </h2>
        </div>

        <div className="flex flex-1 justify-end gap-8">
          <nav className="hidden md:flex items-center gap-9">
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#products"
            >
              Products
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#testimonials"
            >
              Testimonials
            </a>
          </nav>

          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold shadow-lg shadow-primary/20">
            <span className="truncate">My Account</span>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative px-4 py-8 md:px-10 md:py-12 lg:px-40 flex justify-center">
          <div className="w-full max-w-[1280px]">
            <div className="@container">
              <div
                className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl md:rounded-3xl items-center justify-center p-8 text-center relative overflow-hidden group"
                data-alt="Modern living room with smart lights turned on in blue and purple hues"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(17, 28, 33, 0.4) 0%, rgba(17, 28, 33, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVQnvC5NqPv-eGeymAS0ASNcGSW6UDs20GQKGaYTB73F8NFqIkBdSK7yblvUCa7XpYj8BT-FOegZ8d1OpNB2-qOK-XuXHGIUiB9S2rOAstgI-lvrR-cZYnnqOjSyFFaqbIiTapgtGAQ6_q66X-DlK0KAMJxwApnP_gUjl7MbbdTL-Ul8-bUxdZcyvbWAfKykBRD156IEaLtAdMSaVsrkMnEE83HAdAIV6daav1mZnecwzmy-hMVAtNnv4hkx1g0ferBDbp2hgeIn0F")',
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700"></div>
                <div className="relative z-10 flex flex-col gap-4 max-w-3xl mx-auto">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-wider w-fit mx-auto">
                    Smart Living 2.0
                  </span>
                  <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-sm">
                    Your Home,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                      Reimagined.
                    </span>
                  </h1>
                  <h2 className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                    Experience intelligent living made simple. Control lighting,
                    security, and climate from one beautiful ecosystem.
                  </h2>
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-4">
                  <button className="flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold shadow-xl shadow-primary/30 transition-transform hover:scale-105">
                    Shop Now
                  </button>
                  <button className="flex cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white text-base font-bold transition-transform hover:scale-105">
                    <CirclePlay className="material-symbols-outlined mr-2 text-xl" />
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Header */}
        <section
          className="px-4 pt-10 md:px-10 lg:px-40 flex justify-center"
          id="products"
        >
          <div className="w-full max-w-[1280px] flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-200 dark:border-[#243b47] pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-text-light dark:text-white mb-2">
                Explore Our Products
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark text-base">
                Curated devices for every corner of your life.
              </p>
            </div>
            <a
              className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all"
              href="#"
            >
              View All Categories{" "}
              <ArrowRight className="material-symbols-outlined text-sm" />
            </a>
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-4 py-8 md:px-10 lg:px-40 flex justify-center">
          <div className="w-full max-w-[1280px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="group cursor-pointer flex flex-col gap-3">
                <div className="overflow-hidden rounded-2xl relative aspect-[4/5] shadow-sm">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Smart bulb changing colors in a modern lamp"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDl7ejN1SPHwkKjg24Fm_5rHVbJrWrGUao9qkD1NgjHJCNG7EyTuWURU_QgS_m29nxSHRjWD1atFwdcoz5puboc1Yhdtg5jn9DGtnLFySiFY97qv6MvphdQbm0qZCt22SqZxKEcdqy0vh0GCdvnDhLJtHtCMFO9eKI9QaWTI0x9vvE-8Q5MDa4sMjmDeLquoYxonX3HoUWz6pJ4s0YrTiM_ZaOLk_VxTV6wXF7YDQux6ZNAWFV3HWA1V0hP-FMJlB4pQMBfXto_B5Qx")',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Lightbulb className="material-symbols-outlined text-3xl mb-1" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight text-text-light dark:text-white group-hover:text-primary transition-colors">
                    Smart Lighting
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Set the mood instantly
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer flex flex-col gap-3">
                <div className="overflow-hidden rounded-2xl relative aspect-[4/5] shadow-sm">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Modern smart security camera mounted on a wall"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEU0Hu5bFVZAG7_Kc3fjqePENcyqBovD1rFHzw4yMJX1PbryiATI4zFvVp82TItWmKBEePT2QyQ3RKPk0Ymrs_2XqEdYXGF-bcbec_HdRpcrYNaZALevC_rhxz5Rg9REZGGhUiaTEZq4x87xykXDfG7buGdr9trIqvYLeqM1G8I7NIpLQTVcFgRMTkXuvzbBhI1TynZFHKZWe3ua1pW2x4xsxVygwguNWqRbA4JkUJwEnyTJmARE9t9ldCK3-WLft141nWVvi_z11O")',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Cctv className="material-symbols-outlined text-3xl mb-1" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight text-text-light dark:text-white group-hover:text-primary transition-colors">
                    Security
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Protect what matters
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer flex flex-col gap-3">
                <div className="overflow-hidden rounded-2xl relative aspect-[4/5] shadow-sm">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Digital thermostat displaying temperature"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIxhQhTj90CKipl4KRY3oWUv4EiTfvzXAkkQpEE7pH_4tOwQgDhvJAhHWs4NP94tzU57FHSCTOFV8xLO2LpGdB5pTfBbok7krKJcStX6Px7toG-iOo6x1xjtR47uClXANyFHq9wb5rXR36nC3sjW6nvTmTSGJ0RXLM1Y0Mc7eUXHVZ0cL_OXMcHF5GDfvoUQP9EPJL66SzxEYPGJ4Cs5VFexTJuotXVvuyTZ-MCYIvMJ-RMFwfAuEA33g0dm81x1WDbTzgBM9ePPkL")',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Thermometer className="material-symbols-outlined text-3xl mb-1" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight text-text-light dark:text-white group-hover:text-primary transition-colors">
                    Climate Control
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Perfect temperature
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group cursor-pointer flex flex-col gap-3">
                <div className="overflow-hidden rounded-2xl relative aspect-[4/5] shadow-sm">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Smart speaker on a wooden table"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCk2GFHHA7iMwEO0cn_3HQ_Wb3JKcfk_q_LtiSIpRFEhtQxb6s8rc-Mso3IyFAS1kPPSgak9oOsAWJkBcrqdJVbQj7qOSoqL-wMZDnEkQYCaVGsNYKJaoTyslR5dl_Ke3AhtBOY9qu0DzAXrNpsIoU4HE2Zub5l3N6dKqKI0lUpZfUf8ihVx8HIWK6WwaZ97887V0flM5jugqiR7Z9BtHxXJH4vN0dfjVsy43xwn65ilHMnx8FHodseqKsQHIEUlATp_YtXdAyX6jxt")',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Speaker className="material-symbols-outlined text-3xl mb-1" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight text-text-light dark:text-white group-hover:text-primary transition-colors">
                    Entertainment
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Immersive sound
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          className="px-4 py-16 md:px-10 lg:px-40 flex justify-center bg-white dark:bg-[#162127]"
          id="features"
        >
          <div className="w-full max-w-[1280px] grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
                  Why Choose Homeasy?
                </span>
                <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-text-light dark:text-white mb-4">
                  Innovation designed for <br />
                  <span className="text-primary">comfort.</span>
                </h2>
                <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed">
                  We don't just sell devices; we sell a seamless lifestyle. Our
                  ecosystem is built to work together from the moment you plug
                  it in.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {/* Feature Item */}
                <div className="flex gap-4 items-start">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <AudioLinesIcon className="material-symbols-outlined text-primary text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-light dark:text-white mb-1">
                      Voice Control
                    </h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                      Compatible with Alexa, Google Assistant, and Siri. Just
                      say the word.
                    </p>
                  </div>
                </div>

                {/* Feature Item */}
                <div className="flex gap-4 items-start">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="material-symbols-outlined text-primary text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-light dark:text-white mb-1">
                      Energy Savings
                    </h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                      Smart scheduling can reduce your energy bill by up to 25%
                      annually.
                    </p>
                  </div>
                </div>

                {/* Feature Item */}
                <div className="flex gap-4 items-start">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Settings2 className="material-symbols-outlined text-primary text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-light dark:text-white mb-1">
                      Instant Setup
                    </h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                      No technician needed. Up and running in minutes with our
                      intuitive app.
                    </p>
                  </div>
                </div>
              </div>

              <button className="flex w-fit cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-surface-dark dark:bg-white text-white dark:text-surface-dark text-base font-bold transition-transform hover:scale-105 mt-4">
                Learn More
              </button>
            </div>

            {/* Features Image */}
            <div className="relative">
              <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-surface-dark/5">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Person using a smartphone app to control smart home devices"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_Gpn1G-iH3vHKO-TwRgDVdOo7hadaW02-gm60GS4yLW4W6swMB8Z00Hyow1PvHeG8aI_z1PR9ssYXgE0o2fZky2-npgDShMERBlwtPfhi3JFgK3Kc4ONHncUwPZ27-zE96MR11jeNV5RLWz_C01fJ2X5Df8px0rCXk1J27QW5Lr6nSA3lcHhZp5BTYZXbxtq-MtRGh8DWJeUCegiPVehHVFF_OfgeIDZJxh3LKT4m8mYHoYi14qUBuS_l_-LjQZrykaBny2H83bey")',
                  }}
                ></div>

                {/* Overlay UI */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold">Living Room</span>
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs opacity-80">Temperature</span>
                    <span className="text-lg font-bold">72°F</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-10 -right-10 w-2/3 h-2/3 bg-gradient-to-br from-primary to-cyan-400 rounded-full blur-[100px] opacity-20 z-0"></div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="px-4 py-20 md:px-10 lg:px-40 flex justify-center bg-background-light dark:bg-background-dark"
          id="testimonials"
        >
          <div className="w-full max-w-[1280px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-white mb-4">
                Loved by Homeowners
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Join over 10,000 satisfied customers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-white dark:bg-[#1e282d] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2a3b45] flex flex-col h-full">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <span className="material-symbols-outlined text-sm">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined text-sm ">
                    <Star />
                  </span>
                </div>
                <p className="text-text-light dark:text-gray-200 mb-6 flex-grow leading-relaxed">
                  "Setting up the Homeasy system was incredibly simple. I had my
                  lights and thermostat connected in under 20 minutes. The app
                  is gorgeous!"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDw_RSBbUigtdH_6iquej7jIQpFUIqHnoIPvaI9l2lLQsIXAEYf_7n-zLQHT_F11n_yVNA6vu6hfnHNVhhXOhkGS04q3j85YLJjVtKni7bpGJu207j_JQgClLZrvEGWzM4jE0cvDDyXAF4NLv1Z3jdu9jCRfHQsVDkwO9evlsiitb_hJpMDcePrLNFImU4gLvBSZCd59QYQK3sB4_r1pMPLys9kEmE9sAG65b22XfKkSyyXjMmuM2PrSTdIWwX15ppF7IdlUIFhwtJ-")',
                    }}
                  ></div>
                  <div>
                    <p className="text-sm font-bold text-text-light dark:text-white">
                      Sarah Jenkins
                    </p>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white dark:bg-[#1e282d] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2a3b45] flex flex-col h-full">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <span className="material-symbols-outlined text-sm">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined text-sm ">
                    <Star />
                  </span>
                </div>
                <p className="text-text-light dark:text-gray-200 mb-6 flex-grow leading-relaxed">
                  "The 'Away Mode' gives me such peace of mind when I travel.
                  Being able to check my cameras from anywhere in the world is a
                  game changer."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDw_RSBbUigtdH_6iquej7jIQpFUIqHnoIPvaI9l2lLQsIXAEYf_7n-zLQHT_F11n_yVNA6vu6hfnHNVhhXOhkGS04q3j85YLJjVtKni7bpGJu207j_JQgClLZrvEGWzM4jE0cvDDyXAF4NLv1Z3jdu9jCRfHQsVDkwO9evlsiitb_hJpMDcePrLNFImU4gLvBSZCd59QYQK3sB4_r1pMPLys9kEmE9sAG65b22XfKkSyyXjMmuM2PrSTdIWwX15ppF7IdlUIFhwtJ-")',
                    }}
                  ></div>
                  <div>
                    <p className="text-sm font-bold text-text-light dark:text-white">
                      Michael Chen
                    </p>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                      Tech Enthusiast
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white dark:bg-[#1e282d] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2a3b45] flex flex-col h-full">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <span className="material-symbols-outlined text-sm">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined text-sm ">
                    <Star />
                  </span>
                </div>
                <p className="text-text-light dark:text-gray-200 mb-6 flex-grow leading-relaxed">
                  "Great customer support and high-quality hardware. It feels
                  premium but the price is actually very reasonable for what you
                  get."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDw_RSBbUigtdH_6iquej7jIQpFUIqHnoIPvaI9l2lLQsIXAEYf_7n-zLQHT_F11n_yVNA6vu6hfnHNVhhXOhkGS04q3j85YLJjVtKni7bpGJu207j_JQgClLZrvEGWzM4jE0cvDDyXAF4NLv1Z3jdu9jCRfHQsVDkwO9evlsiitb_hJpMDcePrLNFImU4gLvBSZCd59QYQK3sB4_r1pMPLys9kEmE9sAG65b22XfKkSyyXjMmuM2PrSTdIWwX15ppF7IdlUIFhwtJ-")',
                    }}
                  ></div>
                  <div>
                    <p className="text-sm font-bold text-text-light dark:text-white">
                      Elena Rodriguez
                    </p>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                      Interior Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="px-4 py-16 md:px-10 lg:px-40 flex justify-center border-t border-gray-200 dark:border-[#243b47]">
          <div className="w-full max-w-[960px] bg-background-dark rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="size-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                {/* <span className="material-symbols-outlined text-3xl">mail</span> */}
                <Mail />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Stay connected</h2>
              <p className="max-w-lg opacity-90">
                Join our newsletter to receive the latest updates, smart home
                tips, and exclusive discounts.
              </p>

              <form className="flex w-full max-w-md flex-col sm:flex-row gap-3">
                <input
                  className="flex-1 h-12 rounded-lg border-0 bg-white/10 px-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all outline-none backdrop-blur-sm"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
                <button
                  className="h-12 px-6 rounded-lg bg-white text-primary font-bold hover:bg-gray-100 transition-colors"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-[#111c22] border-t border-gray-200 dark:border-[#243b47] px-4 py-12 md:px-10 lg:px-40 flex justify-center">
        <div className="w-full max-w-[1280px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Logo + Description */}
            <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-text-light dark:text-white">
                <div className="size-8 text-primary flex items-center justify-center">
                  <HouseWifi className="material-symbols-outlined text-3xl" />
                </div>
                <h2 className="text-lg font-bold">Homeasy</h2>
              </div>

              <p className="text-sm text-text-muted-light dark:text-text-muted-dark pr-4">
                Making smart homes simple, accessible, and beautiful for
                everyone.
              </p>

              <div className="flex gap-4 mt-2">
                <a
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  {/* <i className="material-symbols-outlined">public</i> */}
                  <Globe className="material-symbols-outlined" />
                </a>
                <a
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  <Facebook className="material-symbols-outlined "/>
                  {/* <i className="material-symbols-outlined">rss_feed</i> */}
                </a>
                <a
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  {/* <i className="material-symbols-outlined">share</i>
                   */}
                   <Share2 className="material-symbols-outlined "/>
                </a>
              </div>
            </div>

            {/* Shop */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-light dark:text-white">
                Shop
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  Lighting
                </a>
                <a
                  className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  Climate
                </a>
                <a
                  className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  Security
                </a>
                <a
                  className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  Bundles
                </a>
              </div>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-light dark:text-white">
                Support
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  Help Center
                </a>
                <a
                  className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  Installation
                </a>
                <a
                  className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  Warranty
                </a>
                <a
                  className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  Returns
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-light dark:text-white">
                Company
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  About Us
                </a>
                <a
                  className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  Careers
                </a>
                <a
                  className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  Press
                </a>
                <a
                  className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                  href="#"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-100 dark:border-[#2a3b45] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
              © 2025 Homeasy Automation Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                className="text-xs text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-xs text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
