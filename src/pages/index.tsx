import { Page } from "@/components/Page";
import { AUTHOR } from "@/data";
import { Author } from "@/types";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../components/CanvasBanner"), {
  ssr: false,
});

/*
 *  This is the home page. It contains the 3D Banner component.
 */
export default function Home({ author }: { author: Author }) {
  return (
    <Page name="Home | Marketplace">
      <div className="grow">
        <h1 className="title-lg">Home</h1>
        <Banner text={author.description} image={author.image} />
      </div>
    </Page>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      author: AUTHOR,
    },
  };
};
