/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Suspense, lazy, useState, useEffect } from "react";
import { LoadingIndicatorPage, request } from "@strapi/helper-plugin";

import pluginId from "../../utils/pluginId";

const Dashboard = lazy(() => import("../../components/Dashboard"));

const App = () => {
  const [config, setConfig] = useState(false);

  useEffect(() => {
    (async () => {
      const config = await request(`/${pluginId}/config`, {
        method: "GET",
      });

      setConfig(config);
    })();
  }, []);

  return (
    <Suspense fallback={<LoadingIndicatorPage />}>
      {config && <Dashboard config={config} />}
    </Suspense>
  );
};

export default App;
