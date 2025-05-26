import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, Shield, Mail, Phone } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Organizations to <span className="text-blue-600">Make a Difference</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            GoWithFund Inc. organizes fundraisers for entities in need of financial support, helping vital community
            organizations secure the resources they need to thrive.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Partner With Us Today
          </Button>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We organize fundraisers for entities in need of financial support, serving as a bridge between
                  mission-driven organizations and the resources they need to create lasting impact in their
                  communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where vital community organizations have the resources they need to thrive and make a
                  difference, where fundraising barriers never prevent meaningful work from moving forward.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why We Exist</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Many impactful organizations struggle with fundraising, spending valuable time and resources on activities
            outside their core expertise. We bridge that gap, allowing these entities to focus on what they do best
            while we handle the complexities of effective fundraising campaigns.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Partnership</h3>
              <p className="text-gray-600">Specialized fundraising expertise when you need it most</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Focused Impact</h3>
              <p className="text-gray-600">Let organizations focus on their mission while we handle fundraising</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Strengthening the entire non-profit ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">What We Do</h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Strategic Fundraising Campaigns</h3>
                <p className="text-gray-700 leading-relaxed">
                  We partner with non-profits, community groups, and other mission-driven entities to design and execute
                  effective fundraising campaigns tailored to their specific needs and goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Comprehensive Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  From campaign planning and donor outreach to event coordination and follow-up, we provide end-to-end
                  fundraising support that maximizes impact and efficiency.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">Charitable Focus</h3>
                <p className="text-gray-700 leading-relaxed">
                  We exclusively support charitable, religious, educational, and scientific endeavors, making
                  distributions to organizations that qualify as exempt under section 501(c)(3) of the Internal Revenue
                  Code.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">Working together to achieve greater impact</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Impact</h3>
              <p className="text-gray-600">Measuring success by the difference we make</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">Operating with transparency and ethical standards</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-600">Dedicated to empowering other organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Commitment</h2>
          <Card className="border-2 border-blue-200">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                GoWithFund Inc. is dedicated to the highest standards of charitable operation. Incorporated as a
                Non-Profit Corporation in Idaho on September 17, 2024, we are currently in the process of applying for
                501(c)(3) tax-exempt status with the IRS.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div>
                  <Shield className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p>No private benefit from net earnings</p>
                </div>
                <div>
                  <Target className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p>Focused on charitable purposes only</p>
                </div>
                <div>
                  <Heart className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p>Assets dedicated to exempt purposes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Amplify Your Impact?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how GoWithFund Inc. can help your organization secure the funding it needs to make a lasting
            difference in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Mail className="h-5 w-5 mr-2" />
              Get in Touch
            </Button>
            <Button
              size="lg"
              className="bg-white/20 text-white border-2 border-white hover:bg-white hover:text-blue-600"
            >
              <Phone className="h-5 w-5 mr-2" />
              Schedule a Consultation
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Partner with us to focus on your mission while we handle your fundraising needs.
          </p>
        </div>
      </section>
    </div>
  )
}
