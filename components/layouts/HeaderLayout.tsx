import Head from "next/head";
import { FC, ReactNode } from "react";
import Image from "next/image";
import Header from "../common/Header";

type HeaderLayoutProps = {
  title?: string;
  children: ReactNode;
};
export const HeaderLayout: FC<HeaderLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - OpenBook Explorer` : `OpenBook Explorer`}</title>
      </Head>
      <div className="w-full h-screen overflow-y-auto flex flex-col space-y-4 justify-between">
        <div className="w-full mx-auto">
          <Header />
          <div className="px-4 py-10 max-w-4xl mx-auto space-y-6">
            {children}
          </div>
        </div>
        <div className="pb-4 flex items-center justify-center">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-sm font-light flex items-center space-x-2 hover:font-medium focus-visible:outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:border-none"
          >
            <Image
              src="/rev.svg"
              width={24}
              height={24}
              alt="REV"
              className="cursor-pointer"
            />
            <p>☎️ Contact Support</p>
          </a>
        </div>
      </div>
    </>
  );
};

export const getHeaderLayout = (page: React.ReactNode, title?: string) => (
  <HeaderLayout title={title}>{page}</HeaderLayout>
);
