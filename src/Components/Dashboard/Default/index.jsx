import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";

import OverallBalance from "./OverallBalance";
import GreetingCard from "./GreetingCard";
import WidgetsWrapper from "./WidgetsWraper";
import RecentOrders from "./RecentOrders";
import ActivityCard from "./ActivityCard";
import RecentSales from "./RecentSales";
import TimelineCard from "./TimelineCard";
import PreAccountCard from "./PreAccountCard";
import TotalUserAndFollower from "./TotalUserAndFollower";
import PaperNote from "./PaperNote";
import Dashboards from "./Dashboards";
// import Dashboarddata from "./Dashboarddata";

const Dashboard = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Dashboard" parent="Dashboard" title="Dashboard" />
      <Container fluid={true}>
        <Row className="widget-grid">
          {/* <GreetingCard />
          <WidgetsWrapper />
          <OverallBalance />
          <RecentOrders />
          <ActivityCard />
          <RecentSales />
          <TimelineCard />
          <PreAccountCard />
          <TotalUserAndFollower />
          <PaperNote /> */}
          <Dashboards />
          {/* <Dashboarddata /> */}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
