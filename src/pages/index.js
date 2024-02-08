// Redirects /docs route to /docs/introduction

import React from 'react';
import { Redirect } from '@docusaurus/router';

const Home = () => {
  return <Redirect to="/docs/introduction" />;
};

<Redirect to="/docs/introduction" />;

export default Home;
