import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SearchByNameTab from "../SearchByNameTab/SearchByNameTab";
import LatestMovie from "../LatestMovie/LatestMovie";
import CustomSearch from "../CustomSearch/CustomSearch";

class HeaderTabs extends React.Component {
  render() {
    return (
      <div className="HeaderTabs">
        <Tabs id="controlled-tab-example">
          <Tab eventKey="searchByName" title="Search by name">
            <SearchByNameTab />
          </Tab>
          <Tab eventKey="latestFilms" title="Latest films">
            <LatestMovie />
          </Tab>
          <Tab eventKey="customizedSearch" title="Custom search">
            <CustomSearch />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default HeaderTabs;
