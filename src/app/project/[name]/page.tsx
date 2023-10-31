import React from "react";
import { Client } from "@/helpers/graphql";
import ReactMarkdown from "react-markdown";
import CopyButton from "@/components/CopyButton";

async function DetailProject({ params }: { params: { name: string } }) {
  const repos = await Client.getPinnedRepos();
  const repo = repos.find((repo) => repo.name === params.name);

  return (
    <div className="flex flex-col md:items-center" id="blur1">
      <div className="p-5">
        <div className="markdown-body p-5 max-w-3xl w-full h-auto rounded-2xl">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-center" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="list-disc" {...props} />
              ),
              pre: ({ children, ...props }) => {
                let content = "";
                React.Children.forEach(children, (child) => {
                  if (typeof child === "string") {
                    content += child;
                  } else if (
                    React.isValidElement(child) &&
                    typeof child.props.children === "string"
                  ) {
                    content += child.props.children;
                  }
                });

                return (
                  <div className="flex justify-between items-start gap-2 rounded-xl">
                    <pre
                      className="p-0 m-0 flex-1 overflow-y-auto max-h-[300px]"
                      {...props}
                    >
                      {children}
                    </pre>
                    <CopyButton textToCopy={content} />
                  </div>
                );
              },
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
