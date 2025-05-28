import Head from 'next/head';
import Script from 'next/script';

export const metadata = {
  title: 'GoWithFund.org - Contribute as a Developer',
};

export default function ContributeDevelopersPage() {
  return (
    <>
      <Head>
        <link crossOrigin="" href="https://fonts.gstatic.com/" rel="preconnect" />
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?display=swap&amp;family=Inter%3Awght%40400%3B500%3B700%3B900&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
          rel="stylesheet"
          onLoad="this.rel='stylesheet'"
        />
        <meta charSet="utf-8" />
        <link href="data:image/x-icon;base64," rel="icon" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" strategy="beforeInteractive" />

      {/* Body Wrapper - Next.js handles body and html tags */}
      <div className="bg-[#111418] text-white" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <header className="sticky top-0 z-50 bg-[#111418]/80 backdrop-blur-md">
              <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-6 py-4">
                <div className="flex items-center gap-3">
                  <svg className="h-8 w-8 text-[#0c7ff2]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                  </svg>
                  <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">GoWithFund.org</h2>
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                  <a className="hover:text-[#0c7ff2] transition-colors" href="#projects">Projects</a>
                  <a className="hover:text-[#0c7ff2] transition-colors" href="#community">Community</a>
                  <a className="hover:text-[#0c7ff2] transition-colors" href="#mission">About Us</a>
                  <a className="hover:text-[#0c7ff2] transition-colors" href="#contact">Contact</a>
                </nav>
                <div className="flex items-center gap-4">
                  <a className="text-white hover:text-[#0c7ff2] transition-colors" href="https://github.com/GoWithFund" rel="noopener noreferrer" target="_blank">
                    <svg className="feather feather-github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <button className="flex min-w-[100px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-[#0c7ff2] text-white text-sm font-semibold leading-normal tracking-[0.015em] hover:bg-[#0a6cce] transition-colors">
                    <span className="truncate">Get Involved</span>
                  </button>
                </div>
              </div>
            </header>
            <main className="flex-1">
              <section className="relative py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(17, 20, 24, 0.8) 0%, rgba(17, 20, 24, 0.95) 100%), url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")' }}>
                <div className="container mx-auto px-6 text-center">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
                    Contribute as a Developer
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    Join GoWithFund.org, a nonprofit dedicated to developing open source AI solutions for fundraising, job boards, co-founder matching, and a thriving developer community. Contribute to projects that make a real difference in education, healthcare, and social development.
                  </p>
                  <a className="inline-flex items-center justify-center rounded-md h-12 px-8 bg-[#0c7ff2] text-white text-base font-semibold tracking-[0.015em] hover:bg-[#0a6cce] transition-colors shadow-lg" href="#projects">
                    Explore Projects
                    <span className="material-icons ml-2">arrow_forward</span>
                  </a>
                </div>
              </section>
              <section className="py-16 md:py-24 bg-[#1a1e23]" id="mission">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                      GoWithFund.org is a nonprofit organization committed to leveraging the power of AI and open source software to address critical challenges in the charitable and educational sectors. Our projects aim to provide accessible and innovative resources that improve education, healthcare, and social development initiatives globally.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-[#283039] p-8 rounded-lg shadow-lg">
                      <span className="material-icons text-5xl text-[#0c7ff2] mb-4">school</span>
                      <h3 className="text-xl font-semibold mb-2">Education</h3>
                      <p className="text-gray-400">Developing AI tools to enhance learning experiences and educational accessibility.</p>
                    </div>
                    <div className="bg-[#283039] p-8 rounded-lg shadow-lg">
                      <span className="material-icons text-5xl text-[#0c7ff2] mb-4">health_and_safety</span>
                      <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                      <p className="text-gray-400">Creating open source solutions to improve healthcare outcomes and research.</p>
                    </div>
                    <div className="bg-[#283039] p-8 rounded-lg shadow-lg">
                      <span className="material-icons text-5xl text-[#0c7ff2] mb-4">groups</span>
                      <h3 className="text-xl font-semibold mb-2">Social Development</h3>
                      <p className="text-gray-400">Building platforms that foster community growth and social impact.</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-16 md:py-24" id="projects">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contribute to Our Projects</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                      We welcome developers of all skill levels to contribute to our open source projects. Whether you&apos;re passionate about AI, fundraising, community building, or making a positive impact, there&apos;s a place for you at GoWithFund.org.
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <a className="inline-flex items-center justify-center rounded-md h-12 px-8 bg-[#0c7ff2] text-white text-base font-semibold tracking-[0.015em] hover:bg-[#0a6cce] transition-colors shadow-lg w-full md:w-auto" href="https://github.com/GoWithFund" rel="noopener noreferrer" target="_blank">
                      <span className="material-icons mr-2">code</span>
                      View Projects on GitHub
                    </a>
                    <a className="inline-flex items-center justify-center rounded-md h-12 px-8 bg-[#283039] text-white text-base font-semibold tracking-[0.015em] hover:bg-[#3b4654] transition-colors shadow-lg w-full md:w-auto" href="#community">
                      <span className="material-icons mr-2">forum</span>
                      Join Our Community
                    </a>
                  </div>
                </div>
              </section>
              <section className="py-16 md:py-24 bg-[#1a1e23]" id="contact">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                      Have questions or want to learn more about GoWithFund.org? Reach out to us.
                    </p>
                  </div>
                  <div className="max-w-lg mx-auto bg-[#283039] p-8 rounded-lg shadow-xl">
                    <form action="#" method="POST">
                      <div className="grid grid-cols-1 gap-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300" htmlFor="full-name">Full name</label>
                          <div className="mt-1">
                            <input autoComplete="name" className="block w-full rounded-md border-gray-600 bg-[#1f252e] py-3 px-4 text-white shadow-sm focus:border-[#0c7ff2] focus:ring-[#0c7ff2]" id="full-name" name="full-name" type="text" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300" htmlFor="email">Email</label>
                          <div className="mt-1">
                            <input autoComplete="email" className="block w-full rounded-md border-gray-600 bg-[#1f252e] py-3 px-4 text-white shadow-sm focus:border-[#0c7ff2] focus:ring-[#0c7ff2]" id="email" name="email" type="email" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300" htmlFor="message">Message</label>
                          <div className="mt-1">
                            <textarea className="block w-full rounded-md border-gray-600 bg-[#1f252e] py-3 px-4 text-white shadow-sm focus:border-[#0c7ff2] focus:ring-[#0c7ff2]" id="message" name="message" rows={4}></textarea>
                          </div>
                        </div>
                        <div>
                          <button className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#0c7ff2] hover:bg-[#0a6cce] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#283039] focus:ring-[#0c7ff2] transition-colors" type="submit">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="mt-8 flex justify-center space-x-6">
                      <a className="text-gray-400 hover:text-[#0c7ff2] transition-colors" href="mailto:contact@gowithfund.org">
                        <span className="material-icons text-3xl">email</span>
                      </a>
                      <a className="text-gray-400 hover:text-[#0c7ff2] transition-colors" href="https://linkedin.com/company/gowithfund" rel="noopener noreferrer" target="_blank">
                        <svg fill="currentColor" height="30" viewBox="0 0 256 256" width="30" xmlns="http://www.w3.org/2000/svg">
                          <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <footer className="bg-[#0d1013] py-12">
              <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-6 mb-6">
                  <a className="text-[#9cabba] hover:text-[#0c7ff2] transition-colors" href="https://github.com/GoWithFund" rel="noopener noreferrer" target="_blank">
                    <svg className="feather feather-github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a className="text-[#9cabba] hover:text-[#0c7ff2] transition-colors" href="https://linkedin.com/company/gowithfund" rel="noopener noreferrer" target="_blank">
                    <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                    </svg>
                  </a>
                  <a className="text-[#9cabba] hover:text-[#0c7ff2] transition-colors" href="mailto:contact@gowithfund.org">
                    <span className="material-icons">email</span>
                  </a>
                </div>
                <p className="text-[#9cabba] text-sm font-normal leading-normal">© 2024 GoWithFund.org. All rights reserved.</p>
                <p className="text-xs text-gray-500 mt-2">Dedicated to charitable and educational purposes.</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
