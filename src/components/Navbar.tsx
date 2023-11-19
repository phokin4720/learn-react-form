import { Link } from "react-router-dom";
import { Tabs, TabList, Tab, Flex } from "@chakra-ui/react";

function Nav() {
  return (
    <>
      <Flex align="center" justify="center">
        <Tabs>
          <TabList>
            <Tab>
              <Link to="/FormData">Form</Link>
            </Tab>
            <Tab>
              <Link to="/Display">Display</Link>
            </Tab>
          </TabList>
        </Tabs>
      </Flex>
    </>
  );
}

export default Nav;
