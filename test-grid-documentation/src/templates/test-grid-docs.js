import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

const TestGridDocsTemplate = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;

    return (
        <Layout>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </Layout>
    );
};

export default TestGridDocsTemplate;