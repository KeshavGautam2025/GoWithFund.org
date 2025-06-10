'use client'
import React, { useState } from "react";
import { BriefcaseBusiness, X } from "lucide-react";
import { jobs } from "@/lib/jobs";

export default function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const openModal = (job: string) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };
  
  return (
      <section className="max-w-4xl mx-auto py-6 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Join our team</h2>
      <p className="text-gray-600 mb-8">
        We’re looking for passionate individuals to help us build the future of social impact. If you’re excited about using AI to make a difference, we’d love to hear from you.
      </p>

      <h3 className="text-xl font-semibold mb-4">Open Positions</h3>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.title}
            className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 rounded-md p-4 hover:shadow transition"
          >
            <div>
              <h4 className="font-medium text-lg">{job.title}</h4>
              <p className="text-sm text-gray-500">{`${job.location} (${job.type})`}</p>
            </div>

            <button
              onClick={() => openModal(job.title)}
              className="mt-3 sm:mt-0 inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md font-medium hover:bg-[var(--color-primary)]/90 transition"
            >
              <BriefcaseBusiness size={16} />
              Apply
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[var(--color-dark)]/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold mb-4">Apply for {selectedJob}</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CV / Resume</label>
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] text-white px-4 py-2 rounded-md font-medium hover:bg-[var(--color-primary)]/90 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
