import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function ProblemStatement({ description }: { description: string }) {
  return (
    <article className="markdown-container">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ node, ...props }) => <h2 className="markdown-heading" {...props} />,
          h4: ({ node, ...props }) => <h4 className="markdown-subheading" {...props} />,
          //@ts-ignore
          code: ({ node, inline, className, children, ...props }) =>
            inline ? (
              <code className="markdown-inline-code" {...props}>
                {children}
              </code>
            ) : (
              //@ts-ignore
              <pre className="markdown-codeblock" {...props}>
                {children}
              </pre>
            ),
        }}
      >
        {description}
      </Markdown>
      
    </article>
  );
}
