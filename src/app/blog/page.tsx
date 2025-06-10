import React from "react";

export default function Blog() {
  return (
    <section className="max-w-xl mx-auto py-6 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-6">Share your story</h2>

      <form
        action=""
        className="flex flex-col space-y-4 shadow shadow-gray-300 px-5 py-10 rounded-2xl"
      >
        <input
          type="text"
          placeholder="Title"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus: ring-[var(--color-primary)]"
        />

        <textarea
          placeholder="Write your story..."
          rows={6}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus: ring-[var(--color-primary)] resize-none"
        ></textarea>

        <button
          type="submit"
          className="self-start bg-[var(--color-primary)] text-white px-6 py-2 rounded-md font-semibold hover:bg-[var(--color-primary)]/90 transition"
        >
          Publish
        </button>
      </form>
    </section>
  );
}
