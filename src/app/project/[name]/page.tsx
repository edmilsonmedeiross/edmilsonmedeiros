import React from "react";
import { useRouter } from "next/router";
import { Client } from "@/helpers/graphql";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";

async function DetailProject({ params }: { params: { name: string } }) {
  const repos = await Client.getPinnedRepos();
  const repo = repos.find((repo) => repo.name === params.name);

  return (
    <div className="h-screen w-full flex flex-col items-center">
      <Header />
      <div className="p-5">
        <div className="markdown-body p-5 max-w-3xl h-auto rounded-2xl">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-center" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="list-disc" {...props} />
              ),
            }}
          >
            {repo?.readme}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default DetailProject;
