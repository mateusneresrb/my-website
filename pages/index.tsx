import { Link } from "_client/link";
import clsx from "clsx";
import { HeroIcon } from "components/dynamic-hero-icon";
import { ReactIcon } from "components/dynamic-react-icon";
import { useToast } from "components/toast";
import { Code, CodeGroupProps } from "components/typography/code";
import { CODE } from "content/code";
import { FC, useCallback, useEffect, useRef } from "react";
import party from "party-js";
import { useCopyToClipboard } from "react-use";
type IndexProps = {};

party.settings.respectReducedMotion = false;

const CopyButton = ({ content, className }: { className: string; content: string }) => {
  const [state, copyToClipboard] = useCopyToClipboard();
  const { toasts, addToast } = useToast();

  const handleCopyCode = useCallback(() => {
    copyToClipboard(content);
    addToast({
      id: "copy-code",
      message: "Code Copied to Clipboard",
      timestamp: Date.now(),
    });
  }, [addToast, content, copyToClipboard]);

  return (
    <button className={clsx(className, "transition-colors")} onClick={handleCopyCode} type="button">
      {toasts.some((notification) => notification.id === "copy-code")
        ? <HeroIcon name="ClipboardDocumentCheckIcon" className="h-5 w-5 text-sky-400" />
        : <HeroIcon name="ClipboardDocumentIcon" className="h-5 w-5" />}
    </button>
  );
};

const CodeEditor = ({
  code,
  language,
}: {
  code: string | string[];
  language: CodeGroupProps["language"];
}) => {
  return (
    <figure className="h-full w-full flex-col overflow-hidden rounded-md border-2 border-gray-200/40 bg-gray-900 p-2.5 shadow-2xl drop-shadow-lg">
      <header
        className="mb-2 grid items-center border-b border-b-gray-800 pb-2"
        style={{ gridTemplateColumns: "50px 1fr 50px" }}
      >
        <i className="flex gap-1.5">
          <button
            tabIndex={-1}
            aria-hidden
            className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#EC6A5F]"
          />
          <button
            tabIndex={-1}
            aria-hidden
            className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#F4BF50]"
          />
          <button
            tabIndex={-1}
            aria-hidden
            className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#61C454]"
          />
        </i>
        <h4 className="color select-none text-center text-[13px] leading-none tracking-wide text-gray-500">
          /index.tsx
        </h4>
        <div className="flex justify-end">
          <CopyButton
            content={Array.isArray(code) ? code.join("\n") : code}
            className="text-gray-500 hf:text-white"
          />
        </div>
      </header>
      <main className=" relative h-[calc(100%-37px)] overflow-hidden  before:absolute b:pointer-events-none b:bottom-0 b:z-10 b:h-12 b:w-full b:select-none b:bg-gradient-to-b b:from-transparent b:to-gray-900">
        <div className="scrollbar-none relative h-full overflow-auto ">
          <Code className="text-[13px]" code={CODE.hero} language={language} />
        </div>
      </main>
    </figure>
  );
};

export const Index: FC<IndexProps> = (props) => {
  return (
    <>
      <section className="hero relative min-h-[80vh] overflow-hidden">
        <div className="mx-auto max-w-6xl grid-cols-3 gap-8 px-4 py-16 md:py-32 md:px-8 lg:grid">
          <section className="col-span-2">
            <header>
              <div className="heading-pre">Welcome to my site.</div>
              <h1 className="heading-hero ">
                I'm <strong>Felix Tellmann</strong>, a Fullstack developer.
              </h1>
              {/* <h2 className="heading-hero ">
                <Typewriter
                  loop={false}
                  items={[
                    <>
                      I'm a <u>Fullstack</u> developer
                    </>,

                    <>I build websites & web apps</>,
                  ]}
                />
              </h2>*/}
              <ul className="scrollbar-none -mx-4 mb-4 flex items-center gap-6 overflow-x-auto px-4 text-[15px] font-medium">
                <li className="flex items-center gap-2 text-gray-500">
                  <ReactIcon name="SiReact" className="h-7 w-7 text-gray-400" />
                  React.js
                </li>
                <li className="flex items-center gap-2 text-gray-500">
                  <ReactIcon name="SiNodedotjs" className="h-7 w-7  text-gray-400" />
                  Node.js
                </li>
                <li className="flex items-center gap-2 text-gray-500">
                  <ReactIcon name="SiTailwindcss" className="h-7 w-7  text-gray-400" />
                  Tailwind
                </li>
                <li className="flex items-center gap-2 text-gray-500">
                  <ReactIcon name="SiShopify" className="h-7 w-7  text-gray-400" />
                  Shopify
                </li>
              </ul>
            </header>
            <main>
              <p className="mb-3 max-w-prose font-normal text-gray-500 md:text-lg md:tracking-tight">
                I love writing code that takes things next level creating highly performant
                websites, automated API integrations, building my own dev-tools, and creating
                stunning user-experiences that makes you feel{" "}
                <em
                  className="cursor-pointer"
                  onClick={(e) => {
                    party.confetti(e.currentTarget, { count: 40 });
                  }}
                >
                  WOW!
                </em>
                .
              </p>

              <p className="mb-3 max-w-xl font-normal text-gray-500 md:text-lg md:tracking-tight">
                I am always keen to learn and explore new technologies, frameworks and programming
                languages. Currently, I'm learning{" "}
                <Link
                  target="_blank"
                  href="https://astro.build/"
                  className="underline hfa:text-sky-500"
                >
                  Astro
                </Link>
                .
              </p>
            </main>
            <footer className="mt-6 flex flex-wrap gap-4 md:gap-8">
              <Link
                href="/contact"
                className="button-rainbow inline-flex whitespace-nowrap bg-gray-800 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-50 hfa:border-gray-300/90 hfa:bg-gray-900 hfa:text-white md:px-12"
              >
                Lets work
              </Link>

              <Link
                href="/resume"
                className="button-border inline-flex whitespace-nowrap bg-white/90 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-500 hfa:border-gray-900/70 hfa:bg-white/90 hfa:text-gray-900 md:px-12"
              >
                See Resume
              </Link>
            </footer>
          </section>
          <section className="relative h-[460px]">
            <div className="absolute left-4 top-16 flex h-full min-w-[460px] sm:left-8 sm:min-w-[660px] lg:left-6 lg:top-24 lg:min-w-[460px]">
              <CodeEditor code={CODE.hero} language="tsx" />
            </div>
          </section>
        </div>
        <div className="background pointer-events-none absolute inset-0 z-0 select-none"></div>
      </section>
    </>
  );
};

export default Index;
