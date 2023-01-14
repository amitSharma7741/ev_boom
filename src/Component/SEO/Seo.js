import React from "react";
import { Helmet } from "react-helmet-async";
const Seo = (props) => {
  /* 
  title
  description
  image
  url
  */

  const url = "https://evstart.netlify.app" + props.url;

  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta
          name="keywords"
          content="Electric scooter , Electric vehicls, electric vehicles in india , ola , ola s1 pro , ather 450x "
        />
        <meta name="author" content="EVSTART" />
        <meta
          rel="sitemap"
          type="application/xml"
          content="https://evstart.netlify.app/sitemap.xml"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        {/* <meta name="google" content="nositelinkssearchbox" />   */}
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="format-detection" content="telephone=no" />
        {/*      <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="application-name" content="Blog Post" />
        <meta name="msapplication-tooltip" content="Blog Post" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/ms-icon-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/ms-icon-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/ms-icon-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/ms-icon-310x310.png" />
        <meta name="msapplication-notification" content="frequency=30;polling-uri=http://notifications.buildmypinnedsite.com/?feed=https://evstart.netlify.appfeed/&amp;id=1;polling-uri2=http://notifications.buildmypinnedsite.com/?feed=https://evstart.netlify.appfeed/&amp;id=2;polling-uri3=http://notifications.buildmypinnedsite.com/?feed=https://evstart.netlify.appfeed/&amp;id=3;polling-uri4=http://notifications.buildmypinnedsite.com/?feed=https://evstart.netlify.appfeed/&amp;id=4;polling-uri5=http://notifications.buildmypinnedsite.com/?feed=https://evstart.netlify.appfeed/&amp;id=5;cycle=1" /> */}

        {/* .................... */}
        <meta itemprop="name" content={props.title} />

        <meta itemprop="description" content={props.description} />
        <meta itemprop="image" content={props.image} />

        {/* .............. */}
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />
        <meta name="nightmode" content="enable/disable" />
        <meta name="layoutmode" content="fitscreen/standard" />
        <meta name="imagemode" content="force" />
        <meta name="screen-orientation" content="portrait" />
        <meta name="x5-orientation" content="portrait" />
        <meta name="x5-fullscreen" content="true" />
        <meta name="x5-page-mode" content="app" />
        {/* Canonical url */}
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="EVSTART" />

        <meta property="og:article:author" content="EVSTART" />
        <meta
          property="og:article:section"
          content="Electric vehicles Information"
        />
        <meta
          property="og:article:tag"
          content="Electric scooter , Electric vehicls, electric vehiclesin india , ola , ola s1 pro , ather 450x "
        />
        {/* <meta property="og:article:published_time" content="2020-09-09T12:00:00+00:00" /> */}
        {/* <meta property="og:article:modified_time" content="2020-09-09T12:00:00+00:00" /> */}

        <meta property="og:image" content={props.image} />
        <meta property="og:image:secure_url" content={props.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={props.description} />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:site" content="EVSTART" />
        <meta name="twitter:domain" content={url} />
        <meta name="twitter:app:name:iphone" content="Electric vehicle" />
        <meta name="twitter:app:name:ipad" content="Electric vehicle" />
        <meta name="twitter:app:name:googleplay" content="Electric vehicle" />
        <meta name="twitter:app:id:iphone" content="Electric vehicle" />
        <meta name="twitter:app:id:ipad" content="Electric vehicle" />
        <meta name="twitter:app:id:googleplay" content="Electric vehicle" />
        <meta name="twitter:app:url:iphone" content={url} />
        <meta name="twitter:app:url:ipad" content={url} />
        <meta name="twitter:app:url:googleplay" content={url} />
        <meta name="twitter:app:country" content="IN" />

        <meta name="twitter:creator" content="EVSTART" />
        <meta name="twitter:image" content={props.image} />
        <meta name="twitter:image:alt" content={props.description} />

        {/* 

        <meta name="referrer" content="origin" />
        <meta name="referrer" content="origin-when-crossorigin" />
        <meta name="referrer" content="unsafe-url" /> */}
      </Helmet>
    </>
  );
};

export default Seo;
