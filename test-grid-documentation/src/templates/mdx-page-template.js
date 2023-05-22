import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
    }
  }
`;

const MDXPageTemplate = ({ data }) => {
    const { body } = data.mdx;

    return (
        <div>
            <MDXRenderer>{body}</MDXRenderer>
        </div>
    );
};

export default MDXPageTemplate;
