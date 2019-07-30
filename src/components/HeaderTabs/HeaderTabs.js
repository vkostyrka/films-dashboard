import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import SearchByNameTab from "../SearchByNameTab/SearchByNameTab";

class HeaderTabs extends React.Component{
  render() {
    return (
      <div className="HeaderTabs">
        <Tabs id="controlled-tab-example">
          <Tab eventKey="searchByName" title="Search by name">
            <SearchByNameTab />
          </Tab>
          <Tab eventKey="topFilms" title="TOP films">
            Lorem Ipsum
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default HeaderTabs
