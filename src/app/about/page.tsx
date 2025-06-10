"use client"

import {
  CalendarCheck,
  Globe,
  Handshake,
  Linkedin,
  Twitter,
  Users,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { team } from "@/lib/team";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function About() {

  const router = useRouter();

  const handleStart = () => {
    router.push("/volunteer");
  };

  return (
    <div className="flex flex-1 justify-center ">
      <div className="flex flex-col flex-1">
        <div className="@[480px]:p-4">
          <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-center px-4 pb-10 @[480px]:px-10 bg-[url(/hero3.png)]">
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                About Us
              </h1>
              <h2 className="text-white text-lg font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                GoWithFund is an AI-powered, modular ecosystem for social
                impact. We are a team of passionate individuals dedicated to
                creating a better world through technology and collaboration.
              </h2>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div>
          <h2 className="text-[var(--color-dark)] text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Our Mission
          </h2>
          <p className="text-[var(--color-dark)] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Our mission is to empower individuals and organizations to drive
            positive change in their communities and beyond. We believe that by
            leveraging the power of AI and fostering collaboration, we can
            address some of the world&apos;s most pressing challenges.
          </p>
        </div>

        {/* Our Values */}
        <div>
          <h2 className="text-[var(--color-dark)] text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Our Values
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dde1e3] bg-white p-4 items-center">
              <Users className="text-[var(--color-dark)" size={25} />
              <h2 className="text-[var(--color-dark)] text-base font-bold leading-tight">
                Community
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dde1e3] bg-white p-4 items-center">
              <Handshake className="text-[var(--color-dark)]" size={25} />
              <h2 className="text-[var(--color-dark)] text-base font-bold leading-tight">
                Collaboration
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dde1e3] bg-white p-4 items-center">
              <Globe className="text-[var(--color-dark)]" size={25} />
              <h2 className="text-[var(--color-dark)] text-base font-bold leading-tight">
                Impact
              </h2>
            </div>
          </div>
          <p className="text-[var(--color-dark)] text-base font-normal leading-normal pb-3 pt-1 px-4">
            We are committed to building a strong and inclusive community of
            changemakers. We believe that collaboration is key to achieving
            meaningful impact. We strive to create solutions that address global
            challenges and make a difference in people&apos;s lives.
          </p>
        </div>

        {/* Our Team */}
        <div>
          <h2 className="text-[var(--color-dark)] text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Our Team
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {team.map((member) => (
              <div
                key={member.role}
                className="flex flex-col gap-3 text-center pb-3"
              >
                <div className="px-4">
                  <Image
                    src={member.image}
                    alt="Avatar"
                    width={5000}
                    height={5000}
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-[var(--color-dark)] text-base font-medium leading-normal">
                    {member.name}
                  </p>
                  <p className="text-[#6a7881] text-sm font-normal leading-normal">
                    {member.role}
                  </p>
                  <div className="flex justify-center gap-3 pt-1">
                    <Link
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      className="inline text-[var(--color-dark)]"
                    >
                      <Linkedin
                        className="inline text-[var(--color-dark)]"
                        size={16}
                      />
                    </Link>
                    <Link
                      href={member.socialLinks.twitter}
                      target="_blank"
                      className="inline text-[var(--color-dark)]"
                    >
                      <Twitter
                        className="inline text-[var(--color-dark)]"
                        size={16}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

          
          {/* Our History */}
        <div>
          <h2 className="text-[var(--color-dark)] text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Our History
          </h2>
          <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
            <div className="flex flex-col items-center gap-1 pt-3">
              <CalendarCheck className="text-[var(--color-dark)]" size={25} />
              <div className="w-[1.5px] bg-[#dde1e3] h-2 grow"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-[var(--color-dark)] text-base font-medium leading-normal">
                Founded GoWithFund
              </p>
              <p className="text-[#6a7881] text-base font-normal leading-normal">
                2020
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-[1.5px] bg-[#dde1e3] h-2"></div>
              <Rocket className="text-[var(--color-dark)]" size={24} />
              <div className="w-[1.5px] bg-[#dde1e3] h-2 grow"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-[var(--color-dark)] text-base font-medium leading-normal">
                Launched First Product
              </p>
              <p className="text-[#6a7881] text-base font-normal leading-normal">
                2021
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 pb-3">
              <div className="w-[1.5px] bg-[#dde1e3] h-2"></div>
              <Users className="text-[var(--color-dark)]" size={25} />
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-[var(--color-dark)] text-base font-medium leading-normal">
                Reached 1000 Users
              </p>
              <p className="text-[#6a7881] text-base font-normal leading-normal">
                2022
              </p>
            </div>
          </div>
          <p className="text-[var(--color-dark)] text-base font-normal leading-normal pb-3 pt-1 px-4">
            GoWithFund was founded in 2020 with a vision to create a platform
            that empowers individuals and organizations to make a positive
            impact. In 2021, we launched our first product, and in 2022, we
            reached a milestone of 1000 users. We are excited about the future
            and our continued growth.
          </p>
        </div>

        <div className="flex px-4 py-3 justify-center">
          <button onClick={handleStart} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/80 text-[var(--color-dark)] text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
}
