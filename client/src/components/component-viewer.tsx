import fs from "fs";
import dynamic from "next/dynamic";
import { HTMLAttributes, type JSX } from "react";
import CodeCopy from "@/components/code-copy";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ComponentLoader = dynamic(() => import("@/components/component-loader"), {
  ssr: false,
  loading: () => <p className="text-center">Loading...</p>,
});

interface Props {
  title: string;
  description?: string;
  componentPath: string;
  Component: (props: HTMLAttributes<HTMLDivElement>) => JSX.Element;
}

const ComponentViewer = (props: Props) => {
  const { title, description, Component, componentPath } = props;

  // Read the source code from component path
  const sourceCode = fs.readFileSync(componentPath, "utf-8");

  return (
    <div>
      <h6 className="text-xl font-semibold"> {title}</h6>
      {description && (
        <p className="text-sm text-secondary-foreground mt-2">{description}</p>
      )}

      <Tabs
        defaultValue="Preview"
        className="shadow border border-border rounded-2xl overflow-hidden mt-4"
      >
        <TabsList className="h-14 px-2.5 grid w-full grid-cols-2 rounded-2xl rounded-b-none">
          <TabsTrigger value="Preview" className="rounded-none rounded-tl-xl">
            Preview
          </TabsTrigger>
          <TabsTrigger value="Code" className="rounded-none rounded-tr-xl">
            Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Preview" className="mt-0 p-4">
          <ComponentLoader ChildComponent={<Component />} />
        </TabsContent>

        <TabsContent value="Code" className="mt-0">
          <ScrollArea className="h-[400px] code-result relative">
            <CodeCopy content={sourceCode} className="absolute top-4 right-4" />

            <SyntaxHighlighter style={dracula} language="tsx" showLineNumbers>
              {sourceCode}
            </SyntaxHighlighter>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComponentViewer;
