import React from 'react';
import Typography from 'typography';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers'
import { TypographyStyle } from 'utils/typography'

export default class Html extends React.Component {
  render() {
    let title;
    title = DocumentTitle.rewind();
    if (this.props.title) {
      title = this.props.title;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name='viewport' content='user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
          <title>{this.props.title}</title>
          <link rel="shortcut icon" href={this.props.favicon}/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
          <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="NDhmZmY3MWUtODI2My00YzFkLWFhZTMtMDYyMjRmYzczOGIyNjM2MzgxNTI1NzIyNzE5NDc3"></script>
          <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
          <TypographyStyle/>
          <style dangerouslySetInnerHTML={{__html:
            `
              body {
                color: rgb(66,66,66);
              }
              h1,h2,h3,h4,h5,h6 {
                color: rgb(44,44,44);
              }
              a {
                color: rgb(42,93,173);
                text-decoration: none;
              }
              a:hover {
                text-decoration: underline;
              }
            `
          }}/>
        </head>
        <body className="landing-page">
          <div id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}} />
          <script src={link("/bundle.js")}/>
        </body>
      </html>
    );
  }
}
Html.defaultProps = { body: "" };
