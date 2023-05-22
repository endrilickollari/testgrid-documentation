import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import '../styles/global.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    const siteTitle = data.site.siteMetadata.title;

    return (
        <div>
            <Helmet>
                <title>{siteTitle}</title>
            </Helmet>
            <header>
                <h1>{siteTitle}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;