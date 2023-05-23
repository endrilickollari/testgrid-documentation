import React from 'react';
import {graphql, Link} from 'gatsby';

const IndexPage = ({data}) => {
    const {allMarkdownRemark} = data;
    const {edges} = allMarkdownRemark;

    return (
        <div className="wrapper">
            <header className="header">
                <h1>Documentation Site</h1>
            </header>
            <main className="main">
                <h2>Docs</h2>
                <ul>
                    {edges.map(({node}) => (
                        <li key={node.id}>
                            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                        </li>
                    ))}
                </ul>
            </main>
            <footer className="footer">
                <p>© 2023 My Documentation Site.</p>
            </footer>
        </div>
    );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
