import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PostContentHeading from "./post-content-heading";
import PostContentParagraph from "./post-content-paragraph";
import PostContentList from "./post-content-list";

export default function Column({ content, paddingRight, paddingLeft }) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <PostContentParagraph>{children}</PostContentParagraph>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <PostContentHeading fontSize="text-2xl lg:text-4xl">
          {children}
        </PostContentHeading>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <PostContentList>{children}</PostContentList>
      ),
    },
  };

  return (
    <div
      className={`w-full flex flex-col ${paddingRight ? paddingRight : ""} ${
        paddingLeft ? paddingLeft : ""
      }`}
    >
      {documentToReactComponents(content, options)}
    </div>
  );
}
