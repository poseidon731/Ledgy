import { Helmet } from 'react-helmet';
import React from 'react';

export const ClickCease = () => (
  <>
    <Helmet>
      <script>
        {`
             var script = document.createElement('script');
             script.async = true; script.type = 'text/javascript';
             var target = 'https://www.clickcease.com/monitor/stat.js';
             script.src = target;var elem = document.head;
             elem.appendChild(script);
             script.defer = true;
           `}
      </script>
    </Helmet>
    <noscript>
      <a href="https://www.clickcease.com" rel="nofollow">
        <img src="https://monitor.clickcease.com/stats/stats.aspx" alt="ClickCease" />
      </a>
    </noscript>
  </>
);
