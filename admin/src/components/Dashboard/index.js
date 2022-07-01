/*
 *
 * Plausible analytics dashboard.
 *
 */

import React, { memo, useCallback, useEffect, useState } from "react";
import { request } from "@strapi/helper-plugin";
import { Box, Loader, Button, Badge, Typography } from "@strapi/design-system";
import { useIntl } from "react-intl";

import pluginId from "../../utils/pluginId";

const BG_COLORS = {
  ready: "success100",
  building: "alternative100",
  canceled: "neutral100",
  error: "danger100",
};

const TEXT_COLORS = {
  ready: "success500",
  building: "alternative500",
  canceled: "neutral500",
  error: "danger500",
};

const Dashboard = ({ config }) => {
  const { formatMessage } = useIntl();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(null);

  const triggerBuild = useCallback(async () => {
    setLoading(true);

    await fetch(config.buildUrl, { method: "POST" });

    setState("BUILDING");
  }, []);

  const fetchBuildDetails = useCallback(async () => {
    if (config.provider) {
      const data = await request(`/${pluginId}/${config.provider}/build`);

      setState(data.state);

      if (data.state !== "BUILDING") {
        setLoading(false);
      }
    }
  }, [config.provider]);

  useEffect(() => {
    if (!config.provider) {
      return;
    }

    if (state !== "BUILDING") {
      fetchBuildDetails();
    }

    const interval = setInterval(
      fetchBuildDetails,
      state === "BUILDING" ? 5000 : 30000
    );

    return () => {
      clearInterval(interval);
    };
  }, [state]);

  return (
    <Box padding={8}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        padding={8}
        background="neutral0"
        shadow="tableShadow"
        hasRadius
      >
        <Box paddingBottom={8} style={{ fontSize: 48 }}>
          🧱🏗
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="delta">
            {`${formatMessage({ id: `${pluginId}.page.current_status` })}: `}
          </Typography>
          <Box paddingLeft={2}>
            {state ? (
              <Badge
                backgroundColor={BG_COLORS[state.toLowerCase()]}
                textColor={TEXT_COLORS[state.toLowerCase()]}
              >
                {state}
              </Badge>
            ) : (
              <Loader small />
            )}
          </Box>
        </Box>
        <Box paddingTop={8}>
          {loading || state === "BUILDING" ? (
            <Loader />
          ) : (
            <Button onClick={() => triggerBuild()} disabled={!state}>
              {formatMessage({ id: `${pluginId}.page.action` })}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default memo(Dashboard);
