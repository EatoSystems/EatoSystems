import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Globe, Users, Building } from "lucide-react"

export default function EatoAgentPartnerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0 bg-gradient-to-r from-yellow-50 to-amber-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="container mx-auto relative z-10">
          <Link href="/partners" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Partners
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-6">
                System v1.0
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                EatoAgent <span className="text-yellow-600">Partners</span>
              </h1>

              <p className="text-xl text-gray-700 mb-8">AI & System Optimization</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  Artificial Intelligence
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  System Optimization
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  Food Technology
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  Data Analytics
                </span>
              </div>

              <p className="text-gray-600 mb-8">
                EatoAgent leverages artificial intelligence to optimize food systems, creating more efficient and
                sustainable processes. Led by Gaggan Anand, this system explores how technology can enhance every aspect
                of our food ecosystem.
              </p>

              <Link href="#become-partner">
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-6 py-2">
                  Partner with EatoAgent
                </Button>
              </Link>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/systems/eatoagent-seed.png"
                  alt="EatoAgent System"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Partner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-6">
              Primary Culinary Partner
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Gaggan Anand</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <Image
                src="/gaggan-anand-portrait.png"
                alt="Gaggan Anand"
                width={500}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">About Gaggan Anand</h3>
              <p className="text-gray-600 mb-6">
                Gaggan Anand is a revolutionary chef known for his progressive Indian cuisine and innovative culinary
                techniques. His restaurant in Bangkok has been recognized as one of Asia's best, known for pushing
                boundaries and redefining food experiences.
              </p>

              <p className="text-gray-600 mb-6">
                As the primary culinary partner for EatoAgent, Gaggan brings his forward-thinking approach and
                technological curiosity to the development of AI-driven food systems. His work combines traditional
                flavors with cutting-edge techniques.
              </p>

              <h3 className="text-2xl font-bold mb-4">Key Initiatives</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-yellow-700 font-bold">1</span>
                  </div>
                  <span className="text-gray-600">Developing AI-powered recipe optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-yellow-700 font-bold">2</span>
                  </div>
                  <span className="text-gray-600">Creating intelligent food waste reduction systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-yellow-700 font-bold">3</span>
                  </div>
                  <span className="text-gray-600">Exploring data-driven culinary innovation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-yellow-700 font-bold">4</span>
                  </div>
                  <span className="text-gray-600">Implementing smart supply chain optimization</span>
                </li>
              </ul>

              <a
                href="https://www.gaggananand.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 hover:text-yellow-700 font-medium"
              >
                Learn More About Gaggan Anand →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-6">
              Supporting Partners
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">EatoAgent Ecosystem</h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our supporting partners help amplify the impact of EatoAgent across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Corporate Partners</h3>
              <p className="text-gray-600 mb-4">To be announced</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Institutional Partners</h3>
              <p className="text-gray-600 mb-4">To be announced</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Partners</h3>
              <p className="text-gray-600 mb-4">To be announced</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section id="become-partner" className="py-20 bg-gradient-to-r from-yellow-50 to-amber-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with EatoAgent</h2>
            <p className="text-lg text-gray-700 mb-10">
              Join us in developing AI-powered solutions for food system optimization. If your organization is aligned
              with our mission, we invite you to connect with us.
            </p>
            <Link href="#contact">
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-8 py-6 text-lg">
                Apply to Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
